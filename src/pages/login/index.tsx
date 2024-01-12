import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import useAuth from '@/hooks/useAuth';
import GuestLayout from '@/components/guestlayout';

interface LoginTypes {
    email: string
    password: string
    [key: string]: string
}

const loginObject: LoginTypes = {
    email: '',
    password: ''
}

export default function LoginPage() {
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginTypes>()

    const { push } = useRouter()



    const { login, isLogin } = useAuth()


    const onSubmit = handleSubmit((data) => {
        login(data)
    })
    if (isLogin) {
        push('/dashboard')
    } else if (isLogin === false && isLogin !== undefined) {
        return (
            <GuestLayout>
                <main
                    className='max-w-full w-full min-h-screen flex flex-col items-center'
                >
                    <form
                        className='flex flex-col items-center justify-center h-fit gap-[1.25rem]'
                    >
                        <h2
                            className='text-2xl font-bold text-center'
                        >
                            Log in
                        </h2>
                        <div
                            className='flex flex-col gap-[2.5rem] bg-primmary
                            rounded-md p-4'
                        >
                            {
                                // map login object
                                Object.keys(loginObject).map((key: any, index: number) => (
                                    <div key={index}
                                        className='flex flex-col'
                                    >
                                        <label
                                            className='capitalize font-poppins'
                                            htmlFor={key}>{key}
                                        </label>
                                        <p
                                            className='text-red-500 font-poppins font-[300] capitalize'
                                        >
                                            {errors[key] && `${key} is required`}
                                        </p>
                                        <input
                                            className='border border-gray-400 rounded-md bg-secondary placeholder:capitalize px-[1rem] py-2 outline-none'
                                            type={key}
                                            placeholder={`Your ${key}`}
                                            id={key}

                                            {...register(key, { required: true })}
                                        />
                                    </div>
                                ))
                            }
                            <a
                                className='text-black text-[0.875rem] font-poppins font-[300] underline w-full text-center'
                                href="">
                                forgot password?
                            </a>
                        </div>
                        <button
                            onClick={onSubmit}
                            className='bg-primmary px-[1.75rem] py-2 rounded-md mt-4 text-black font-poppins font-[600] uppercase w-full'
                            value="Login"
                        >
                            Login
                        </button>
                        <div
                            className='text-black text-[0.875rem] font-poppins font-[300] '
                        >
                            No account yet?
                            <a
                                className='underline'
                                href="/register">Register Now</a>
                        </div>
                    </form >

                    {/* <DevTool control={control} /> */}
                </main >
            </GuestLayout>
        )
    }
}