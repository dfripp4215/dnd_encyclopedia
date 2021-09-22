import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function RenderMonstersList() {
    const [monsterListArr, setMonsterListArr] = useState([])
    const [isLoading, setLoading] = useState(true);

    // TODO Add all pages to the monsterListArr. This has only 1 page, read the monsters docs for more info
    useEffect(() => {
        axios.get('https://api.open5e.com/monsters/')
            .then(res => {
                setMonsterListArr(res.data.results)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        < tbody >
        {monsterListArr.map((spell, i) => {
            let { name, type, challenge_rating, size, hit_points } = spell
            const uppercaseType = type.charAt(0).toUpperCase() + type.slice(1)
            return (
                <tr className='monster-item list-item'>
                    <td><Link to={name}>{name}</Link></td>
                    <td>{uppercaseType}</td>
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
