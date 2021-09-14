import { useState } from 'react'

function Tools() {
    const [diceTotal, setDiceTotal] = useState(0)
    const [dice4, setDice4] = useState(4)
    const [dice6, setDice6] = useState(6)
    const [dice8, setDice8] = useState(8)
    const [dice12, setDice12] = useState(12)
    const [dice20, setDice20] = useState(20)

    const diceRoller = (diceAmount) => {
        let output = Math.floor(Math.random() * (diceAmount - 1) + 1)

        diceAmount === 4 ? setDice4(output)
            : diceAmount === 6 ? setDice6(output)
                : diceAmount === 8 ? setDice8(output)
                    : diceAmount === 12 ? setDice12(output)
                        : setDice20(output)

        setDiceTotal(diceTotal + output)

        return output
    }

    const resetHandler = () => {
        setDice4(4)
        setDice6(6)
        setDice8(8)
        setDice12(12)
        setDice20(20)
        setDiceTotal(0)
    }

    return (
        <div id='sidebar'>
            <h2>Tools</h2>
            <section id='dice-thrower'>
                <div id='d4' className='dice' onClick={() => diceRoller(4)}>{dice4}</div>
                <div id='d6' className='dice' onClick={() => diceRoller(6)}>{dice6}</div>
                <div id='d8' className='dice' onClick={() => diceRoller(8)}>{dice8}</div>
                <div id='d12' className='dice' onClick={() => diceRoller(12)}>{dice12}</div>
                <div id='d20' className='dice' onClick={() => diceRoller(20)}>{dice20}</div>
                <div id='dice-total'>Total: {diceTotal}</div>
                <button id="dice-total-reset" onClick={resetHandler}>Reset</button>
            </section>
        </div>
    )
}

export default Tools