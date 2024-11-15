import React, { useState } from 'react'
import './calculater.css'

function Calculater() {
    const [var1, setVar1] = useState(0)
    const [var2, setVar2] = useState(0)
    const [result, setResult] = useState(0)
    return (
        <div className='main'>
            <div className="card">
                <input type="number" onChange={(e) => setVar1(e.target.value)} placeholder='ENTER FIRST NO' />
                <input type="number" onChange={(e) => setVar2(e.target.value)} placeholder='ENTER SECOND NO' />

                <div className="symbol">
                    <button onClick={() => setResult(parseInt(var1) + parseInt(var2))}>+</button>
                    <button onClick={() => setResult(var1 - var2)}>-</button>
                    <button onClick={() => setResult(var1 * var2)}>*</button>
                    <button onClick={() => setResult(var1 / var2)}>/</button>
                </div>
                <div className="result">
                    <p>The Result is = {result}</p>
                </div>
            </div>



        </div>
    )
}

export default Calculater