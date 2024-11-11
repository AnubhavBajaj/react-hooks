import { useNavigate } from "react-router-dom"

export function UseContextHook () {
    const navigate = useNavigate();
    return (
        <div>
            This is Use Context Hook.
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}