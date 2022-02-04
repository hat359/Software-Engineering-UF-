import React from 'react'
import Nav from '../Nav'
import vid from '../video-uf.mp4'
import {Button,Grid,Container,Typography,Box,Divider,Link} from '@mui/material'

export default function Landing(){
return(
<div>
{<Nav/>}

<video autoPlay loop muted id="video">
<source src={vid}></source>


</video>
<Container maxWidth="lg">
<div class="landing">
    <Typography variant="h2" color="common.white">A one stop solution for International students </Typography><br/>
<a href="/signup"><Button variant="contained" disableElevation>Get Started</Button></a>

</div>



</Container>
<Box
      sx={{
        width: 1,
        height: 50,
        backgroundColor:'#bbdefb',   
        marginTop:'30vh',
        zIndex:-1
        
      }}
       

    />

 <Container maxWidth="lg">
     <br/>
  <Grid container  >
      <Grid item xs={6}>
      <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h3.fontSize' }}>Finance </Box>
       <Typography variant="body1" >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>


      </Grid>
      <Grid item xs={6}>
       
      
      <i class="fas fa-piggy-bank fa-9x licon"></i>

      </Grid>

  </Grid>
  
  
  <br/><br/><br/><br/><br/><br/><Divider /><br/>
  <Grid container >
      <Grid item xs={6}>
       
      
      <i class="fas fa-plane-departure fa-9x licon"></i>

      </Grid>
      <Grid item xs={6}>
      <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h3.fontSize' }}>Travel</Box>
       <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>


      </Grid>

  </Grid>
  <br/><br/><br/><br/><br/><br/><Divider/><br/>

  <Grid container >
      <Grid item xs={6}>
      <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h3.fontSize' }}>Academics</Box>
       <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>


      </Grid>
      <Grid item xs={6}>
      
      <i class="fas fa-graduation-cap fa-9x licon"></i>

      </Grid>

  </Grid>
 </Container>
 <Box
      sx={{
        width: 1,
        height: 200,
        backgroundColor:'#bbdefb',   
        marginTop:'30vh',
        zIndex:-1
        
      }}
       

    />


        
    

</div>

)



}