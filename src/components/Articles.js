import QuickLinks from './QuickLinks'
import { Switch, Route } from "react-router-dom"
import SpellsPage from './pages/SpellsPage'

function Articles() {
    return (
        <div className='main-content'>
            <Switch>
                <Route exact path='/'>
                    <ul>
                        <QuickLinks />
                    </ul>
                </Route>
                <Route path='/spells'>
                    <SpellsPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Articles
