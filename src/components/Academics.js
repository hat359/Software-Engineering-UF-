import React from 'react';
import Nav from '../Nav'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import Box from '@mui/material/Box';
import Footer from '../rep-components/Footer'



export default function Academics() {
  return (
    <div>
        {<Nav/>}
      <Typography component="div">
      <Box sx={{ textAlign: 'center', m: 1, fontSize: 32}}>Academics</Box>
      <Box sx={{ textAlign: 'center', m: 1, fontStyle: 'italic'}}>Appropriate information right at your disposal</Box>
    </Typography>
    <div style={{ padding: 200 }} >
    <Grid container spacing = {4}>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }} class="card">
      <CardContent align="center">
        <SchoolIcon sx={{ fontSize: 80,color:"white"}}/>
        <Typography gutterBottom variant="h5" component="div" color="common.white">
          Courses help
        </Typography>
        <Typography variant="body2" color="common.white">
        Get courses related help from your peers.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" variant="outlined">Know More</Button>
       
      </CardActions>
    </Card>
    </Grid>
     
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }} class="card">
      <CardContent align="center">
        <CastForEducationIcon sx={{ fontSize: 80,color:"white"}} />
        <Typography gutterBottom variant="h5" component="div" color="common.white">
          Course resources
        </Typography>
        <Typography variant="body2" color="common.white">
        Access all course related resources easily

        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small" variant="outlined">Know More</Button>
       
      </CardActions>
    </Card>
    </Grid>
   
    
    
  </Grid>
  </div>
  <Footer />
  </div>
  
  );
}
