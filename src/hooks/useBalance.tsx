import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

let dummyBalance: number = 1200000;

const useBalance = () => {
    const queryClient = useQueryClient()
    // query 
    const { data: balance, isLoading } = useQuery<number>({
        queryKey: ['balance'],
        queryFn: async () => {
            return dummyBalance
        },
    })

    // mutation
    const { mutate: addBalance, } = useMutation({
        mutationKey: ['addBalance'],
        mutationFn: async (amount: number) => {
            dummyBalance += amount
            return dummyBalance
        },
        onSuccess: (data, variables, context) => {
            console.log('addBalance success', data)
        },
        onError: (error, variables, context) => {
            console.log('addBalance error', error)
        },
        onSettled: (data, error, variables, context) => {
            console.log('addBalance settled', data)
            // refetch
            queryClient.invalidateQueries({
                queryKey: ['balance']
            })
        },
    })



    return {
        balance,
        isLoading,
        addBalance
    }
}

export default useBalance;