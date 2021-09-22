import QuickLinks from './QuickLinks'
import { Switch, Route } from "react-router-dom"
import SpellsPage from './pages/SpellsPage'
import MonstersPage from './pages/MonstersListPage'
import Backgrounds from './pages/BackgroundsPage'
import RenderIndvMonster from './pages/IndvMonsterPage'

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
                <Route path='/:id' children={<RenderIndvMonster />} />
            </Switch>
        </div>
    )
}

export default Articles
