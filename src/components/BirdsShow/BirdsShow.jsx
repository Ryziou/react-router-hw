import { singleBird } from "../../services/birds"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import './BirdsShow.css'

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
                ? <p className="loading">Loading bird data...</p>
                : (
                    <section className="single-bird-container">
                        <div className="bird-title">
                            <h1>{bird.species}</h1>
                        </div>
                        <div className="bird-info">
                            <h3>Sub-species: </h3>
                            <p>{bird.subspecies}</p>
                            <h3>Habitat: </h3>
                            <p>{bird.habitat}</p>
                            <h3>Colour: </h3>
                            <p>{bird.color}</p>
                            <h3>Size: </h3>
                            <p>{bird.size}</p>
                            <h3>Diet: </h3>
                            <p>{bird.diet}</p>
                        </div>

                    </section>
                )
        }
        </>
    )
}