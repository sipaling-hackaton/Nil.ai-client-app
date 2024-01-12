import useAuth from '@/hooks/useAuth'
import useBalance from '@/hooks/useBalance'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ApplicationLogo from './applicationlogo'

interface Props {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
    const { balance } = useBalance()
    const { logout, isLogin } = useAuth()
    const { push } = useRouter()

    const handleLogout = () => {
        logout()
    }

    useEffect(() => {
        if (isLogin === false) {
            push('/login')
        }
    }, [isLogin])

    return (
        <main
            className='max-w-full w-full min-h-screen '
        >
            {/* navbar */}
            <div
                className='w-screen h-16 bg-primmary
                flex items-center justify-between px-4 py-2'
            >
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <ApplicationLogo />
                    </div>
                    <div className='flex items-center'>
                        <Link
                            className='mr-4 text-black font-poppins'
                            href={"/dashboard"}
                        >
                            Classes
                        </Link>
                        <Link
                            className='mr-4 text-black font-poppins'
                            href={"/dashboard/profile"}
                        >
                            Profile
                        </Link>

                        <button
                            onClick={handleLogout}
                            className='mr-4 text-white px-4 py-2 rounded-md bg-accent'
                        >
                            Log Out
                        </button>
                        <Link
                            href={"/topup"}
                            className='ml-2 font-bold text-white bg-yellow-800 p-4'
                        >
                            {balance}
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-background py-[3.12rem] px-[5rem]'>
                {children}
            </div>
        </main>
    )
}
