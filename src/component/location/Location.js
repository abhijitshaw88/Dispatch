import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
  static defaultProps = {
    center: {
      lat: 27.2048 ,
      lng: 77.4975
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="container p-0" style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAhtrtNBSo_cbL9gV4i5xgZopMPqh5Xo5U" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
            >
          <AnyReactComponent
            lat={29.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Location;
