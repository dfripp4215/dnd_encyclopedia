import { useState } from 'react'
import './Dice.scss'
import diceFourPic from '../images/D4shape.png'
import diceSixPic from '../images/D6shape.png'
import diceEightPic from '../images/D8shape.png'
import diceTenPic from '../images/D10shape.png'
import diceTwelvePic from '../images/D12shape.png'
import diceTwentyPic from '../images/D20shape.png'
import diceHundredPic from '../images/D100shape.png'

function Dice() {
    const [diceTotal, setDiceTotal] = useState(0)
    const [diceCounter, setDiceCounter] = useState({ d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d20: 0, d100: 0 })
    const [diceCounterArr, setDiceCounterArr] = useState([])
    const [dice4, setDice4] = useState(4)
    const [dice6, setDice6] = useState(6)
    const [dice8, setDice8] = useState(8)
    const [dice10, setDice10] = useState(10)
    const [dice12, setDice12] = useState(12)
    const [dice20, setDice20] = useState(20)
    const [dice100, setDice100] = useState(100)

    const diceRoller = (diceAmount) => {
        let output = Math.floor(Math.random() * (diceAmount - 1) + 1)

        if (diceAmount === 4) {
            setDice4(output)
            const newCount = diceCounter.d4 += 1
            setDiceCounter({ ...diceCounter, d4: newCount })
        } else if (diceAmount === 6) {
            setDice6(output)
            const newCount = diceCounter.d6 += 1
            setDiceCounter({ ...diceCounter, d6: newCount })
        } else if (diceAmount === 8) {
            setDice8(output)
            const newCount = diceCounter.d8 += 1
            setDiceCounter({ ...diceCounter, d8: newCount })
        } else if (diceAmount === 10) {
            setDice10(output)
            const newCount = diceCounter.d10 += 1
            setDiceCounter({ ...diceCounter, d10: newCount })
        } else if (diceAmount === 12) {
            setDice12(output)
            const newCount = diceCounter.d12 += 1
            setDiceCounter({ ...diceCounter, d12: newCount })
        } else if (diceAmount === 20) {
            setDice20(output)
            const newCount = diceCounter.d20 += 1
            setDiceCounter({ ...diceCounter, d20: newCount })
        } else {
            setDice100(output)
            const newCount = diceCounter.d100 += 1
            setDiceCounter({ ...diceCounter, d100: newCount })
        }

        setDiceTotal(diceTotal + output)

        // Reversing the Object entries form d4, # to #, d4. This is for readability
        setDiceCounterArr(Object.entries(diceCounter)
            .map(dice => {
                return dice.reverse().join('')
            })
        )
        console.log(diceCounterArr)

        return output
    }

    const resetHandler = () => {
        setDice4(4)
        setDice6(6)
        setDice8(8)
        setDice10(10)
        setDice12(12)
        setDice20(20)
        setDice100(100)
        setDiceTotal(0)
        setDiceCounterArr([])
        setDiceCounter({ d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d20: 0, d100: 0 })

    }

    return (
        <section id='dice-thrower'>
            <p id='dice-tally'>
                {diceCounterArr.map((amount, i) => {
                    if (amount.charAt(0) !== '0' && i !== diceCounterArr.length) {
                        return (
                            <span>
                                {amount}
                            </span>
                        )
                    }

                })}
            </p>
            <div id='d4' className='dice' onClick={() => diceRoller(4)}>
                <img src={diceFourPic} alt="Dice Four" />
                <div className='dice-outcome d4'>{dice4}</div>
            </div>
            <div id='d6' className='dice' onClick={() => diceRoller(6)}>
                <img src={diceSixPic} alt="Dice Six" />
                <div className='dice-outcome d6'>{dice6}</div>
            </div>
            <div id='d8' className='dice' onClick={() => diceRoller(8)}>
                <img src={diceEightPic} alt="Dice Eight" />
                <div className='dice-outcome d8'>{dice8}</div>
            </div>
            <div id='d10' className='dice' onClick={() => diceRoller(10)}>
                <img src={diceTenPic} alt="Dice Ten" />
                <div className='dice-outcome d10'>{dice10}</div>
            </div>
            <div id='d12' className='dice' onClick={() => diceRoller(12)}>
                <img src={diceTwelvePic} alt="Dice Twelve" />
                <div className='dice-outcome d12'>{dice12}</div>
            </div>
            <div id='d20' className='dice' onClick={() => diceRoller(20)}>
                <img src={diceTwentyPic} alt="Dice Twenty" />
                <div className='dice-outcome d20'>{dice20}</div>
            </div>
            <div id='d100' className='dice' onClick={() => diceRoller(100)}>
                <img src={diceHundredPic} alt="Dice 100" />
                <div className='dice-outcome d100'>{dice100}</div>
            </div>

            <div id='dice-total'>Total: {diceTotal}</div>
            <button id="dice-reset" onClick={resetHandler}>Reset</button>
        </section>

    )
}

export default Dice
