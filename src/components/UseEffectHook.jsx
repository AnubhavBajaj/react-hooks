import { useNavigate } from "react-router-dom"

export function UseEffectHook () {
    const navigate = useNavigate();
    return (
        <div>
            This is Use Effect Hook.
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}