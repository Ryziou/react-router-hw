import { useEffect, useState } from "react"
import { Link } from "react-router"
import { birdsIndex } from "../../services/birds"
import './BirdsIndex.css'

export default function BirdsIndex() {
    const [ birds, setBirds ] = useState([])
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function getBirds() {
            try {
                const { data } = await birdsIndex()
                setBirds(data)
            } catch {
                setError('Failed to fetch bird data. Please try again later.')
            } finally {
                setLoading(false)
            }
        }
        getBirds()
    }, [])


    return (
        <>
        <h1>Birds</h1>
        <section className="bird-list">
            {error
                ? <p className="error">{error}</p>
                : loading
                    ? <p className="loading">Loading...</p>
                    : birds.length > 0
                        ? birds.map(bird => (
                            <Link key={bird._id} to={`/birds/${bird._id}`}>
                                <article>
                                    <h2>{bird.species}</h2>
                                </article>
                            </Link>
                        ))
                        : <p>Birds are hibernating. Please try again later.</p>
            }
        </section>
        </>
    )
}