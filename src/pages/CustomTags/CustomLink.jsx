import { Link, useMatch } from 'react-router-dom'
import React from 'react'

export const CustomLink = ({ children, to, ...props }) => {

    const match = useMatch(to)
    return (
        <Link
            to={to}
            style={{
                color: match ? "var(--color-active)" : "white"
            }}
            {...props}>
            {children}
        </Link>
    )
}
