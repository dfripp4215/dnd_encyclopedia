import RenderSpellsList from './RenderSpellList'
import './SpellsPage.scss'

function Spells() {
        return (
            <div id='spells-wrapper'>
                <h2 id='spell-list-header'>Spell List</h2>
                <div id='spells-list-container'>
                    <table>
                        <thead>
                            <tr>
                                <th className='spell-table-header'>Name</th>
                                <th className='spell-table-header'>School</th>
                                <th className='spell-table-header'>Level</th>
                                <th className='spell-table-header'>Component</th>
                                <th className='spell-table-header'>Class</th>
                            </tr>
                        </thead>
                        <RenderSpellsList />
                    </table>
                </div>
            </div>
        )
    }

export default Spells
