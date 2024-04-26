import React from 'react';
import Navbar from '@/components/Navigation/Navbar';
import '@/assets/styles/globals.css';

// for SEO
export const metadata = {
    title: 'PropertyHub | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
            </body> 
        </html>
    )
}

export default MainLayout
