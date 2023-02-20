import { useState } from "react"

export default function RepFunction({name}) {

    let [count, setCount] = useState(0)
    let [savedCounts, setSavedCounts] = useState([])

    function addCount() {
        setCount(count + 1)
    }

    function restart() {
        setCount(0)
    }

    function saveCount()
    {
        setSavedCounts([...savedCounts, count]);
    }

    function Save() {
        return <ul>{savedCounts.map(prevCount => (<li>{prevCount}</li>))}</ul>
    }

    return(
        <div className="App">
            <header className="App-header">
        <h1>Repetition Exercise</h1>
        <h3>{name}</h3>
        <span>{count}</span>
        <div>
        <button onClick={addCount}>Complete Rep</button>
        <button onClick={saveCount}>Save Current Increment</button>
        <button onClick={restart}>Restart</button>
        </div>
        <button>Back</button>
        <p>Previous recordings:</p>
        <Save/>
        <button onClick={() => setSavedCounts([])}>Clear</button>
        </header>
        </div>
    )
}