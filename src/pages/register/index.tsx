import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import useAuth from '@/hooks/useAuth';
import GuestLayout from '@/components/guestlayout';

interface RegisterTypes {
    fullname: string
    email: string
    password: string
    [key: string]: string
}

const RegisterObject: RegisterTypes = {
    fullname: '',
    email: '',
    password: ''
}


const resolver: Resolver<RegisterTypes> = async (values) => {
    return {
        values: values.firstName ? values : {},
        errors: !values.firstName
            ? {
                firstName: {
                    type: "required",
                    message: "This is required.",
                },
            }
            : {},
    }
}

export default function RegisterPage() {
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterTypes>({ resolver })

    const { push } = useRouter()
    const onSubmit = (data: RegisterTypes) => {
        console.log("data", data)
        // push('/dashboard')
        login({
            email: data.email,
            password: data.password
        })
    }


    const { login, isLogin } = useAuth()
    useEffect(() => {
        console.log('isLogin', isLogin)
    }, [isLogin])

    if (isLogin) {
        push('/dashboard')
    } else if (isLogin === false && isLogin !== undefined) {
        return (
            <GuestLayout>
                <main
                    className='max-w-full w-full min-h-screen flex flex-col items-center'
                >


                    <form
                        className='flex flex-col items-center justify-center h-fit gap-[1.25rem] '
                        onSubmit={(e: any) => {
                            e.preventDefault()
                            handleSubmit(onSubmit)
                        }}
                    >
                        <h2
                            className='text-2xl font-bold text-center'
                        >
                            Register
                        </h2>
                        <div
                            className='flex flex-col gap-[2.5rem] bg-primmary
                            rounded-md p-4'
                        >
                            {
                                // map login object
                                Object.keys(RegisterObject).map((key, index) => (
                                    <div key={index}
                                        className='flex flex-col'
                                    >
                                        <label
                                            className='capitalize font-poppins'
                                            htmlFor={key}>{key}</label>
                                        <input
                                            className='border border-gray-400 rounded-md bg-secondary placeholder:capitalize px-[1rem] py-2 outline-none'
                                            type={key}
                                            placeholder={`Your ${key}`}
                                            id={key}
                                            {...register(key)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <input
                            onClick={(e: any) => {
                                onSubmit(e)
                            }}
                            type="submit"
                            className='bg-primmary px-[1.75rem] py-2 rounded-md mt-4 text-black font-poppins font-[600] uppercase w-full'
                            value="Login"
                        />
                        <div
                            className='text-black text-[0.875rem] font-poppins font-[300] '
                        >
                            Already have an account?
                            <a
                                className='underline'
                                href="/register">Login Now</a>
                        </div>
                    </form >

                    {/* <DevTool control={control} /> */}
                </main >
            </GuestLayout>
        )
    }
}