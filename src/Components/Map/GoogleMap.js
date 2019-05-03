import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '60%',
  height: '60%'
}

class GoogleMap extends React.Component{
  state = {
    showingInfoWindow: false, // Hides or shows the infoWindow  
    activeMarker: {},         // Shows the active marker upon click
    selectedPlace: {},        // Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker) =>  // onMarkerClick shows the infoWindow, which is a component in the google-maps-library that shows a window w/ more details of the place
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = () => {    // onClose closes the infoWindow once a user clicks on the close button 
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
  };

  render() {
    return (
      <div className="google-map">
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: 38.9072, lng: -77.0369 }} 
            >
        {this.props.results.map(place => {
          return (
            <Marker key={place.location_name}
              onClick={this.onMarkerClick}
              name={place.location_name}
              position={{ lat: place.latitude, lng: place.longitude}}
             />
          )
        })}
        <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose} 
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
          </InfoWindow>  
      </Map>   
      </div> 
  )}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAcQwpW_MUOD-EdN_685HUDQ7lK4QgqX5s'
})(GoogleMap);
