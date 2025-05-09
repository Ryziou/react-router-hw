import { singleBird } from "../../services/birds"
import BirdsDelete from "../BirdsDelete/BirdsDelete"
import { useParams, Link } from "react-router"
import useFetch from "../../hooks/useFetch"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import './BirdsShow.css'

export default function BirdsShow() {

    const { birdId } = useParams()
    const { user } = useContext(UserContext)

    

    const { data: bird, isLoading, error } = useFetch(singleBird, {}, birdId)

    return (
        <>
        {error
            ? <p className="error">{error}</p>
            : isLoading
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
                        { user && bird.owner && user._id === bird.owner && 
                        <div className="controls">
                            <Link to={`/birds/${birdId}/edit`} className="button">Edit</Link> 
                            <BirdsDelete />
                        </div> }
                    </section>
                )
        }
        </>
    )
}