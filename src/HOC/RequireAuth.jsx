import { useLocation, Navigate } from 'react-router-dom'

import React from 'react'

export const RequireAuth = ({ children }) => {
    const location = useLocation()
    const auth = false

    if (!auth) {
        return <Navigate to="/login" state={{ form: location }} />
    }
    return children
}
