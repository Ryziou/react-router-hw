import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(serviceFunction, initialDataValue, args = []) {
    const [ data, setData ] = useState(initialDataValue)
    const [ error, setError ] = useState('')
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await serviceFunction(...args)
                setData(data)
            } catch {
                setError('Failed to catch the birds. Please try again later.')
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [serviceFunction, ...args])
    return { data, isLoading, error }
}