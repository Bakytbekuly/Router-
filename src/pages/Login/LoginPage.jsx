import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

export const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signin } = useAuth()

    const formPage = location.state?.form?.pathname || "/"

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(formPage, { replace: true }))
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
