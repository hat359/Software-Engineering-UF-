import React,{useState,useEffect} from 'react';

import {Box,Container,Grid,Typography,TextField,Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import image from '../tower.jpg'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Signin() {
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const [userdat,setUserdat]=useState([])

useEffect(()=>{
  axios.get('http://localhost:8080/info-gator-api/users').then(response=>{
    // console.log(response.data)
    setUserdat(response.data)
    
    
    })


})

function handelchange(event){
// alert(event.target.name)
if(event.target.name=='username'){
  setUsername(event.target.value)
}
if(event.target.name=='password'){
  setPassword(event.target.value)
}


}
const navigate=useNavigate()
 function  handelclick(){
var temp=''
var i=0
var uid=''
console.log(userdat)
  for(i=0;i<userdat.length;i++){
   
    if(username==userdat[i].Username && password==userdat[i].Password){
      uid=userdat[i].UserID
      temp='found'
      break
    }

    
   
  
   }

   if(temp=='found'){
    window.localStorage.setItem('username',username)
    window.localStorage.setItem('uid',uid)
    navigate('/')

   }
   else{
     alert('not found')
   }






 }


//  function check(user,password){
 

//  }

  return (
   <div>
  
  <Grid container>
    <Grid item xs={6}>
    <img class="signin-img" src={image}/>
      </Grid> 

      <Grid class="abc" item xs={6}>
        <Container maxWidth="sm">
      <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}} style={{
        marginTop:150, borderRadius:'15px'
  }}>
      <Box sx={{  m: 1,fontSize: 'h3.fontSize' }} >Signin
      <br/><br/>
      <TextField sx={{width:'482px'}} className="email" id="outlined-basic" label=" Username*" name="username" onChange={handelchange} variant="outlined" />
      <TextField type="password" sx={{width:'482px'}} className="pass" id="outlined-basic" label="Password*" name="password" onChange={handelchange} variant="outlined" />
      <Button variant="contained" onClick={handelclick}> Signin</Button>
      </Box>
      </Paper>
        </Container>
      </Grid>  
    
    
    
    
  </Grid>   



  
    
   </div>

    
  );
}
