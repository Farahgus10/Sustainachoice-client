import React from "react";
import Location from '../../Components/Location/location'


export default class LocationRoute extends React.Component{
    render() {
        let locationId = this.props.path.params.locationId;
        let location = this.props.results.filter(result => result.id.toString() === locationId.toString());

        return(
            <div>
                <Location location={location}/>
            </div>
        )
    }
}