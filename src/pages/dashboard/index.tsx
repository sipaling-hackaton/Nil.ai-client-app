import AuthLayout from '@/components/authlayout'
import useBalance from '@/hooks/useBalance'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


export default function Dashboard() {

    const { push } = useRouter()

    return (
        <AuthLayout>
            <main
                className='flex flex-col items-center justify-center w-full h-full'
            >
                <h1>
                    This is dashboard
                </h1>
                <section>
                    <button
                        onClick={() => push('/dashboard/class')}
                        className='bg-blue-500 text-white px-4 py-2 rounded-md w-[20rem] mb-4'
                    >
                        Class Menu
                    </button>
                </section>
            </main>

        </AuthLayout>
    )
}
