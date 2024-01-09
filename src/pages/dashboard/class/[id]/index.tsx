import AuthLayout from '@/components/authlayout'
import useClass, { AssignmentTypes, ClassTypes } from '@/hooks/useClass'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ClassDetail() {
    const { id } = useRouter().query
    const { getClassById } = useClass()
    const { data } = getClassById(id as string)

    const { addClass } = useClass()
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <AuthLayout>
            <main
                className='flex flex-col items-center justify-center w-full h-full
                px-4 py-2'
            >
                This is class detail of {data?.name}
                <section
                    className='flex flex-col gap-[10px] items-center justify-center w-full h-full'
                >
                    {
                        data?.assignments?.map((item, index) => (
                            <Link
                                href={`/dashboard/class/${id}/assignment/${item.id}`}
                                className='bg-blue-500 text-white px-4 py-2 rounded-md w-full'
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
