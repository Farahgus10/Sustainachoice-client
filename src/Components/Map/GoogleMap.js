import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '60%',
  height: '80%'
}

class GoogleMap extends React.Component{
  state = {
    showingInfoWindow: false, // Hides or shows the infoWindow  
    activeMarker: {},         // Shows the active marker upon click
    selectedPlace: {},        // Shows the infoWindow to the selected place upon a marker
    zoomLevel: 13,
    center: { lat: 38.9072, lng: -77.0369 }
  }

  onMarkerClick = (props, marker) =>  // onMarkerClick shows the infoWindow, which is a component in the google-maps-library that shows a window w/ more details of the place
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true, 
      zoomLevel: 16,
      center:{
        lat: 40.854885,
        lng: -88.081807
      }
    // center: { lat: props.mapCenter.lat, long: props.mapCenter.long}
    });

    onClose = () => {    // onClose closes the infoWindow once a user clicks on the close button 
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null,
          zoomLevel: 13
        });
      }
  };

  render() {
    return (
      <div className="google-map">
      
        <Map
            google={this.props.google}
            zoom={this.state.zoomLevel}
            style={mapStyles}
            initialCenter={this.state.center}
            >
        {this.props.results.map((place, i) => {
          return (
            <Marker key={i}
              onClick={this.onMarkerClick}
              name={place.location_name}
              zoom={16}
              address={place.location_address}
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
            <p>{this.state.selectedPlace.address}</p>
          </div>
          </InfoWindow>  
      </Map>   
      </div> 
  )}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAcQwpW_MUOD-EdN_685HUDQ7lK4QgqX5s'
})(GoogleMap);
