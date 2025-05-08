import { useState } from "react";
import { signUp } from "../../services/users";
import { useNavigate } from "react-router";

export default function BirdsUser() {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const [ error, setError ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)

        if (formData.password !== formData.passwordConfirmation) {
            setError({ password: 'Passwords do not match.'})
            return
        }

        try {
            const { data } = await signUp(formData)
            console.log(data);
            
            navigate('/signin')
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleChange({ target: { name, value}}) {
        setFormData({ ...formData, [name]: value })
        setError({ ...error, [name]: ''})
    }

    return (
        <section id="form-page">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create a New User</h1>

                <div className="input-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required onChange={handleChange} value={formData.username}/>
                    {error.username && <p>{error.username}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required onChange={handleChange} value={formData.email}/>
                    {error.email && <p>{error.email}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required onChange={handleChange} value={formData.password}/>
                    {error.password && <p>{error.password}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="passwordConfirmation">Password Confirmation</label>
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation" required onChange={handleChange} value={formData.passwordConfirmation}/>
                    {error.passwordConfirmation && <p>{error.passwordConfirmation}</p>}
                </div>


                <button type="submit">{ isLoading ? 'Creating User...' : 'Sign Up'}</button>
            </form>
        </section>
    )
}