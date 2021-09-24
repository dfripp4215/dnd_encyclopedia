import axios from 'axios'
import { useEffect, useState } from 'react'
import './GeneralTextPage.scss'

function Backgrounds() {
    const [backgroundsDescription, setBackgroundsDescription] = useState('')
    const [backgroundsArray, setBackgroundsArray] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.open5e.com/sections/')
            .then(res => setBackgroundsDescription(res.data.results[3].desc))
        axios.get('https://api.open5e.com/backgrounds/')
            .then(res => {
                setBackgroundsArray(res.data.results)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div id='backgrounds-container'>
            <div id='background-discription'>
                <h2>Backgrounds</h2>
                <div>
                    {backgroundsDescription
                        .split('##')[0]
                        .split('\n\n')
                        .map(para => {
                            return <p>{para.replace(/\*/g, '')}</p>
                        })}
                </div>
                <div>
                    {backgroundsDescription.split('##').map((desc, i) => {
                        if (i !== 0) {
                            const sectionTitle = desc.substring(1).split("\n\n")[0]
                            const sectionDesc = desc.substring(1).split("\n\n").splice(1)
                            return (
                                <div>
                                    <h3>{sectionTitle}</h3>
                                    {sectionDesc.map(para => {
                                        return <p>{para}</p>
                                    })}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div>
                {backgroundsArray.map(background => {
                    const { desc, name, languages, skill_proficiencies, tool_proficiencies, feature, feature_desc } = background

                    if (languages) {
                        return (
                            <div className='background'>
                                <h3>{name}</h3>
                                <p>{desc}</p>
                                <p><strong>Languages:</strong> {languages}</p>
                                <p><strong>Skills:</strong> {skill_proficiencies}</p>
                                <p><strong>Feature:</strong> {feature}</p>
                                <p>{feature_desc}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className='background'>
                                <h3>{name}</h3>
                                <p>{desc}</p>
                                <p><strong>Tools:</strong> {tool_proficiencies}</p>
                                <p><strong>Skills:</strong> {skill_proficiencies}</p>
                                <p><strong>Feature:</strong> {feature}</p>
                                <p>{feature_desc}</p>
                            </div>
                        )
                    }

                })}
            </div>
        </div>
    )
}

export default Backgrounds
