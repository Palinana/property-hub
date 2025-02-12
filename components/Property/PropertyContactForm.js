'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const PropertyContactForm = ({ property }) => {
    const { data: session } = useSession();

    
    return (
        <div className='bg-white p-6 rounded-lg shadow-md'>
            Form
        </div>
    )
};

export default PropertyContactForm;
