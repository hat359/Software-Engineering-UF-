import React,{useEffect,useState} from 'react'
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps'
import Nav from '../Nav'
import axios from'axios'
import mapimg from '../maps.jpg'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {FormControl,Container} from '@mui/material';
import Select from '@mui/material/Select';
import Footer from '../rep-components/Footer'
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer'
import { useLocation } from 'react-router-dom';

function Map(props){


  const [loading, setLoading] = useState(true);
        


  // useEffect(()=>{
    
  //     axios.get("https://campusmap.ufl.edu/library/cmapjson/bus_stops.json").then(response=>{
  //     setstops(response.data.features)
     
  //    })

   

  //    axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json").then(response=>{
  //     setdining(response.data.features)
     
  //    })
      

    //  const fetchData = async () => {
    //   const respbus = await axios.get("https://campusmap.ufl.edu/library/cmapjson/bus_stops.json")
        
      
    //   // const resplib = await axios.get("https://campusmap.ufl.edu/library/cmapjson/library.json")

    //   // const respdin = await axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json")


    //   setstops(respbus.data)
    //   // setlib(resplib.data)
    //   // setdining(respdin.data)
    // };

    // fetchData();
  // });

  // useEffect(()=>{
  //   axios.get("https://campusmap.ufl.edu/library/cmapjson/library.json").then(response=>{
  //     setlib(response.data.features)
     
  //    })

  // })
     
// if(stops.length==0)return null
    
// else       
 return(
        <div >



<GoogleMap defaultZoom={13.5} defaultCenter={{lat:29.643633,lng:-82.354927}}>

 { props.markdat.map(item=>(
   
  
 <Marker key={item.geometry.coordinates[0]} icon={{url:props.url,scaledSize:new window.google.maps.Size(30,30)}} position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}}/>


))}

<MarkerClusterer>
{(clusterer)=>
props.markdat.map(item=>(
   
  
  <Marker key={item.geometry.coordinates[1]}  position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}} clusterer={clusterer}/>
 
 
 ))

}


</MarkerClusterer>

</GoogleMap>
{/*
:props.dat=="library" ? library.features.map(item=>(

  <Marker position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}}/>
 
 )):props.dat=="dining"?dining.features.map(item=>(

  <Marker position={{lat:item.geometry.coordinates[1],lng:item.geometry.coordinates[0]}}/>
 
 )):null} */}
</div>



    )
}

const WrappedMap=withScriptjs(withGoogleMap(Map))

export default function Maps(){
  const location = useLocation();  
    const [mapdata, setmapdata] = React.useState('d');
    const [stops,setstops]=useState([])
    const [library,setlib]=useState([])
    const [dining,setdining]=useState([])
    const [url,seturl]=useState('')
  
    const handleChange = (event) => {
       
      setmapdata(event.target.value);
      if(event.target.value=='busstops'){
        axios.get("https://campusmap.ufl.edu/library/cmapjson/bus_stops.json").then(response=>{
          setstops(response.data.features)
          seturl('https://www.pngfind.com/pngs/m/382-3822049_free-icons-png-bus-stop-icon-png-transparent.png')
         
         })

      }else if(event.target.value=='dining'){
        setstops([])
         axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json").then(response=>{
      setstops(response.data.features)
      seturl('https://mpng.subpng.com/20180315/cre/kisspng-tampa-restaurant-cuban-sandwich-cuban-cuisine-clip-airport-dinner-cliparts-5aab264a6c16f5.0036369615211658984427.jpg')
     })
      }

      else if(event.target.value=='library'){
        setstops([])
         axios.get("https://campusmap.ufl.edu/library/cmapjson/library.json").then(response=>{
      setstops(response.data.features)
      
      seturl('https://mpng.subpng.com/20180407/jpq/kisspng-book-flat-design-books-5ac984c5e9ef33.3004996215231561659582.jpg') 
    })
      }

    };
   
    useEffect(()=>{
    
     

   

    //  axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json").then(response=>{
    //   setdining(response.data.features)
     
    //  })
    })
    
        
      
       
     
      //   axios.get("https://campusmap.ufl.edu/library/cmapjson/library.json").then(response=>{
      //   setlib(response.data)
           
      //  })
        
       
      

      //   axios.get("https://campusmap.ufl.edu/library/cmapjson/dining.json").then(response=>{
      //     setdining(response.data)
          
      //  })
          
        
      // })




return(

<div className='map'>

    {<Nav />}
    <img src={mapimg}/>
    <Container className="Bacc" sx={{marginTop:'30vh'}}>
    <Box sx={{ minWidth: 120 }}>
      <br/>
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
    <br/>
<div id="map" style={{width:'75vw',height:'80vh'}}><WrappedMap url={url} dat={mapdata} markdat={stops} googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDqZ-yKISjABUPFR9IoijYebPdZEtAp-js`}
    loadingElement={<div style={{height:'100%'}}/>}
    containerElement={<div style={{height:'100%'}}/>}
    mapElement={<div style={{height:'100%'}}/>}
/></div>

<br/>
</Container>
{<Footer loc={location}/>}
</div>
)


}
