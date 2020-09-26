import React from 'react'
import { GoogleMap, LoadScript } from 'react-google-maps';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 27.0,
  lng: 77.0
};

function Real_loc() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => { console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);},
    (err) => console.log(err)
  );
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-lg-6">
              <LoadScript
                googleMapsApiKey="AIzaSyAhtrtNBSo_cbL9gV4i5xgZopMPqh5Xo5U"
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  { /* Child components, such as markers, info windows, etc. */ }
                  <></>
                </GoogleMap>
              </LoadScript>
          </div>
      </div>
    </div>
  )
}

export default React.memo(Real_loc)
