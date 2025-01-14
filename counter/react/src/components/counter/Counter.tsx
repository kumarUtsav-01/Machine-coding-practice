import React, { useRef, useState } from "react";

import './Counter.css';

const Counter = () => {
    const [ counter, setCounter ] = useState<number>(0);
    const stepValue = useRef<number>(0);

    const incrementCounter = (): void => setCounter((counter) => counter + stepValue.current);
    const decrementCounter = (): void => setCounter((counter) => counter - stepValue.current);
    const resetCounter = (): void => setCounter(0);
    const updateStep = (step: number | string): void => {
        stepValue.current = Number(step) ? Number(step) : 0;
    }

    return (
        <main>
            <h2>{counter}</h2>

            <section>
                <input type="button" value={"+"} onClick={incrementCounter}></input>
                <input type="button" value={"-"} onClick={decrementCounter}></input>
            </section>

            <section>
                <label>
                    Increment/Decrement by:
                    <input type="number" onChange={(e) => updateStep(e.target.value)}></input>
                </label>
            </section>

            <section>
                <input type="button" value="Reset" onClick={resetCounter} />
            </section>
        </main>
    )
}

export default Counter;
