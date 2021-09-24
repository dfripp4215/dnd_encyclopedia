import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function RenderMonstersList() {
    const [monsterListArr, setMonsterListArr] = useState([])
    const [isLoading, setLoading] = useState(true);

    // TODO: I just wanted to get this working, but I need to make seperate pages for each of these promises as this is way to long and takes to much time to wait for each one. Maybe 11 pages with 2 requests each.
    useEffect(() => {
        Promise.all([axios.get('https://api.open5e.com/monsters/'), axios.get('https://api.open5e.com/monsters/?page=2'), axios.get('https://api.open5e.com/monsters/?page=3'), axios.get('https://api.open5e.com/monsters/?page=4'), axios.get('https://api.open5e.com/monsters/?page=5'), axios.get('https://api.open5e.com/monsters/?page=6'), axios.get('https://api.open5e.com/monsters/?page=7'), axios.get('https://api.open5e.com/monsters/?page=8'), axios.get('https://api.open5e.com/monsters/?page=9'), axios.get('https://api.open5e.com/monsters/?page=10'), axios.get('https://api.open5e.com/monsters/?page=11'), axios.get('https://api.open5e.com/monsters/?page=12'), axios.get('https://api.open5e.com/monsters/?page=13'), axios.get('https://api.open5e.com/monsters/?page=14'), axios.get('https://api.open5e.com/monsters/?page=15'), axios.get('https://api.open5e.com/monsters/?page=16'), axios.get('https://api.open5e.com/monsters/?page=17'), axios.get('https://api.open5e.com/monsters/?page=18'), axios.get('https://api.open5e.com/monsters/?page=18'), axios.get('https://api.open5e.com/monsters/?page=20'), axios.get('https://api.open5e.com/monsters/?page=21'), axios.get('https://api.open5e.com/monsters/?page=22')])
            .then(([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22]) => {
                setMonsterListArr(p1.data.results.concat(p2.data.results, p3.data.results, p4.data.results, p5.data.results, p6.data.results, p7.data.results, p8.data.results, p9.data.results, p10.data.results, p11.data.results, p12.data.results, p13.data.results, p14.data.results, p15.data.results, p16.data.results, p17.data.results, p18.data.results, p19.data.results, p20.data.results, p21.data.results, p22.data.results))
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <tbody>
            {monsterListArr.map(monster => {
                let { name, type, challenge_rating, size, hit_points } = monster
                const uppercaseType = type.charAt(0).toUpperCase() + type.slice(1)
                return (
                    <tr className='monster-item list-item'>
                        <td><Link to={`/monsters/${name}`}>{name}</Link></td>
                        <td>{uppercaseType}</td>
                        <td>{challenge_rating}</td>
                        <td>{size}</td>
                        <td>{hit_points}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default RenderMonstersList
