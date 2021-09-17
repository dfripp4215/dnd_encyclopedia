import SearchIcon from '@material-ui/icons/Search'
import Logo from '../images/D20Logo.png'
import './Navigation.scss'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <div id="logo">
                <Link to='/'> 
                    <img src={Logo} alt="d20 Logo" />
                </Link>
            </div>
            <div id='search-container'>
                <h1>D&D Encyclopedia</h1>
                <form action="" method="get">
                    <input type="search" placeholder="What are you looking for?" id='search-input' />
                    <button id="search-button"><SearchIcon /></button>
                </form>
            </div>
        </nav>
    )
}

export default Navigation
