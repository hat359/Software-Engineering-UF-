import React,{useEffect} from 'react'
import Nav from './Nav'
import Logo from './Logo.tsx'
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import Footer from './rep-components/Footer'
import { Grid, Card, Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Answermodal from './rep-components/Answermodal';


function Main() {
  const navigate=useNavigate()

useEffect(()=>{
if(window.localStorage.getItem('username')){
console.log('loggedin')

}else{
  navigate('/landing')
}

})



  return (

    
    
    <div >
     
     {<Nav/>}
     
      <div class="logo">
        {<Logo />}</div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={4} >



            <a href="/travel">
              <Card align="center" sx={{ maxWidth: 345 }} class="card">
                <CardActionArea>
                  <i class="fas fa-plane fa-5x"></i>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Travel
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>


          </Grid>
          <Grid item xs={4}>
            <a href="/academics"><Card align="center" sx={{ maxWidth: 345 }} class="card">
              <CardActionArea>
                <i class="fas fa-university fa-5x"></i>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    Academics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </a>

          </Grid>
          <Grid item xs={4}>
            <a href="/finance">
              <Card align="center" sx={{ maxWidth: 345 }} class="card">
                <CardActionArea>
                  <i class="fas fa-money-check-edit-alt fa-5x"></i>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      Finance
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>

          </Grid>

        </Grid>
        <br />






      </Container>
      {<Footer />}


  

</div>


  )



}

export default Main
