import AuthLayout from '@/components/authlayout'
import useClass from '@/hooks/useClass'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Studentpage from './studentpage'
import TeacherPage from './teacherpage'

export default function AssignmentDetail() {
    const {
        id,
        assignment_id,
    } = useRouter().query
    const { getClassById } = useClass()
    const questions = getClassById(id as string).data?.assignments?.find(assignment => assignment.id === assignment_id)?.questions
    useEffect(() => {
        console.log(questions)
    }, [questions])

    let role = 'student'

    if (role === "student") {
        return Studentpage({
            assignment_id: assignment_id as string,
            questions: questions ?? [],
        })
    }

    return TeacherPage({
        assignment_id: assignment_id as string,
        questions: questions ?? [],
    })
}