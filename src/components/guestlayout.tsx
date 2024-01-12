import Link from 'next/link'
import React from 'react'
import Footer from './footer'
import ApplicationLogo from './applicationlogo'

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
                className='w-full h-[4.37rem] bg-primmary
                flex items-center justify-between px-4 py-2'
            >
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <ApplicationLogo />
                    </div>
                    <div className='flex items-center'>
                        <Link href={"/login"}
                            className='mr-4 text-white
                            border-[2px] border-white rounded-md px-4 py-2
                            text-[1.125rem] font-[400]
                            
                            hover:bg-white hover:text-black
                            '
                        >
                            Login
                        </Link>
                        <Link href={"/register"}
                            className='mr-4 text-white bg-accent
                             rounded-md px-4 py-2
                            text-[1.125rem] font-[400]
                            hover:bg-white hover:text-black
                            '
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className='bg-background pt-[3.12rem]'
            >
                {children}
            </div>
            <Footer />
        </main>
    )
}
