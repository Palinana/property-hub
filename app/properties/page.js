import PropertyCard from '@/components/Property/PropertyCard';
import PropertySearchForm from '@/components/Property/PropertySearchForm';
import Link from 'next/link';
import { fetchProperties } from '@/utils/requests';

const PropertiesPage = async () => {
    const properties = await fetchProperties();

    // Sort properties by date
    properties.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <>
            <section className='bg-blue-700 py-4'>
                <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
                    <PropertySearchForm />
                </div>
            </section>

            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto px-4 py-6'>
                    <h1 className='text-2xl mb-4'>Search Results</h1>
                    {properties.length === 0 ? (
                        <p>No search results found</p>
                    ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {properties.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default PropertiesPage
