import './App.css'
import {Counter} from "./Components/Сounter.tsx";
import {useState} from "react";

const startCount = 0
const initialMaxValue = 5

function App() {

    const [count, setCount] = useState<number>(startCount);

    const [maxValue, setMaxValue] = useState<number>(initialMaxValue);

    const setCountHandler = (num: number) => {
        setCount(num)
    }

    const setMaxValueHandler = (num: number) => {
        setMaxValue(num)
    }

    return (
        <div className="App">
            <Counter startCount={startCount} count={count} setCountOnClick={setCountHandler} maxValue={maxValue} setMaxValueOnClick={setMaxValueHandler} />
        </div>
    )
}

export default App
