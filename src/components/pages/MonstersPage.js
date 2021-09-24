import RenderMonsterList from './MonstersList'
import './ListPages.scss'

function Monsters() {
        return (
            <div id='table-wrapper'>
                <h2 id='list-header'>Monsters List</h2>
                <div id='list-container'>
                    <table>
                        <thead>
                            <tr>
                                <th className='table-header'>Name</th>
                                <th className='table-header'>Type</th>
                                <th className='table-header'>CR</th>
                                <th className='table-header'>Size</th>
                                <th className='table-header'>HP</th>
                            </tr>
                        </thead>
                        <RenderMonsterList/>
                    </table>
                </div>
            </div>
        )
    }

export default Monsters
