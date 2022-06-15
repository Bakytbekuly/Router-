import { useNavigate, useLocation } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const formPage = location.state?.form?.pathname || "/"

    return (
        <div>
            <h1>Login Page</h1>
            {formPage}
        </div>
    )
}
