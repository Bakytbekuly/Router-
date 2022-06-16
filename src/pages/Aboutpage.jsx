import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Aboutpage = () => {
    return (
        <div>
            <h1>Aboutpage</h1>
            <ul>
                <li><Link to="contacts">Contacts</Link></li>
                <li><Link to="team">Team</Link></li>
            </ul>
            <Outlet />

            {/* <Routes>
                <Route path='contacts' element={<p>Our contact</p>} />
                <Route path='team' element={<p>Our team</p>} />
            </Routes> */}
        </div>

    )
}
