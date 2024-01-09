import Alert from '@/components/alert'
import AuthLayout from '@/components/authlayout'
import useBalance from '@/hooks/useBalance'
import { useRouter } from 'next/router'
import React from 'react'


export default function index() {
    const { addBalance, balance, isLoading } = useBalance()

    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    return (
        <AuthLayout>
            <main
                className='flex flex-col gap-2 items-center justify-center w-full h-full
                px-4 py-2
                '
            >

                <button
                    onClick={handleBack}
                    className='bg-blue-500 text-white px-4 py-2 rounded-md w-[20rem] mb-4'
                >
                    Back
                </button>
                <h1
                    className='text-2xl font-bold'
                >
                    This is topup
                </h1>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <Alert
                        message='50 Coins added to your balance'
                    >
                        <button
                            onClick={() => addBalance(50)}
                            className='bg-blue-500 text-white px-4 py-2 rounded-md w-[20rem] mb-4'
                        >
                            50 Coins
                        </button>
                    </Alert>
                    <button
                        onClick={() => addBalance(100)}
                        className='bg-blue-500 text-white px-4 py-2 rounded-md w-[20rem] mb-4'
                    >
                        100 Coins
                    </button>
                </div>
            </main>
        </AuthLayout>
    )
}
