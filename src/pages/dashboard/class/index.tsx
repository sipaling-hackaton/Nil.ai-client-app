import AuthLayout from '@/components/authlayout'
import useClass from '@/hooks/useClass'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Class() {
    const { push } = useRouter()
    useEffect(() => {
    
        push('/dashboard')
    }, [])
}