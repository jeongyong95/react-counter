const Controller = ({handler}) => {
    const handleEvent = handler.handleSetCount
    const handleReset = handler.handleReset

    return (
        <div>
            <button onClick={() => handleEvent(-1)}>-1</button>
            <button onClick={() => handleEvent(-10)}>-10</button>
            <button onClick={() => handleEvent(-100)}>-100</button>
            <button onClick={() => handleEvent(100)}>+100</button>
            <button onClick={() => handleEvent(10)}>+10</button>
            <button onClick={() => handleEvent(1)}>+1</button>
            <p>
                <input type={"reset"} onClick={handleReset}/>
            </p>
        </div>
    )
}

export default Controller;