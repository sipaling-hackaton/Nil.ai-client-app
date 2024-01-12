import Alert from '@/components/alert'
import AuthLayout from '@/components/authlayout'
import { DevTool } from '@hookform/devtools'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface Props {
    assignment_id: string
    questions: {
        question: string
    }[]
}

function Studentpage({ assignment_id, questions }: Props) {
    const { push } = useRouter()
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data: any) => {
        data.id = assignment_id
        data.user_id = '1'
        push(`/dashboard`)
    }
    return (
        <AuthLayout>
            <main
                className='flex flex-col items-center justify-center w-full h-full
                px-4 py-2 gap-[10px]'
            >
                <section
                    className='flex w-full h-full gap-4'
                >
                    <div
                        className='flex items-center justify-center w-full h-full border 
                            pb-2 border-b-black mb-4'
                    >
                        <h1
                            className='font-poppins capitalize font-[500] text-neutral text-[1.375rem] w-full text-left'
                        >
                            Assigments: {assignment_id}
                        </h1>
                    </div>
                </section>
                <form
                    onSubmit={handleSubmit(onSubmit,
                        (err) => console.log('err', err))}
                    className='flex flex-col gap-[10px] items-center justify-center w-full h-full'
                >
                    {
                        questions?.map((item, index) => {
                            return (
                                <div
                                    className='bg-transparent text-black px-4 py-2 rounded-md w-full
                                    flex flex-col'
                                    key={index}
                                >
                                    <h2>
                                        {index + 1}. {item.question}
                                    </h2>
                                    <textarea
                                        id='answer'
                                        {...register(`answer${index}`)}
                                        className='bg-white text-black px-2 py-2 rounded-md w-full outline-none'
                                        placeholder='Answer here'
                                        cols={30}
                                    />
                                </div>
                            )
                        })
                    }
                    <Alert
                        message='Submit success'
                    >
                        <button
                            type='submit'
                            className='bg-blue-500 text-white px-4 py-2 rounded-md w-full'
                        >
                            Submit
                        </button>
                    </Alert>
                </form>
                <DevTool control={control} />
            </main>
        </AuthLayout>
    )
}

export default Studentpage