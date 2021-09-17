import './QuickLinks.scss'
import axios from 'axios'
import { linkImages } from '../linkImages'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

function QuickLinks() {
    const [directories, setDirectories] = useState({})

    useEffect(() => {
        axios.get('https://api.open5e.com/')
            .then(res => setDirectories(res.data))
    }, [])

    let linkNames = Object.keys(directories)

    return (
        <div id='links-container'>
            {linkNames.map((link, i) => {
                // if statement to get rid of 'search' from the linkAndNames
                if (i !== linkNames.length - 1 && i !== 2) {
                    return (
                        <li key={link}>
                            <Link to={link}>
                                <img src={linkImages[link]} alt={link} />
                                {link}
                            </Link>
                        </li>
                    )
                }
            })}
        </div>
    )

}

export default QuickLinks