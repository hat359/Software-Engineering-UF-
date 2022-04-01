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
import Footer from '../rep-components/Footer'

function Map(props){
  const [stops,setstops]=useState([])
  const [library,setlib]=useState([])
  const [dining,setdining]=useState([])
  const [loading, setLoading] = useState(true);
        
  useEffect(()=>{
    //   axios.get("https://campusmap.ufl.edu/library/cmapjson/bus_stops.json").then(response=>{
    //   setstops(response.data)
    //  })
      

     const fetchData = async () => {
      const respbus = await axios.get("https://campusmap.ufl.edu/library/cmapjson/bus_stops.json")
        
      
      const resplib = await axios.get("https://campusmap.ufl.edu/library/cmapjson/library.json")

      const respdin = await axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json")


      setstops(respbus.data)
      setlib(resplib.data)
      setdining(respdin.data)
    };

    fetchData();
  });
     
    
       
 return(
        <div >



<GoogleMap defaultZoom={13.5} defaultCenter={{lat:29.643633,lng:-82.354927}}/>

{ props.dat=='d'? null: props.dat=='busstops'?stops.features.map(item=>(

 <Marker position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}}/>

)):props.dat=="library" ? library.features.map(item=>(

  <Marker position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}}/>
 
 )):props.dat=="dining"?dining.features.map(item=>(

  <Marker position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}}/>
 
 )):null}
</div>



    )
}

const WrappedMap=withScriptjs(withGoogleMap(Map))

export default function Maps(){
    const [mapdata, setmapdata] = React.useState('d');

    const handleChange = (event) => {
      setmapdata(event.target.value);
    };



    
        
      
       
     
      //   axios.get("https://campusmap.ufl.edu/library/cmapjson/library.json").then(response=>{
      //   setlib(response.data)
           
      //  })
        
       
      

      //   axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json").then(response=>{
      //     setdining(response.data)
          
      //  })
          
        
      // })




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
          <MenuItem value="d">Select</MenuItem>
          <MenuItem value="busstops">Bus Stops</MenuItem>
          <MenuItem value="library">Library</MenuItem>
          <MenuItem value="dining">Dining</MenuItem>
        </Select>
      </FormControl>
    </Box>
<div id="map" style={{width:'80vw',height:'80vh',marginLeft:'10vw',marginTop:'55vh'}}><WrappedMap dat={mapdata} googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDqZ-yKISjABUPFR9IoijYebPdZEtAp-js`}
    loadingElement={<div style={{height:'100%'}}/>}
    containerElement={<div style={{height:'100%'}}/>}
    mapElement={<div style={{height:'100%'}}/>}
/></div>

<br/>
{<Footer/>}
</div>
)


}
