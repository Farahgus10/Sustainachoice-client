import React from 'react';
import Nav from '../Nav/Nav'

export default class Location extends React.Component {
    state = {
        
    }

    renderLocationTitle = () => {
        return this.props.location.map(result => 
            <div>
                <h1>{result.location_name}</h1>
                <p>{result.info}</p>
            </div>
            
        )
    }

    render() {
        console.log(this.props.location)
        return(
            <div className="location_page">
                <Nav />
                {this.renderLocationTitle()}
                <div>
                    {/* Comment form component */}
                </div>
            </div>
        )
    }
}