import React from 'react'
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps'



function Map(){
    return(
<GoogleMap defaultZoom={10} defaultCenter={{lat:29.651634,lng:-82.324829}}/>
    )
}

const WrappedMap=withScriptjs(withGoogleMap(Map))

export default function Maps(){

return(
<div style={{width:'100vw',height:'100vh'}}><WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDqZ-yKISjABUPFR9IoijYebPdZEtAp-js`}
    loadingElement={<div style={{height:'100%'}}/>}
    containerElement={<div style={{height:'100%'}}/>}
    mapElement={<div style={{height:'100%'}}/>}
/></div>

)





}