import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function UseStateHook () {
    const navigate = useNavigate();
    let [value,setValue] = useState(0);
    return (
        <div>
            This is an example of Use state Hook.<br></br>
            this count variable is {value} is a state in react app update with below buttons.<br />
            <button onClick={()=>setValue(v => v+1)}>Increase by 1</button>
            <button onClick={()=>setValue(v=>v-1)}>Decrease by 1</button>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}