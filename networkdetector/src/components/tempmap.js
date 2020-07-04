import React from 'react';
import  { compose, withProps, withHandlers ,withStateHandlers } from "recompose";
import Data from '../assets/towers.json';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
// import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXb1gHw-HAIXHDB3dovkH27VXNjhndV0Y&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: "80vh" }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withStateHandlers(() => ({
    isOpen: false,
    showInfo:'0'
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    showInfo:({ showInfo,isOpen}) =>(a)=>({
        isOpen:!isOpen,
        showInfoIndex:a
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={4.5}
    defaultCenter={{ lat: 21.1458,lng: 79.0882 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      defaultMinimumClusterSize={4}
      // defaultZoomOnClick
      defaultMaxZoom={20}
      gridSize={40}
    >
      {props.markers.map(marker => (
        <Marker
            key={marker.cell}
            position={{ lng: marker.lng,lat: marker.lat}}
            onClick={()=>props.showInfo(marker.cell)}
          >
          {(props.isOpen && props.showInfoIndex === marker.cell) && <InfoWindow onCloseClick={props.onToggleOpen}> 
          <div>
            <h3>Radio:{marker.radio}</h3>
            <h3>Cell id:{marker.cell}</h3>
          </div>
          </InfoWindow>}
        </Marker>
      ))
      }
    </MarkerClusterer>
  </GoogleMap>
);

class Tempmap extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      isLoading:true
    }
  }

  componentWillMount() {
    this.setState({ markers: Data})
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  componentDidMount(){
    // setTimeout(this.setState({isLoading:false}),10000)
    this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 1000*5);
  }
  
  // componentDidMount() {
  //   const url = [
  //     // Length issue
  //     `https://gist.githubusercontent.com`,
  //     `/farrrr/dfda7dd7fccfec5474d3`,
  //     `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
  //   ].join("")

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ markers: data.photos });
  //     });
  // }

  render() {
      if(this.state.isLoading)
      {
        return (
        <div className="justify-content-center" style={{marginLeft:'40%'}}>
            <div className="row ml-3 mb-3" style={{marginTop:'30%'}}>
                <div className="spinner-grow text-success ml-3 " role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger ml-3 " role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning ml-3 " role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info ml-3 " role="status">
                  <span className="sr-only">Loading...</span>
                </div>
            </div>
              <h2>MAP IS LOADING.....</h2>
        </div>
        )

      }
      else{
        return (<MapWithAMarkerClusterer markers={this.state.markers} />)
      }
  }
}

export default Tempmap;