import AuthLayout from '@/components/authlayout'
import useBalance from '@/hooks/useBalance'
import useClass from '@/hooks/useClass'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


export default function Dashboard() {

    const { push } = useRouter()
    const { addClass, classes } = useClass()
    const [joinClassExpandable, setJoinClassExpandable] = React.useState(false)

    const handleAddClass = () => {
        push('/dashboard/class/create')
    }
    return (
        <AuthLayout>
            <main
                className='flex flex-col 
                gap-[3.12rem]
                items-center justify-center w-full h-full'
            >
                <section
                    className='w-full'
                >
                    <div
                        className='flex items-center justify-center w-full h-full border 
                        border-b-black mb-4'
                    >
                        <h1
                            className='font-poppins capitalize font-[500] text-neutral text-[1.375rem] w-full text-left'
                        >
                            New Class
                        </h1>
                    </div>
                    <div
                        className='flex items-center w-full h-full gap-4'
                    >
                        <button
                            onClick={() => setJoinClassExpandable(!joinClassExpandable)}
                            className='bg-transparent px-4 py-2 rounded-md
                            border-[1.5px] border-primmary
                            text-black text-[1.125rem] font-[500] font-poppins w-full'

                        >
                            Join existing class
                        </button>
                        <button
                            onClick={handleAddClass}
                            className='bg-primmary px-4 py-2 rounded-md
                            text-black text-[1.125rem] font-[500] font-poppins w-full'
                        >
                            Add new class
                        </button>
                    </div>
                    {/* expandable */}
                    {
                        joinClassExpandable && (
                            <div
                                className='flex flex-row items-center justify-center w-full h-full gap-4 mt-4'
                            >
                                <input
                                    type="text"
                                    placeholder='Class Name'
                                    className='bg-white text-black px-2 py-2 rounded-md w-full outline-none'
                                />
                                <button
                                    className='bg-primmary text-white px-4 py-2 rounded-md w-[8rem]'
                                >
                                    Join Class
                                </button>
                            </div>
                        )
                    }
                </section>
                <section
                    className='flex flex-col gap-[1.25rem] w-full'
                >
                    <div
                        className='flex items-center justify-center w-full h-full border 
                        border-b-black'
                    >
                        <h1
                            className='font-poppins capitalize font-[500] text-neutral text-[1.375rem] w-full text-left'
                        >
                            Class Overview
                        </h1>
                    </div>
                    <div
                        className='flex items-center justify-between w-full h-full gap-4'
                    >
                        <input
                            className='bg-secondary text-black px-2 py-2 rounded-md outline-none'
                            placeholder='Search Class'
                            type="text" />
                        <p>
                            Showing 5 of 10 class
                        </p>
                    </div>
                    <div
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
                    </div>
                </section>
            </main>
        </AuthLayout>
    )
}
