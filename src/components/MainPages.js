import QuickLinks from './QuickLinks'
import { Switch, Route } from "react-router-dom"
import SpellsPage from './pages/SpellsPage'
import MonstersPage from './pages/MonstersPage'
import Backgrounds from './pages/BackgroundsPage'
import IndvMonster from './pages/IndvMonsterPage'
import RenderIndvSpell from './pages/IndvSpellPage'

function MainPages() {
    return (
        <div id='content-container'>
            <Switch>
                <Route exact path='/'>
                    <ul>
                        <QuickLinks />
                    </ul>
                </Route>
                <Route path='/spells/:spell' >
                    <RenderIndvSpell />
                </Route>
                <Route path='/spells'>
                    <SpellsPage />
                </Route>
                <Route path='/monsters/:monster'>
                    <IndvMonster />
                </Route>
                <Route path='/monsters'>
                    <MonstersPage />
                </Route>
                <Route path='/backgrounds'>
                    <Backgrounds />
                </Route>
                <Route path='/planes'>
                    <h2>Coming Soon!</h2>
                </Route>
                <Route path='/sections'>
                    <h2>Coming Soon!</h2>
                </Route>
                <Route path='/feats'>
                    <h2>Coming Soon!</h2>
                </Route>
                <Route path='/conditions'>
                    <h2>Coming Soon!</h2>
                </Route>
                <Route path='/races'>
                    <h2>Coming Soon!</h2>
                </Route>
                <Route path='/classes'>
                    <h2>Coming Soon!</h2>
                </Route>
                <Route path='/magic-items'>
                    <h2>Coming Soon!</h2>
                </Route>
                <Route path='/weapons'>
                    <h2>Coming Soon!</h2>
                </Route>
            </Switch>
        </div>
    )
}

export default MainPages
