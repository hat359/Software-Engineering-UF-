import React from 'react';
import Nav from '../Nav'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Box from '@mui/material/Box';



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
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <SchoolIcon sx={{ fontSize: 80 }} color="primary"/>
        <Typography gutterBottom variant="h5" component="div">
          Courses help
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Get courses related help from your peers.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" variant="outlined">Know More</Button>
       
      </CardActions>
    </Card>
    </Grid>
     
   
    
    
  </Grid>
  </div>
  </div>
  
  );
}
