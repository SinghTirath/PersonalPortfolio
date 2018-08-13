import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{
      margin: '2%',
      position: 'relative', color: 'white', background: 'light-grey',
      height: 40, width: 60, top: -20, left: -30,    
    }}>
      {text}
    </div>
  );
  
  class Map extends React.Component {
    static defaultProps = {
      center: {lat: 49.2827, lng: 123.1207},
      zoom: 11
    };
  
    render() {
      return (
         <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent 
            lat={49.2827} 
            lng={123.1207} 
            text={'Vancouver '} 
          />
        </GoogleMapReact>
      );
    }
  }
  
  export default Map;