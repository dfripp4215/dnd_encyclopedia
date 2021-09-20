import axios from 'axios'
import { useEffect, useState } from 'react'

function RenderSpellsList() {
    const [spellListArr, setSpellListArr] = useState([])

    useEffect(() => {
        axios.get('https://api.open5e.com/spells/')
            .then(res => setSpellListArr(res.data.results))
    }, [])

    return (
        < tbody >
            {spellListArr.map(spell => {
                const { name, school, level, components, dnd_class } = spell
                return (
                    <tr className='spell-item list-item'>
                        <td>{name}</td>
                        <td>{school}</td>
                        <td>{level.replace('-level', '')}</td>
                        <td>{components}</td>
                        <td>{dnd_class}</td>
                    </tr>
                )
            })}
        </tbody >
    )
}

export default RenderSpellsList
