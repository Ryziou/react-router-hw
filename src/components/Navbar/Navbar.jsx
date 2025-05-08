import { NavLink } from "react-router"
import './Navbar.css'
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { removeToken } from "../../lib/users"

export default function Navbar() {
    const { user, setUser } = useContext(UserContext)

    const handleSignOut = () => {
        removeToken()
        setUser(null)
    }

    return (
        <header>
            <div className="brand-logo">
                <NavLink to='/'>🌍</NavLink>
            </div>
            <nav>
                <NavLink to="/birds">Birds</NavLink>
                { user 
                    ? (
                        <>
                        <NavLink to="/birds/new">Add New Bird</NavLink>
                        <NavLink to="/signin" onClick={handleSignOut}>Sign Out</NavLink>
                        </>
                    )
                    : (
                        <>
                        <NavLink to="/register">Sign Up</NavLink>
                        <NavLink to="/signin">Sign In</NavLink>
                        </>
                    )
                }
                

            </nav>
        </header>
    )
}