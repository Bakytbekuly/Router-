import { NavLink, Outlet } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? "active-link" : "";


export const Layout = () => {
    return (
        <div>
            <header>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "var(--color-active)" : "white" })}>Home</NavLink>
                <NavLink to="/posts" style={({ isActive }) => ({ color: isActive ? "var(--color-active)" : "white" })}>Blog</NavLink>
                <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "var(--color-active)" : "white" })}>About</NavLink>

            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer>2022</footer>
        </div>
    )
}

