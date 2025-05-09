import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate, Navigate} from "react-router"
import { singleBird, editBird } from "../../services/birds"
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { UserContext } from "../../contexts/UserContext"

export default function BirdsEdit() {
        const { user } = useContext(UserContext)

        const [ formData, setFormData ] = useState({
            species: '',
            subspecies: '',
            habitat: '',
            color: '',
            size: '',
            diet: ''
        })

    const [ error, setError ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)

    const { birdId } = useParams()
    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        try {
            await editBird(birdId, formData)
            navigate(`/birds/${birdId}`)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        async function getBirdData() {
            try {
                const { data } = await singleBird(birdId)  
                setFormData(data)
            } catch (error) {
                setError({ ...error, preload: 'Failed to preload values'})
            }
        }
        getBirdData()
    }, [birdId])

    if (!user) {
        return <Navigate to='/register'/>
    }

    if (formData.owner && formData.owner !== user._id) {
        return <Navigate to='/'/>
    }

    return (
        <section id="form-page">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Edit Bird</h1>

                <div className="input-control">
                    <label htmlFor="species">Species</label>
                    <input type="text" name="species" id="species" onChange={handleChange} value={formData.species} required/>
                    {error.species && <p>{error.species}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="subspecies">Subspecies</label>
                    <input type="text" name="subspecies" id="subspecies"  onChange={handleChange} value={formData.subspecies} required/>
                    {error.subspecies && <p>{error.subspecies}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="habitat">Habitat</label>
                    <textarea name="habitat" id="habitat" cols="30" rows="3"  onChange={handleChange} value={formData.habitat} required></textarea>
                    {error.habitat && <p>{error.habitat}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="color">Colour</label>
                    <textarea name="color" id="color" cols="30" rows="3"  onChange={handleChange} value={formData.color} required></textarea>
                    {error.color && <p>{error.color}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="size">Size</label>
                    <textarea name="size" id="size" cols="30" rows="3"  onChange={handleChange} value={formData.size} required></textarea>
                    {error.size && <p>{error.size}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="diet">Diet</label>
                    <textarea name="diet" id="diet" cols="30" rows="3"  onChange={handleChange} value={formData.diet} required></textarea>
                    {error.diet && <p>{error.diet}</p>}
                </div>

                <ErrorMessage message={error.message}/>

                <button type="submit">{ isLoading ? 'Editing Bird...' : 'Edit Bird'}</button>
            </form>
        </section>
    )
}