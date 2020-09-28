import React,{Component} from 'react';

class Googlemap extends Component{

  componentDidMount(){
      console.log(this.props);
    const google = window.google;
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }


  render(){
    return <div ref="map" style={{ height: '200px', width: '100%' }}/>;
  }
}


export default Googlemap;
