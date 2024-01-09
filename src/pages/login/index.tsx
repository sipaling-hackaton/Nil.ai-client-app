import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import useAuth from '@/hooks/useAuth';

interface LoginTypes {
    email: string
    password: string
    [key: string]: string
}

const loginObject: LoginTypes = {
    email: '',
    password: ''
}


const resolver: Resolver<LoginTypes> = async (values) => {
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

export default function LoginPage() {
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginTypes>({ resolver })

    const { push } = useRouter()
    const onSubmit = (data: LoginTypes) => {
        console.log("data", data)
        // push('/dashboard')
        login()
    }


    const { login, isLogin } = useAuth()
    useEffect(() => {
        console.log('isLogin', isLogin)
    }, [isLogin])

    if (isLogin) {
        push('/dashboard')
    } else if (isLogin === false && isLogin !== undefined) {
        return (
            <main
                className='max-w-full w-full min-h-screen bg-gray-300 flex justify-center items-center'
            >
                <form
                    className='flex flex-col items-center justify-center h-fit bg-white
                rounded-md p-4 gap-4'
                    onSubmit={(e: any) => {
                        e.preventDefault()
                        handleSubmit(onSubmit)
                    }}
                >
                    <h2>
                        Login
                    </h2>
                    <div
                        className='flex flex-col'
                    >
                        {
                            // map login object
                            Object.keys(loginObject).map((key, index) => (
                                <div key={index}
                                    className='flex flex-col'
                                >
                                    <label htmlFor={key}>{key}</label>
                                    <input
                                        className='border border-gray-400 rounded-md'
                                        type={key}
                                        id={key}
                                        {...register(key)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    {/* <button
                    type='submit'
                    // onClick={handleLogin}
                    className='bg-blue-500 text-white rounded-md
                    px-4 py-2'
                >
                    Login
                </button> */}
                    <input
                        onClick={(e: any) => {
                            onSubmit(e)
                        }}
                        type="submit"
                        className='bg-blue-500 text-white rounded-md
                    px-4 py-2
                    cursor-pointer'
                        value="Login"

                    />
                    <div
                        className='text-blue-500'
                    >
                        <a href="/register">Register</a>
                    </div>
                </form >
                {/* <DevTool control={control} /> */}
            </main >
        )
    }
}