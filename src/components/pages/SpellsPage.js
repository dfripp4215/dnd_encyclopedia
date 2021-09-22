import RenderSpellsList from './RenderSpellList'
import './ListPages.scss'

function Spells() {
        return (
            <div id='table-wrapper'>
                <h2 id='list-header'>Spell List</h2>
                <div id='list-container'>
                    <table>
                        <thead>
                            <tr>
                                <th className='table-header'>Name</th>
                                <th className='table-header'>School</th>
                                <th className='table-header'>Level</th>
                                <th className='table-header'>Component</th>
                                <th className='table-header'>Class</th>
                            </tr>
                        </thead>
                        <RenderSpellsList />
                    </table>
                </div>
            </div>
        )
    }

export default Spells
