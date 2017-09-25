import React from 'react';
import App from './App.jsx';

class FishTableRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: false
        };
    }
        render() {
            return(
                <tr onClick={() =>
                    this.setState({showDescription: !this.state.showDescription})}>
                    <td className="fish-name">
                        {this.props.fish.name}
                    </td>
                    <td>
                        <img src={this.props.fish.image}/>
                    </td>
                    {this.state.showDescription ? <td className="fish-description">
                        {this.props.fish.description}
                    </td> : null}
                </tr>
            )
        }
    }

export default FishTableRow
