import React , {useState,useEffect}from 'react'
import Nav from '../Nav'
import vid from '../video-uf.mp4'
import { Button, Grid, Container, Typography, Box, Divider, Link } from '@mui/material'
import Footer from '../rep-components/Footer'
import axios from 'axios'


export default function Landing() {
  const [category,setcategory]=useState([])
  
  // useEffect(()=>{
  //   axios.get("http://localhost:8080/category").then(response=>{
      
  //    console.log(response.data)


  //   })


  // })
  
  return (
    <div>
      {<Nav />}

      <video autoPlay loop muted id="video">
        <source src={vid}></source>


      </video>
      <Container maxWidth="lg" id="container">
        <div class="landing">
          <Typography variant="h2" color="common.white">A one stop solution for International students </Typography><br />
          <a href="/signup"><Button variant="contained" disableElevation>Get Started</Button></a>

        </div>



      </Container>
      <Box
        sx={{
          width: 1,
          height: 50,
          backgroundColor: '#bbdefb',
          marginTop: '30vh',
          zIndex: -1

        }}


      />

      <Container className="lan" maxWidth="lg">
        <br />
        <Grid container  >
          <Grid item md={6}>
            <Box sx={{ fontWeight: 'bold', marginTop: 5, fontSize: 'h3.fontSize',paddingLeft:'5vw' }}>Finance </Box>
            <Typography  sx={{paddingLeft:'5vw'}}variant="body1" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>


          </Grid>
          <Grid align="center" item md={6}>


            <i class="fas fa-piggy-bank fa-9x licon"></i>

          </Grid>

        </Grid>


        <br /><br /><br /><br /><Divider /><br />
        <Grid container >
          <Grid align="center" item xs={6}>


            <i class="fas fa-plane-departure fa-9x licon"></i>

          </Grid>
          <Grid item xs={6}>
            <Box sx={{ fontWeight: 'bold', marginTop: 5, fontSize: 'h3.fontSize',paddingLeft:'4vw' }}>Travel</Box>
            <Typography sx={{paddingRight:'3vw',paddingLeft:'4vw'}}variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>


          </Grid>

        </Grid>
        <br /><br /><br /><br /><Divider /><br />

        <Grid container >
          <Grid item md={6}>
            <Box sx={{ fontWeight: 'bold', marginTop: 5, fontSize: 'h3.fontSize',paddingLeft:'5vw' }}>Academics</Box>
            <Typography sx={{ paddingLeft:'5vw' }} variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>


          </Grid>
          <Grid align="center" item md={6}>

            <i class="fas fa-graduation-cap fa-9x licon"></i>

          </Grid>

        </Grid>
        <br/><br/><br/><br/>
      </Container>
      <Footer />





    </div>

  )



}