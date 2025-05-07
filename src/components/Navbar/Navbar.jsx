import { NavLink } from "react-router"
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <div className="brand-logo">
                <NavLink to='/'>🌍</NavLink>
            </div>
            <nav>
                <NavLink to="/birds/new">Add New Bird</NavLink>
                <NavLink to="/birds">Birds</NavLink>
            </nav>
        </header>
    )
}