import { Outlet } from 'react-router-dom'
import { CustomLink } from "../pages/CustomTags/CustomLink"

export const Layout = () => {

    return (
        <div>
            <header>
                <CustomLink to="/" >Home</CustomLink>
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

