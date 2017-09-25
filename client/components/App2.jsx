import React from 'react';
import FishTableRow from './FishTableRow.jsx';
 
const App (props) => (
    <table>
        <tbody>
            {props.fishes.map(fish => <FishTableRow fish={fish}/>)}
        </tbody>
    </table>
)
export default App
