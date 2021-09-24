import { useParams } from 'react-router-dom'
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

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            test
        </div>
    )
}

export default IndvSpell
