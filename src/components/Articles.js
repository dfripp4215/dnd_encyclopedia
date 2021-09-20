import QuickLinks from './QuickLinks'
import { Switch, Route } from "react-router-dom"
import SpellsPage from './pages/SpellsPage'
import MonstersPage from './pages/MonstersPage'

function Articles() {
    return (
        <div id='content-container'>
            <Switch>
                <Route exact path='/'>
                    <ul>
                        <QuickLinks />
                    </ul>
                </Route>
                <Route path='/spells'>
                    <SpellsPage />
                </Route>
                <Route path='/monsters'>
                    <MonstersPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Articles
