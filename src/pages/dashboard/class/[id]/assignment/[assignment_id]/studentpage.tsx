import AuthLayout from '@/components/authlayout'
import { DevTool } from '@hookform/devtools'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface Props {
    assignment_id: string
    questions: {
        question: string
    }[]
}

function Studentpage({ assignment_id, questions }: Props) {

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
        console.log('data', data)
    }
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
                <form
                    onSubmit={handleSubmit(onSubmit,
                        (err) => console.log('err', err))}
                    className='flex flex-col gap-[10px] items-center justify-center w-full h-full'
                >
                    {
                        questions?.map((item, index) => {
                            return (
                                <div
                                    className='bg-blue-500 text-white px-4 py-2 rounded-md w-full
                                    flex flex-col
                                    '
                                    key={index}
                                >
                                    <h2>
                                        {index + 1}. {item.question}
                                    </h2>
                                    <input
                                        id='answer'
                                        {...register(`answer${index}`)}
                                        className='bg-white text-black px-4 py-2 rounded-md w-full'
                                        type="text" />
                                </div>
                            )
                        })
                    }
                    <button
                        type='submit'
                        className='bg-blue-500 text-white px-4 py-2 rounded-md w-full'
                    >
                        Submit
                    </button>
                </form>
                <DevTool control={control} />
            </main>
        </AuthLayout>
    )
}

export default Studentpage