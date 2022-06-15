import { Outlet } from 'react-router-dom'
import { CustomLink } from "../pages/CustomTags/CustomLink"

export const Layout = () => {
    const val = ["kartow"]
    return (
        <div>
            <header>
                <CustomLink to="/" val={val}>Home</CustomLink>
                <CustomLink to="/posts" >Blog</CustomLink>
                <CustomLink to="/about" >About</CustomLink>

            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer>2022</footer>
        </div>
    )
}

