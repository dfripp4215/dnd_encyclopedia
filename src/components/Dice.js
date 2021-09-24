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
    const [diceTally, setDiceTally] = useState({ d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d20: 0, d100: 0 })
    const [diceTallyArr, setDiceTallyArr] = useState([])
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
            const newCount = diceTally.d4 += 1
            setDiceTally({ ...diceTally, d4: newCount })
        } else if (diceAmount === 6) {
            setDice6(output)
            const newCount = diceTally.d6 += 1
            setDiceTally({ ...diceTally, d6: newCount })
        } else if (diceAmount === 8) {
            setDice8(output)
            const newCount = diceTally.d8 += 1
            setDiceTally({ ...diceTally, d8: newCount })
        } else if (diceAmount === 10) {
            setDice10(output)
            const newCount = diceTally.d10 += 1
            setDiceTally({ ...diceTally, d10: newCount })
        } else if (diceAmount === 12) {
            setDice12(output)
            const newCount = diceTally.d12 += 1
            setDiceTally({ ...diceTally, d12: newCount })
        } else if (diceAmount === 20) {
            setDice20(output)
            const newCount = diceTally.d20 += 1
            setDiceTally({ ...diceTally, d20: newCount })
        } else {
            setDice100(output)
            const newCount = diceTally.d100 += 1
            setDiceTally({ ...diceTally, d100: newCount })
        }

        setDiceTotal(diceTotal + output)

        // Reversing the Object entries form d4, # to #, d4. This is for readability
        setDiceTallyArr(Object.entries(diceTally)
            .map(dice => {
                return dice.reverse().join('')
            })
        )

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
        setDiceTallyArr([])
        setDiceTally({ d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d20: 0, d100: 0 })

    }

    return (
        <section id='dice-thrower'>
            <p id='dice-tally'>
                {diceTallyArr.map((amount, i) => {
                    if (amount.charAt(0) !== '0' && i !== diceTallyArr.length) {
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
