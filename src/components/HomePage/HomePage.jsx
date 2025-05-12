import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function HomePage() {
    const { user } = useContext(UserContext)

    return (
        <main>
            <div className="home">
            <h1>Bird Api</h1>
            {user && <p>Welcome back, {user.username}</p>}
            </div>
        </main>
    )
}