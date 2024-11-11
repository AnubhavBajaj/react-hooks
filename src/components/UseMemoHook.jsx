import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"

export function UseMemoHook () {
    const navigate = useNavigate();
    let [name,setName] = useState("");
    let [age,setAge] = useState(0);
    const bmi = useMemo(()=> BMICalculater(age),[age]);

    return (
        <div>
            This is an example Use Memo Hook.<br />
            <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Enter your name"></input>
            <input type="number" onChange={e => setAge(e.target.value)} value={age || ''} placeholder="Enter your age"></input>
            <div>
                BMI for {name} and age {age} is {bmi}
            </div>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}

function BMICalculater (age) {
    console.log(typeof(age));
    console.log("BMICalculator is called for this age "+age);
    return 2*age;
}