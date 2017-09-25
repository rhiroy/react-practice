import React from 'react'
import FishTableRow from './FishTableRow.jsx'

const App = (fishes) => (
    <div>
        <table> 
            <tbody>
                {fishes.map(fish => <FishTableRow fish={fish}/>)}
            </tbody>
        </table>
    </div>
)

export default App
