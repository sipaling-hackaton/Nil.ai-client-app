// useAuth.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

let dummyIsLogin: boolean = true; // skip login if true

const useAuth = () => {
    const queryClient = useQueryClient()
    const { data: isLogin, isLoading } = useQuery<boolean>({
        queryKey: ['isLogin'],
        queryFn: async () => {
            return dummyIsLogin
        },
    })

    const { mutate: login, } = useMutation({
        mutationKey: ['login'],
        mutationFn: async () => {
            dummyIsLogin = true
            return dummyIsLogin
        },
        onSuccess: (data, variables, context) => {
            console.log('login success', data)
        },
        onError: (error, variables, context) => {
            console.log('login error', error)
        },
        onSettled: (data, error, variables, context) => {
            console.log('login settled', data)
            // refetch
            queryClient.invalidateQueries({
                queryKey: ['isLogin']
            })
        },
    })

    const { mutate: logout, } = useMutation({
        mutationKey: ['logout'],
        mutationFn: async () => {
            dummyIsLogin = false
            return dummyIsLogin
        },
        onSuccess: (data, variables, context) => {
            console.log('logout success', data)
        },
        onError: (error, variables, context) => {
            console.log('logout error', error)
        },
        onSettled: (data, error, variables, context) => {
            console.log('logout settled', data)
            // refetch
            queryClient.invalidateQueries({
                queryKey: ['isLogin']
            })
        },
    })

    return {
        isLogin,
        isLoading,
        login,
        logout
    }
}


export default useAuth;