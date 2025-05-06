import { singleBird } from "../../services/birds"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function BirdsShow() {

    const [ bird, setBird ] = useState([])
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(true)

    const { birdId } = useParams()

    useEffect(() => {
        async function getBird() {
            try {
                const { data } = await singleBird(birdId)
                setBird(data)
            } catch {
                setError('The bird flew away. Please try again later.')
            } finally {
                setLoading(false)
            }
        }
        getBird()
    }, [birdId])


    return (
        <>
        {error
            ? <p className="error">{error}</p>
            : loading
                ? <p>Loading...</p>
                : (
                    <section className="single-bird">
                        <h1>{bird.species}</h1>
                    </section>
                )
        }
        </>
    )
}