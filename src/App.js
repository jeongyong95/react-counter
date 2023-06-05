import './App.css';
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    const handleSetCount = (value) => {
        setCount(count + value)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handler = {
        handleSetCount, handleReset
    }
    return (
        <div className="App">
            <h1>React Counter</h1>
            <section>
                <Viewer props={count}/>
            </section>
            <section>
                <Controller handler={handler}/>
            </section>
        </div>
    );
}

export default App;
