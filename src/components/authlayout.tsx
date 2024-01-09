import useAuth from '@/hooks/useAuth'
import useBalance from '@/hooks/useBalance'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

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
                className='w-screen h-16 bg-gray-800
                flex items-center justify-between px-4 py-2'
            >
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <div className='h-8 w-8 bg-white rounded-full'></div>
                        <div className='ml-2 font-bold text-white'>Logo</div>
                    </div>
                    <div className='flex items-center'>
                        <button
                            onClick={handleLogout}
                            className='mr-4 text-white px-4 py-2 rounded-md bg-red-500'
                        >
                            Log Out
                        </button>
                        <div className='bg-white rounded-full h-8 w-8'></div>
                        <Link
                            href={"/topup"}
                            className='ml-2 font-bold text-white bg-yellow-800 p-4'
                        >
                            {balance}
                        </Link>
                    </div>
                </div>
            </div>
            {children}
        </main>
    )
}
