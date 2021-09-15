import './QuickLinks.scss'
import { linkImages  } from '../linkImages'

function QuickLinks({ state }) {
    let linkAndNames = Object.entries(state.apiRes)

    return (
        <div id='links-container'>
            {linkAndNames.map((link, i) => {
                // if statement to get rid of 'search' from the linkAndNames
                if (i !== linkAndNames.length - 1 && i !== 2) {
                    return (
                        <li key={link[1]}>
                            <a href={link[1]}>
                                <img src={linkImages[link[0]]} alt={link[0]} />
                                {link[0]}
                            </a>
                        </li>
                    )
                }
            })}
        </div>
    )

}

export default QuickLinks