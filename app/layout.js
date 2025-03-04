'use client'; 

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '../context/GlobalContext';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import AuthProvider from '../components/Auth/AuthProvider';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css'

const MainLayout = ({ children }) => {
    return (
        <SessionProvider>
            <GlobalProvider>
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
            </GlobalProvider>
        </SessionProvider>
    )
}

export default MainLayout
