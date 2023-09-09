import { useMutation } from "@tanstack/react-query"
import axios from "axios"
const postOrder = order => axios.post("/api/orders", order)


const useOrderMutation = () => {
    const {
        mutate: createOrder,
        isError,
        isLoading,
    } = useMutation({ mutation: postOrder})

    return { createOrder, isLoading, isError }
}

export default useOrderMutation