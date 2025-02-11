import React from 'react';
import { ToastContainer } from 'react-toastify';

import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import AuthProvider from '../components/Auth/AuthProvider';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

// for SEO
export const metadata = {
    title: 'PropertyHub | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang='en'>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <ToastContainer />
                </body> 
            </html>
        </AuthProvider>
    )
}

export default MainLayout
