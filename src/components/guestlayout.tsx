import Link from 'next/link'
import React from 'react'
import Footer from './footer'

interface Props {
    children: React.ReactNode
}

export default function GuestLayout({ children }: Props) {
    return (
        <main
            className='max-w-full w-full min-h-screen '
        >
            {/* navbar */}
            <div
                className='w-full h-16 bg-gray-800
                flex items-center justify-between px-4 py-2'
            >
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <div className='h-8 w-8 bg-white rounded-full'></div>
                        <div className='ml-2 font-bold text-white'>Logo</div>
                    </div>
                    <div className='flex items-center'>
                        <Link href={"/login"} className='mr-4 text-white'>Login</Link>
                        <div className='bg-white rounded-full h-8 w-8'></div>
                    </div>
                </div>
            </div>
            <div
            >
                {children}
            </div>
            <Footer />
        </main>
    )
}
