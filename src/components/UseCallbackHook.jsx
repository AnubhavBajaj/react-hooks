import { useNavigate } from "react-router-dom"

export function UseCallbackHook () {
    const navigate = useNavigate();
    return (
        <div>
            This is Use Callback Hook.
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}