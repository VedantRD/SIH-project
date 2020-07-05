import { compose, withProps, withStateHandlers } from "recompose";
import React from "react"
import Data from "./../assets/towers.json"
// const FaAnchor = require("react-icons/lib/fa/anchor");
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
    showInfo: '0'
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    showInfo: ({ showInfo, isOpen }) => (a) => ({
      isOpen: !isOpen,
      showInfoIndex: a
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      lng: 87.192306518555,
      lat: 22.334518432617
    }}
  >
    {
      Data.map((marker) => {
        return <Marker
          key={marker.cell}
          position={{ lng: marker.lng, lat: marker.lat }}
          onClick={() => props.showInfo(marker.cell)}
        >
          {(props.isOpen && props.showInfoIndex === marker.cell) && <InfoWindow onCloseClick={props.onToggleOpen}>
            <h1>cell info</h1>
          </InfoWindow>}
        </Marker>
      })
    }



  </GoogleMap>
);

export default class Infowindow extends React.Component {
  render() {
    return (
      <MapWithAMakredInfoWindow
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXb1gHw-HAIXHDB3dovkH27VXNjhndV0Y&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: "80vh" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}