import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

export default function SplashPage() {

    const [ redirecting, setRedirecting ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setRedirecting(true)

        const redirect = setTimeout(() => {
            navigate('/')
        }, 2000)

        return () => clearTimeout(redirect)
    }, [navigate])

    return (
        <main>
            <div className="redirecting">
            <h1>Bird Api</h1>
            { redirecting && <p> 🦅 Successfully logged in. Redirecting you... 🦅</p>}
            </div>
        </main>
    )

}