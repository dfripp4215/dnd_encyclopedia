import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import './SearchList.scss'
import './GeneralTextPage.scss'

function SearchList() {
    let searchObj = useParams()
    let searchName = searchObj.search
    const [searchList, setSearchList] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.open5e.com/search/?text=${searchName}`)
            .then(res => {
                setSearchList(res.data.results)
                setLoading(false)
            })
    }, [searchName])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    console.log(searchList)

    const makeHTML = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;

        return tmp.textContent || tmp.innerText || "";
    }

    const calcAbilityMult = (abilityScore) => {
        let multiplier = Math.floor(abilityScore / 2) - 5

        if (multiplier >= 0) {
            return `(+${multiplier})`
        } else {
            return `(${multiplier})`
        }
    }

    return (
        <div id='backgrounds-container'>
            <h2>Search Results</h2>
            {searchList.map(result => {
                if (result.route === 'monsters/') {
                    return (
                        <div className='result-container'>
                            <Link to={`/monsters/${result.name}`}>{result.name} </Link>
                            <span>
                                 CR {result.challenge_rating} | {result.hit_points}hp, AC {result.armor_class}
                            </span>
                            <div>
                                <div id='stats-container'>
                                    <div className='stat-indv'>
                                        <span className='title'>Str</span>
                                        <span>
                                            {result.strength} {calcAbilityMult(result.strength)}
                                        </span>
                                    </div>
                                    <div className='stat-indv'>
                                        <span className='title'>Dex</span>
                                        <span>
                                            {result.dexterity} {calcAbilityMult(result.dexterity)}
                                        </span>
                                    </div>
                                    <div className='stat-indv'>
                                        <span className='title'>Con</span>
                                        <span>
                                            {result.constitution} {calcAbilityMult(result.constitution)}
                                        </span>
                                    </div>
                                    <div className='stat-indv'>
                                        <span className='title'>Int</span>
                                        <span>
                                            {result.intelligence} {calcAbilityMult(result.intelligence)}
                                        </span>
                                    </div>
                                    <div className='stat-indv'>
                                        <span className='title'>Wis</span>
                                        <span>
                                            {result.wisdom} {calcAbilityMult(result.wisdom)}
                                        </span>
                                    </div>
                                    <div className='stat-indv'>
                                        <span className='title'>Cha</span>
                                        <span>
                                            {result.charisma} {calcAbilityMult(result.charisma)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else if (result.route === 'spells/') {
                    return (
                        <div className='result-container'>
                            <Link to={`/spells/${result.name}`}>{result.name} </Link>
                            <span>
                                {result.level}, {result.school} spell | {result.dnd_class}
                            </span>
                            <p className='highlights'>
                                {makeHTML(result.highlighted)}
                            </p>
                        </div>
                    )
                } else if (result.route === 'magicitems/') {
                    return (
                        <div className='result-container'>
                            <Link to={`/magicitems`}>{result.name} </Link>
                            <span>
                                {result.type} | {result.rarity}
                            </span>
                            <p className='highlights'>
                                {makeHTML(result.highlighted)}
                            </p>
                        </div>
                    )
                } else if (result.route === 'races/') {
                    return (
                        <div className='result-container'>
                            <Link to={`/races`}>{result.name} </Link>
                            <p className='highlights'>
                                {makeHTML(result.highlighted)}
                            </p>
                        </div>
                    )
                } else if (result.route === 'sections/') {
                    return (
                        <div className='result-container'>
                            <Link to={`/sections`}>{result.name} </Link>
                            <p className='highlights'>
                                {makeHTML(result.highlighted)}
                            </p>
                        </div>
                    )
                } else if (result.route === 'classes/') {
                    return (
                        <div className='result-container'>
                            <Link to={`/classes`}>{result.name} </Link>
                            <p className='highlights'>
                                {makeHTML(result.highlighted)}
                            </p>
                        </div>
                    )
                } else {
                    return (
                        <div className='result-container'>
                            <Link to={`/`}>{result.name} </Link>
                            <p className='highlights'>
                                {makeHTML(result.highlighted)}
                            </p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default SearchList
