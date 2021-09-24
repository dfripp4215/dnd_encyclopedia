import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './GeneralTextPage.scss'
import './IndvMonsterPage.scss'

function IndvMonster() {
    let monsterNameObj = useParams()
    let monsterName = monsterNameObj.monster
    const [monster, setMonster] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.open5e.com/monsters/?search=${monsterName}`)
            .then(res => {
                setMonster(res.data.results[0])
                setLoading(false)
            })
    }, [monsterName])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    // ToDo incorporate Links to spells.
    let {
        name,
        alignment,
        armor_class,
        hit_points,
        hit_dice,
        speed,
        strength,
        strength_save,
        dexterity,
        dexterity_save,
        constitution,
        constitution_save,
        intelligence,
        intelligence_save,
        wisdom,
        wisdom_save,
        charisma,
        charisma_save,
        skills,
        senses,
        languages,
        challenge_rating,
        special_abilities,
        actions,
        legendary_actions,
        size,
        type,
        damage_immunities,
        damage_resistances,
        damage_vulnerabilities

    } = monster

    let speedEntries = Object.entries(speed)
    for (let i = 0; i < speedEntries.length; i++) {
        speedEntries[i][0] = speedEntries[i][0].charAt(0).toUpperCase() + speedEntries[i][0].slice(1)

        if (i !== speedEntries.length) {
            speedEntries[i][1] = `${speedEntries[i][1]}ft. `
        } else {
            speedEntries[i][1] = `${speedEntries[i][1]}ft.`
        }

        speedEntries[i] = speedEntries[i].join(' ')
    }

    let skillEntries = Object.entries(skills)
    for (let i = 0; i < skillEntries.length; i++) {
        skillEntries[i][0] = skillEntries[i][0].charAt(0).toUpperCase() + skillEntries[i][0].slice(1)

        if (i !== skillEntries.length) {
            skillEntries[i][1] = `+${skillEntries[i][1]}, `
        } else {
            skillEntries[i][1] = `+${skillEntries[i][1]}`
        }

        skillEntries[i] = skillEntries[i].join(' ')
    }

    const calcAbilityMult = (abilityScore) => {
        let multiplier = Math.floor(abilityScore / 2) - 5

        if (multiplier >= 0) {
            return `(+${multiplier})`
        } else {
            return `(${multiplier})`
        }
    }

    const damageImmunities = () => {
        if (damage_immunities !== '') {
            return <p><strong>Damage Immunities</strong> {damage_immunities}</p>
        }
    }

    const damageResistances = () => {
        if (damage_resistances !== '') {
            return <p><strong>Damage Resistances</strong> {damage_resistances}</p>
        }
    }

    const damageVulnerabilities = () => {
        if (damage_vulnerabilities !== '') {
            return <p><strong>Damage Vulnerabilities</strong> {damage_vulnerabilities}</p>
        }
    }

    const savingThrows = () => {
        let allSavingThrows = [strength_save, dexterity_save, constitution_save, intelligence_save, wisdom_save, charisma_save]
        const savingThrowValues = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

        for (let i = 0; i < allSavingThrows.length; i++) {
            if (allSavingThrows[i] !== null) {
                allSavingThrows[i] = `+${allSavingThrows[i]}`
            } else {
                allSavingThrows[i] = calcAbilityMult(monster[savingThrowValues[i]]).replace(/\(|\)/g, '')
            }
        }

        return (
            <p><strong>Saving Throws</strong> Str {allSavingThrows[0]}, Dex {allSavingThrows[1]}, Con {allSavingThrows[2]}, Int {allSavingThrows[3]}, Wis {allSavingThrows[4]}, Cha {allSavingThrows[5]}</p>
        )

    }

    const legendaryActions = () => {
        if (legendary_actions) {
            return (
                <span>
                    <h2>Legendary Actions</h2>
                    {legendary_actions.map(legAction => {
                        return (
                            <p className='action'><span className='action-name'>{legAction.name}.</span> {legAction.desc}</p>
                        )
                    })}
                </span>
            )
        }
    }

    const skillsCheck = () => {
        if (Object.keys(skills).length !== 0) {
            return <p><strong>Skills</strong> {skillEntries}</p>
        }
    }

    const specialAbilitiesCheck = () => {
        if (special_abilities) {
            special_abilities.map(ability => {
                return <p className='action'><span className='action-name'>{ability.name}.</span> {ability.desc}</p>
            })
        }
    }

    return (
        <div id='backgrounds-container'>
            <h2>{name}</h2>
            <p className='monster-alignment'><em>{size} {type}, {alignment}</em></p>
            <hr />
            <p><strong>Armor Class</strong> {armor_class}</p>
            <p><strong>Hit Points</strong> {hit_points} ({hit_dice})</p>
            <p><strong>Speed</strong> {speedEntries}</p>
            <hr />
            <div className="ability-array">
                <div className="ability">
                    <span className='ability-name'>STR</span>
                    <span className='ability-score'>{strength} {calcAbilityMult(strength)}</span>
                </div>
                <div className="ability">
                    <span className='ability-name'>DEX</span>
                    <span className='ability-score'>{dexterity} {calcAbilityMult(dexterity)}</span>
                </div>
                <div className="ability">
                    <span className='ability-name'>CON</span>
                    <span className='ability-score'>{constitution} {calcAbilityMult(constitution)}</span>
                </div>
                <div className="ability">
                    <span className='ability-name'>INT</span>
                    <span className='ability-score'>{intelligence} {calcAbilityMult(intelligence)}</span>
                </div>
                <div className="ability">
                    <span className='ability-name'>WIS</span>
                    <span className='ability-score'>{wisdom} {calcAbilityMult(wisdom)}</span>
                </div>
                <div className="ability">
                    <span className='ability-name'>CHA</span>
                    <span className='ability-score'>{charisma} {calcAbilityMult(charisma)}</span>
                </div>
            </div>
            <hr />
            {skillsCheck()}
            {savingThrows()}
            {damageResistances()}
            {damageImmunities()}
            {damageVulnerabilities()}
            <p><strong>Senses</strong> {senses.replace(/,/g, '')}</p>
            <p><strong>Languages</strong> {languages}</p>
            <p><strong>Challenge</strong> {challenge_rating}</p>
            <hr />
            {specialAbilitiesCheck()}
            <h2>Actions</h2>
            {actions.map(action => {
                return <p className='action'><span className='action-name'>{action.name}.</span> {action.desc}</p>
            })}
            {legendaryActions()}
        </div>

    )
}

export default IndvMonster
