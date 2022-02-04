import * as React from 'react';

import {Box,Container,Grid,Typography,TextField,Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import image from '../tower.jpg'


export default function Signin() {
  return (
   <div>
  
  <Grid container>
    <Grid item xs={6}>
    <img class="signin-img" src={image}/>
      </Grid> 

      <Grid class="abc" item xs={6}>
        <Container maxWidth="sm">
      <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}} style={{
        marginTop:150
  }}>
      <Box sx={{  m: 1,fontSize: 'h3.fontSize' }} >Signin
      <br/><br/>
      <TextField sx={{width:'482px'}} id="outlined-basic" label="Email *" variant="outlined" />
      <TextField sx={{width:'482px'}} id="outlined-basic" label="Password*" variant="outlined" />
      <a href="/"><Button variant="contained"> Signin</Button></a>
      </Box>
      </Paper>
        </Container>
      </Grid>  
    
    
    
    
  </Grid>   



  
    
   </div>

    
  );
}
