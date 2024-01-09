import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

interface UserTypes {
    id: string
    name: string
    email: string
}

interface QuestionTypes {
    id: string
    question: string
    answer: string
}

export interface AssignmentTypes {
    id: string
    name: string
    description: string
    due_date: string
    class_id: string
    questions?: QuestionTypes[]
    // timestamp: string
    open_data?: string | null
}

export interface ClassTypes {
    id: string
    name: string
    teacher_id: string
    students?: UserTypes[]
    assignments?: AssignmentTypes[]
}


const dummyData: ClassTypes[] = [

    {
        id: '1',
        name: 'English',
        teacher_id: '1',
        students: [
            {
                id: '1',
                name: 'Student 1',
                email: 'aman@gmail.com'
            },
            {
                id: '2',
                name: 'Student 2',
                email: 'ivan@gmai.com'
            }
        ],
        assignments: [
            {
                id: '1',
                name: 'Assignment 1',
                description: 'This is assignment 1',
                due_date: '2021-10-10',
                class_id: '1',
                questions: [
                    {
                        id: '1',
                        question: 'What is the capital city of Indonesia?',
                        answer: 'Jakarta'
                    },
                    {
                        id: '2',
                        question: 'What is the capital city of Malaysia?',
                        answer: 'Kuala Lumpur'
                    }
                ]
            },
            {
                id: '2',
                name: 'Assignment 2',
                description: 'This is assignment 2',
                due_date: '2021-10-10',
                class_id: '1',
                questions: [
                    {
                        id: '1',
                        question: 'What is the capital city of Indonesia?',
                        answer: 'Jakarta'
                    },
                    {
                        id: '2',
                        question: 'What is the capital city of Malaysia?',
                        answer: 'Kuala Lumpur'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: 'Math',
        teacher_id: '1',
    },
]


const useClass = () => {
    const queryClient = useQueryClient()
    // query 
    const { data: classes, isLoading } = useQuery<ClassTypes[]>({
        queryKey: ['classes'],
        queryFn: async () => {
            return dummyData as ClassTypes[] ?? []
        },
    })


    // mutation
    const { mutate: addClass, } = useMutation({
        mutationKey: ['addClass'],
        mutationFn: async (name: string) => {
            const newClass: ClassTypes = {
                id: '2',
                name,
                teacher_id: '1',
            }
            dummyData.push(newClass)
            return dummyData
        },
        onSuccess: (data, variables, context) => {
            console.log('addClass success', data)
        },
        onError: (error, variables, context) => {
            console.log('addClass error', error)
        },
        onSettled: (data, error, variables, context) => {
            console.log('addClass settled', data)
            // refetch
            queryClient.invalidateQueries({
                queryKey: ['classes']
            })
        },
    })


    const getClassById = (classId: string) => {
        return useQuery<ClassTypes>({
            queryKey: ['class', classId],
            queryFn: async () => {
                // Find the class with the given id
                const foundClass = dummyData.find(cls => cls.id === classId);
                if (!foundClass) {
                    throw new Error('Class not found');
                }
                return foundClass;
            },
        });
    }

    const getAssignments = () => {
        return useQuery<AssignmentTypes[]>({
            queryKey: ['assignments'],
            queryFn: async () => {
                // Replace this with your actual data fetching logic
                return dummyData.flatMap(cls => cls.assignments ?? []);
            },
        });
    }

    const getAssignmentById = (assignmentId: string) => {
        return useQuery<AssignmentTypes>({
            queryKey: ['assignment', assignmentId],
            queryFn: async () => {
                // Replace this with your actual data fetching logic
                const foundAssignment = dummyData.flatMap(cls => cls.assignments ?? []).find(assignment => assignment.id === assignmentId);
                if (!foundAssignment) {
                    throw new Error('Assignment not found');
                }
                return foundAssignment;
            },
        });
    }

    const getQuestions = () => {
        return useQuery<QuestionTypes[]>({
            queryKey: ['questions'],
            queryFn: async () => {
                // Replace this with your actual data fetching logic
                return dummyData.flatMap(cls => cls.assignments ?? []).flatMap(assignment => assignment.questions ?? []);
            },
        });
    }

    const getQuestionById = (questionId: string) => {
        return useQuery<QuestionTypes>({
            queryKey: ['question', questionId],
            queryFn: async () => {
                // Replace this with your actual data fetching logic
                const foundQuestion = dummyData.flatMap(cls => cls.assignments ?? []).flatMap(assignment => assignment.questions ?? []).find(question => question.id === questionId);
                if (!foundQuestion) {
                    throw new Error('Question not found');
                }
                return foundQuestion;
            },
        });
    }


    return {
        classes,
        isLoading,
        addClass,
        getClassById,
        getAssignments,
        getAssignmentById,
        getQuestions,
        getQuestionById
    }

}

export default useClass