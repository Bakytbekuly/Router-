import { useAuth } from '../hook/useAuth'
import { useNavigate } from "react-router-dom"

export const Createpage = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Create new post</h1>
            <button onClick={() => signout(() => navigate("/", { replace: true }))}>Log out</button>
        </div>
    )
}
