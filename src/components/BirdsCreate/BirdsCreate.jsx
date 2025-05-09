import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router"
import './BirdsCreate.css'
import { createBird } from "../../services/birds";
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { UserContext } from "../../contexts/UserContext";


export default function BirdsCreate() {

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
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        try {
            const { data } = await createBird(formData)
            navigate(`/birds/${data._id}`)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
        setFormData({
            species: '',
            subspecies: '',
            habitat: '',
            color: '',
            size: '',
            diet: ''
        })
    }

    async function handleChange(event) {     
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    if (!user) {
        return <Navigate to='/register'/>
    }

    return (
        <section id="form-page">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Add a New Bird</h1>

                <div className="input-control">
                    <label htmlFor="species">Species</label>
                    <input type="text" name="species" id="species" placeholder="Bald Eagle" onChange={handleChange} value={formData.species} required/>
                    {error.species && <p>{error.species}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="subspecies">Subspecies</label>
                    <input type="text" name="subspecies" id="subspecies" placeholder="Northern" onChange={handleChange} value={formData.subspecies} required/>
                    {error.subspecies && <p>{error.subspecies}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="habitat">Habitat</label>
                    <textarea name="habitat" id="habitat" cols="30" rows="3" placeholder="Lives near large lakes, rivers, and coastal areas" onChange={handleChange} value={formData.habitat} required></textarea>
                    {error.habitat && <p>{error.habitat}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="color">Colour</label>
                    <textarea name="color" id="color" cols="30" rows="3" placeholder="Dark brown body with a white head and tail, and yellow beak and feet" onChange={handleChange} value={formData.color} required></textarea>
                    {error.color && <p>{error.color}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="size">Size</label>
                    <textarea name="size" id="size" cols="30" rows="3" placeholder="Wingspan around 6 to 7.5 feet; body length about 2.5 to 3.5 feet" onChange={handleChange} value={formData.size} required></textarea>
                    {error.size && <p>{error.size}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="diet">Diet</label>
                    <textarea name="diet" id="diet" cols="30" rows="3" placeholder="Mostly fish, but they also eat birds, small mammals, and dead animals" onChange={handleChange} value={formData.diet} required></textarea>
                    {error.diet && <p>{error.diet}</p>}
                </div>
                
                <ErrorMessage message={error.message}/>

                <button type="submit">{ isLoading ? 'Creating Bird...' : 'Add Bird'}</button>
            </form>
        </section>
    )
}

