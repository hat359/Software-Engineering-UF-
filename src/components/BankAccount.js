import React from 'react';
import Nav from '../Nav'
import { Container, Paper } from "@mui/material"

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Carousel from '../rep-components/carousel'
import wellsfargo from '../wellsfargo.png'
import Footer from "../rep-components/Footer"
import money from '../money.jpg'
import BankModal from '../rep-components/Bankmodal'


export default function BankAccount() {


  return (
    <div>

      {<Nav />}
      <div className="fin">
        <img src={money}/>

        </div>
      <br/><br/>

      <Container  className="Bacc" maxWidth="lg">
        <Grid container sx={{marginTop:"50vh"}}>

          <Grid sx={{marginTop:"10vh"}} item md={4} className="bank" >
            <img src={wellsfargo} />
          </Grid>

          <Grid sx={{marginTop:"10vh"}} item md={8}>
            <Typography sx={{ fontWeight: 700 }} variant="h3">Book Your Appointment at Wells Fargo</Typography>
            <br/>
            <Typography sx={{ fontWeight: 500 }} variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </Typography>

          </Grid>
        </Grid>
      <br/>
        
      <BankModal/>

      <br/>
      </Container>

      {<Footer/>}




    </div>
  );
}
