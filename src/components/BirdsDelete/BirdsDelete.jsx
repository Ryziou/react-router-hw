import { useState } from "react"
import { deleteBird } from "../../services/birds"
import { useNavigate, useParams } from "react-router"

export default function BirdsDelete() {
    
        const [ error, setError ] = useState('')
        const [ isLoading, setIsLoading ] = useState(false) 

        const { birdId } = useParams()
        const navigate = useNavigate()

        async function handleDelete() {
            setIsLoading(true)

            try {
                await deleteBird(birdId)
                navigate('/birds')
            } catch (error) {
                setError(error.response.data.message)
            } finally {
                setIsLoading(false)
            }
        }

        return (
            <>
            { error && <p>{error}</p>}
            <button onClick={handleDelete}>{isLoading ? 'Deleting...' : 'Delete'}</button>
            </>
        )
}