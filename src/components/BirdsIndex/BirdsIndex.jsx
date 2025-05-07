import { Link } from "react-router"
import { birdsIndex } from "../../services/birds"
import useFetch from "../../hooks/useFetch"
import './BirdsIndex.css'

export default function BirdsIndex() {

    const { data: birds, isLoading, error } = useFetch(birdsIndex, [])

    return (
        <>
            <h1>Birds</h1>
            <section className="bird-list">
                {error
                    ? <p className="error">{error}</p>
                    : isLoading
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