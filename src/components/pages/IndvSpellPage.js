import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function IndvSpell() {
    let spellNameObj = useParams()
    let spellName = spellNameObj.spell
    const [spell, setSpell] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.open5e.com/spells/?search=${spellName}`)
            .then(res => {
                setSpell(res.data.results[0])
                setLoading(false)
            })
    }, [spellName])

    console.log(spell)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    const higherLevelCheck = () => {
        if (spell.higher_level !== '') {
            return (
                <p><strong>At Higher Levels:</strong> {spell.higher_level}</p>
            )
        }
    }

    const ritualCheck = () => {
        if (spell.ritual === 'yes') {
            return (
                <span>(Ritual)</span>
            )
        }
    }

    const materialCheck = () => {
        if (spell.material !== '') {
            return (
                <span>({spell.material})</span>
            )
        }
    }

    return (
        <div id='backgrounds-container'>
            <h2>{spell.name}</h2>
            <p><em>{spell.level} {spell.school} {ritualCheck()} | {spell.dnd_class}</em></p>
            <hr />
            <p><strong>Range:</strong> {spell.range}</p>
            <p><strong>Casting Time:</strong> {spell.casting_time}</p>
            <p><strong>Duration:</strong> {spell.duration}</p>
            <p><strong>Components: {spell.components}</strong> {materialCheck()}</p>
            <hr />
            <div>
                <p>{spell.desc}</p>
            </div>
            {higherLevelCheck()}
        </div>
    )
}

export default IndvSpell
