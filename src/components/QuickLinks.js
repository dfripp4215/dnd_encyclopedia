import './QuickLinks.scss'
import axios from 'axios'
import { linkImages } from '../linkImages'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

function QuickLinks() {
    const [directories, setDirectories] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.open5e.com/')
            .then(res => {
                setDirectories(res.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    let linkNames = Object.keys(directories)

    return (
        <div id='links-container'>
            {linkNames.map((link, i) => {

                let linkUpperCase = link.charAt(0).toUpperCase() + link.slice(1)

                // This is to turn Magicitems into Magic-Items
                if (i === 10) {
                    linkUpperCase = linkUpperCase.substring(0, 5) + '-' + linkUpperCase.substring(5, linkUpperCase.length)
                }

                // if statement to get rid of 'search' and 'documents' from the linkAndNames
                if (i !== linkNames.length - 1 && i !== 2) {
                    return (
                        <li key={link}>
                            <Link to={link}>
                                <img src={linkImages[link]} alt={link} />
                                {linkUpperCase}
                            </Link>
                        </li>
                    )
                }
            })}
        </div>
    )
}

export default QuickLinks
