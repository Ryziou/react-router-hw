import { useState, useContext } from "react"
import { signIn } from "../../services/users"
import { useNavigate } from "react-router"
import { setToken, getUserFromToken } from "../../lib/users"
import { UserContext } from "../../contexts/UserContext"

export default function BirdsSignIn() {

    const { setUser } = useContext(UserContext)

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    })

    const [ error, setError ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { data } = await signIn(formData)
            setToken(data.token)
            setUser(getUserFromToken())
            navigate('/birds')
        } catch {
            setError({ message: 'Invalid username or password'})
        } finally {
            setIsLoading(false)
        }
    }

    function handleChange({ target: {name, value}}) {
        setFormData({ ...formData, [name]: value})
        setError({ ...error, [name]: ''})
    }

    return (
        <section id="form-page">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Sign in to your account</h2>

                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required onChange={handleChange} value={formData.email}/>
                </div>

                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required onChange={handleChange} value={formData.password}/>
                    {error.message && <p>{error.message}</p>}
                </div>

                <button type="submit">{ isLoading ? 'Signing in...' : 'Sign In'}</button>
            </form>
        </section>
    )
}