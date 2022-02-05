
import Nav from './Nav'
import Logo from './Logo.tsx'
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';

import {Grid,Card,Container} from '@mui/material'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Main(){

   
          return(
        
      

              <div >
             {<Nav/>}
             <div class="logo">
             {<Logo/>}</div>
                <Container maxWidth="lg">
                <Grid container spacing={3}>
  <Grid item xs={4} >



    <a href="/travel">
    <Card sx={{ maxWidth: 345 }} class="card">
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
  <Card sx={{ maxWidth: 345 }} class="card">
      <CardActionArea> 
      <i class="fas fa-home fa-5x "></i>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Housing
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  

  </Grid>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 }} class="card">
      <CardActionArea> 
      <i class="fas fa-user-friends fa-5x"></i>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Connect
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
    
  </Grid>
  
</Grid>
<br/>






                </Container>



              </div>

           


)



}

export default Main
