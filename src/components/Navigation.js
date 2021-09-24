import SearchIcon from '@material-ui/icons/Search'
import Logo from '../images/D20Logo.png'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
    const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        setSearch(`${event.target.value}`)
    }

    return (
        <nav>
            <div id="logo">
                <Link to='/'>
                    <img src={Logo} alt="d20 Logo" />
                </Link>
            </div>
            <div id='search-container'>
                <h1>D&D Encyclopedia</h1>
                <div id='search-form'>
                    <input type="search" placeholder="What are you looking for?" id='search-input' onChange={handleSearch} />
                    <Link to={`/search/${search}`} id="search-button"><SearchIcon /></Link>
                </div>
            </div>
        </nav >
    )
}

export default Navigation
