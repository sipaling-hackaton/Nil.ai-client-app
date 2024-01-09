import AuthLayout from '@/components/authlayout'
import React from 'react'

interface Props {
    assignment_id: string
    questions: {
        question: string
    }[]
}
export default function TeacherPage({
    assignment_id, questions,
}: Props) {
    return (
        <AuthLayout>
            <main
                className='flex flex-col items-center justify-center w-full h-full
                px-4 py-2 gap-[10px]'
            >
                <h1
                    className='text-2xl font-bold'
                >
                    This is assignment detail of class {assignment_id}
                </h1>
                <section
                    className='flex flex-col gap-[10px] items-center justify-center w-full h-full'
                >
                    {
                        questions?.map((item, index) => (
                            <div
                                className='bg-blue-500 text-white px-4 py-2 rounded-md w-full'
                                key={index}
                            >
                                {item.question}
                            </div>
                        ))
                    }
                </section>
            </main>
        </AuthLayout>
    )
}