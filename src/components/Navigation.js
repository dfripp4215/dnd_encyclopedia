import SearchIcon from '@material-ui/icons/Search'
import Logo from '../images/D20Logo.png'
import './Navigation.scss'

function Navigation() {
    return (
        <nav>
            <div id="logo">
                <img src={Logo} alt="d20 Logo" />
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