'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; 
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PropertyCard from '@/components/Property/PropertyCard';
import Spinner from '@/components/Elements/Spinner';
import PropertySearchForm from '@/components/Property/PropertySearchForm';

const SearchResultsPage = async () => {
    const searchParams = useSearchParams();

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const res = await fetch(`/api/properties/search?location=${location}&propertyType=${propertyType}`);

                if (res.status === 200) {
                    const data = await res.json();
                    setProperties(data);
                }
                else {
                    console.log(res.statusText);
                    toast.error('Failed to fetch saved properties');
                }
            } catch (error) {
                console.log(error);
                toast.error('Failed to fetch saved properties');
            } finally {
                setLoading(false);
            }
        }

        fetchSearchResults();
    }, [location, propertyType]);

    return (
        <>
            <section className='bg-blue-700 py-4'>
                <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
                </div>
            </section>

            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto px-4 py-6'>
                    {properties.length === 0 ? (
                        <p>No properties found</p>
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
};   

export default SearchResultsPage;
