import React, { Component } from 'react';
import ConnectApiMaps,{Map} from 'maps-google-react';

export class Loc extends Component {
  render() {
    return (
      <div className="container" style={{ height: '30vh', width: '100%'}}>
                <Map
                google={this.props.google}
                mapOptions={{
                                  zoom: 10,
                                  center: { lat: 27.2048, lng: 78.0 },
                                  disableDefaultUI: true,
                                  styles: [{
                                      featureType: 'poi.business',
                                      stylers: [{ visibility: 'on' }]
                                  },
                                  {
                                      featureType: 'transit',
                                      elementType: 'labels.icon',
                                      stylers: [{ visibility: 'off' }]
                                  }]
                              }}>
                </Map>
          </div>
    );
  }
}

export default ConnectApiMaps({
  apiKey: ("AIzaSyAuDlx8ZHGyZE7_ChzGw3UI1XjAaBqpHc4"),
})(Loc)
