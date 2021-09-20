import axios from 'axios'
import { useEffect, useState } from 'react'

function RenderMonstersList() {
    const [monsterListArr, setMonsterListArr] = useState([])

    // TODO Add all pages to the monsterListArr. This has only 1 page, read the monsters docs for more info
    useEffect(() => {
        axios.get('https://api.open5e.com/monsters/')
            .then(res => setMonsterListArr(res.data.results))
    }, [])

    return (
        < tbody >
        {monsterListArr.map(spell => {
            const { name, type, challenge_rating, size, hit_points } = spell
            return (
                <tr className='monster-item list-item'>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>{challenge_rating}</td>
                    <td>{size}</td>
                    <td>{hit_points}</td>
                </tr>
            )
        })}
    </tbody >
    )
}

export default RenderMonstersList
