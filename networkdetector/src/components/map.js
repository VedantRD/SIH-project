import React, { useRef, useState } from 'react';
import GoogleMap from 'google-map-react';
import Data from '../assets/towers.json';
import useSupercluster from "use-supercluster";

const Marker = ({ children }) => children ;

function Mainchart() {
  //map setup
  const mapRef = useRef();
  const [zoom,setZoom]=useState(10);
  const [bounds,setBounds]=useState(null);

  //load and format data
  const locations=Data;
  const points = locations.map(location=>({
    type:"Feature",
    properties:{
      cluster:false,
      locationId:location.id,
      category:"anti-social-behaviour"
    },
    geometry:{
      type:"point",
      coordinates:[location.lng,location.lat]
    }
  }
  ))
  //get clusters
  const {clusters,supercluster} = useSupercluster({
    points,
    bounds,
    zoom,
    options:{
      radius:75,
      maxZoom:20
    }
  })
 // console.log(clusters);

 
  //render map

  return (
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyBZJXIROjZBi30Ush4UFO1ztLqfkNikQZQ" }}
          defaultCenter={{
            lat: 21.1458,
            lng: 79.0882
          }}
          defaultZoom={4.5}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map})=>{
            mapRef.current=map;
          }}
          onChange={({ zoom , bounds })=>{
            setZoom(zoom)
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat
            ])
          }}
        >
          {
          clusters.map(cluster =>{
            const [longitude,latitude] = cluster.geometry.coordinates;
            const {cluster:isCluster,point_count:pointCount}=cluster.properties;
          if (isCluster){
            console.log(cluster)
            return  <Marker key={cluster.id} lat={latitude} lng={longitude}>
                      <div 
                      style={{background:"None",border:"None"}} 
                      onClick={()=>{
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),40 
                        );
                        mapRef.current.setZoom(expansionZoom)
                        mapRef.current.panTo({lat:latitude,lng:longitude})
                      }}>
                        <img src="/Reddot.svg" width={`${cluster.properties.point_count*3}`} height={`${cluster.properties.point_count*3}`} alt="" />
                        {/* 20*(cluster.properties.point_count/(points.length-8000))*10 */}
                      </div>
                    </Marker>
          }
          // console.log(cluster.properties.locationId)
          return(
            <Marker key={cluster.properties.locationId} lat={latitude} lng={longitude}>
            <div style={{background:"None",border:"None"}}>
              <img src="/Reddot.svg" width="10px" height="10px" alt="" />
            </div>
          </Marker>
          );
        })} 
        {/* {locations.map(location=>(
          <Marker key={location.id} lat={location.lat} lng={location.lng}>
            <button style={{background:"None",border:"None"}}>
              <img src="/Reddot.svg" width="2px" height="2px" alt="" />
            </button>
          </Marker>
          ))
          }*/}
        </GoogleMap>
      </div>
  );
}

export default Mainchart;
