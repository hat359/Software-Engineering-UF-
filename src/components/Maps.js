import React,{useEffect,useState} from 'react'
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps'
import Nav from '../Nav'
import axios from'axios'
import mapimg from '../maps.jpg'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Map(props){
    const [stops,setstops]=useState([])
    const [loading, setLoading] = useState(true);

    
        if(props.dat=="busstops"){
        
        axios.get("https://campusmap.ufl.edu/library/cmapjson/bus_stops.json").then(response=>{
        setstops(response.data)
        setLoading(false)
        
        
        })
      }
       
      if(props.dat=="library"){
        setstops([])
        axios.get("https://campusmap.ufl.edu/library/cmapjson/library.json").then(response=>{
        setstops(response.data)
        setLoading(false)        
        
        
        })
      }

      if(props.dat=="dining"){
        setstops([])
        axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json").then(response=>{
          setstops(response.data)
          setLoading(false)
          
          
          })


      }
        

    
        
        
        
        

  if(loading==true) return null 


        
        
  else return(
        <div >



<GoogleMap defaultZoom={13.5} defaultCenter={{lat:29.643633,lng:-82.354927}}/>
{  stops.features.map(item=>(

<Marker position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}}/>

))}
</div>



    )
}

const WrappedMap=withScriptjs(withGoogleMap(Map))

export default function Maps(){
    const [mapdata, setmapdata] = React.useState('busstops');

    const handleChange = (event) => {
      setmapdata(event.target.value);
    };




return(

<div className='map'>
    {<Nav/>}
    <img src={mapimg}/>
    <Box sx={{ minWidth: 120 }}>
      <FormControl maxWidth="lg">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mapdata}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="busstops">Bus Stops</MenuItem>
          <MenuItem value="library">Library</MenuItem>
          <MenuItem value="dining">Dining</MenuItem>
        </Select>
      </FormControl>
    </Box>
<div style={{width:'80vw',height:'80vh',marginLeft:'10vw',marginTop:'55vh'}}><WrappedMap dat={mapdata} googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDqZ-yKISjABUPFR9IoijYebPdZEtAp-js`}
    loadingElement={<div style={{height:'100%'}}/>}
    containerElement={<div style={{height:'100%'}}/>}
    mapElement={<div style={{height:'100%'}}/>}
/></div>
<br/>
</div>
)





}