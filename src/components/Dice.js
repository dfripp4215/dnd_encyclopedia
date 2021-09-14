import { useState } from 'react'
import './Dice.scss'
import { CSSTransition } from 'react-transition-group';
import diceFourPic from '../images/D4shape.png'
import diceSixPic from '../images/D6shape.png'
import diceEightPic from '../images/D8shape.png'
import diceTenPic from '../images/D10shape.png'
import diceTwelvePic from '../images/D12shape.png'
import diceTwentyPic from '../images/D20shape.png'
import diceHundredPic from '../images/D100shape.png'

function Dice() {
    const [diceTotal, setDiceTotal] = useState(0)
    const [dice4, setDice4] = useState(4)
    const [dice6, setDice6] = useState(6)
    const [dice8, setDice8] = useState(8)
    const [dice10, setDice10] = useState(10)
    const [dice12, setDice12] = useState(12)
    const [dice20, setDice20] = useState(20)
    const [dice100, setDice100] = useState(100)

    const diceRoller = (diceAmount) => {
        let output = Math.floor(Math.random() * (diceAmount - 1) + 1)

        diceAmount === 4 ? setDice4(output)
            : diceAmount === 6 ? setDice6(output)
                : diceAmount === 8 ? setDice8(output)
                    : diceAmount === 10 ? setDice10(output)
                        : diceAmount === 12 ? setDice12(output)
                            : diceAmount === 20 ? setDice20(output)
                                : setDice100(output)

        setDiceTotal(diceTotal + output)

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
    }

    return (
        <section id='dice-thrower'>
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
