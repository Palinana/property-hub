import Link from 'next/link';
import PropertyCard from '@/components/Property/PropertyCard';
import properties from '@/properties.json'

const HomeProperties = async () => {
    // to display only 3 random property
    const recentProperties = properties
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);

    return (
        <>
            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto'>
                    <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
                        Recent Properties
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {recentProperties.length === 0 ? (
                            <p>No Properties Found</p>
                            ) : (
                                recentProperties.map((property) => (
                                <PropertyCard key={property._id} property={property} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProperties;
