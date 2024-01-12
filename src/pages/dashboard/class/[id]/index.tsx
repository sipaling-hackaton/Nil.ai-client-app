import AuthLayout from '@/components/authlayout'
import useClass, { AssignmentTypes, ClassTypes } from '@/hooks/useClass'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ClassDetail() {
    const { id } = useRouter().query
    const { getClassById } = useClass()
    const { data } = getClassById(id as string)

    const { addClass } = useClass()
    useEffect(() => {
        console.log(data)
    }, [data])

    // tab
    const [tab, setTab] = useState<'assignments' | 'todos' | 'members'>('assignments')
    return (
        <AuthLayout>
            <main
                className='flex flex-row items-start gap-[1rem] justify-start w-full h-full
                px-4 py-2'
            >
                {/* tab */}
                <section
                    id='tab'
                    className='w-[10rem] flex flex-col'
                >
                    {
                        Object.keys({ assignments: 'Assignments', todos: 'Todos', members: 'Members' }).map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setTab(item as 'assignments' | 'todos' | 'members')}
                                className={`px-4 py-2 rounded-md
                                    border-[1.5px] border-primmary
                                    text-black text-[1.125rem] font-[500] font-poppins
                                    ${tab === item ? 'bg-primmary text-white' : 'bg-white bg-opacity-50'}`}
                            >
                                {item}
                            </button>
                        ))
                    }
                </section>


                {/* content */}
                <section
                    className='flex flex-col gap-4 w-full h-full'
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
                                {data?.name}
                            </h1>
                        </div>
                    </section>

                    <section
                        className='flex flex-col gap-4 w-full h-full'
                    >
                        {
                            tab === 'assignments' && (
                                <AssignmentSection
                                    data={data as ClassTypes}
                                    id={id as string}
                                />
                            )
                        }
                        {
                            tab === 'todos' && (
                                <TodoSection />
                            )
                        }
                        {
                            tab === 'members' && (
                                <MemberSection />
                            )
                        }
                    </section>
                </section>
            </main>
        </AuthLayout>
    )
}


const AssignmentSection = ({
    data,
    id,
}: {
    data: ClassTypes,
    id: string,
}) => {
    return (
        <div
            className='flex flex-col gap-2 items-center justify-center w-full h-full'
        >
            <section

                className='bg-white bg-opacity-50 text-black rounded-[1rem] w-full 
            hover:opacity-70 overflow-hidden
            border border-primmary'
            >
                <button
                    className='border-b border-primmary font-bold font-poppins px-[1.2rem] py-[1rem] w-full text-left'
                >
                    Course Detail
                </button>
                <div
                    className='flex justify-between w-full px-[1.2rem] py-[1rem]'
                >
                    <h1>Teacher: {data?.name}</h1>
                    <p></p>
                </div>
            </section>


            <section
                className='flex flex-col gap-[10px] items-center justify-center w-full h-full'
            >
                {
                    data?.assignments?.map((item, index) => {
                        return (
                            <Link
                                href={`/dashboard/class/${id}/assignment/${item.id}`}
                                className='bg-white bg-opacity-50 text-black rounded-[1rem] w-full 
                                hover:opacity-70 overflow-hidden
                                border border-primmary'
                                key={index}>
                                <button
                                    className='border-b border-primmary font-bold font-poppins px-[1.2rem] py-[1rem] w-full text-left'
                                >
                                    Chapter {index + 1}
                                </button>
                                <div
                                    className='flex justify-between w-full px-[1.2rem] py-[1rem]'
                                >
                                    <div
                                        className='flex items-center gap-2'
                                    >
                                        <img
                                            className='bg-primmary w-[3.125rem] h-[3.125rem] rounded-full'
                                            src=""
                                            alt="" />
                                        <h3>
                                            Assignment : {item.name}
                                        </h3>
                                    </div>
                                    <div

                                        className='font-poppins text-neutral font-[300]'
                                    >
                                        Due {item.due_date}
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </div>)
}


const TodoSection = () => {
    return (<div>
        <h1>Todo</h1>
    </div>)
}

const MemberSection = () => {
    return (<div>
        <h1>Member</h1>
    </div>)
}