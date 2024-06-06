import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ height: '10vh', width: '10%' , color: 'White',backgroundColor:'grey' }} >{text}</div>;


export default class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 22.3072,
      lng: 73.1812
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBT72zPSHhfyo4QKTbQ9hZ03wyef-Gr7os' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={22.3159}
            lng={73.1593}
            text="OUR SHOP"
           
          />
        </GoogleMapReact>
      </div>
    );
  }
}
