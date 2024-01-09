import AuthLayout from '@/components/authlayout'
import useClass from '@/hooks/useClass'
import Link from 'next/link'
import React from 'react'

export default function Class() {
    const { addClass, classes } = useClass()
    return (
        <AuthLayout>
            <main
                className='flex flex-col items-center justify-center w-full h-full px-4 py-2'
            >
                <section
                    className='grid grid-cols-3 gap-4 items-center justify-center w-full h-full'
                >
                    {
                        classes?.map((item, index) => (
                            <Link
                                href={`/dashboard/class/${item.id}`}
                                className='bg-blue-500 text-white px-4 py-2 rounded-md'
                                key={index}>
                                {item.name}
                            </Link>
                        ))
                    }
                </section>
            </main>
        </AuthLayout>
    )
}
