import React from 'react';
import Nav from '../Nav'
import { Container, Paper } from "@mui/material"

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Carousel from '../rep-components/carousel'
import wellsfargo from '../wellsfargo.png'
import Footer from "../rep-components/Footer"
export default function BankAccount() {


  return (
    <div>

      {<Nav />}
      {<Carousel />}
      <br/><br/>

      <Container maxWidth="lg">
        <Grid container>

          <Grid item md={6} className="bank" >
            <img src={wellsfargo} />
          </Grid>

          <Grid item md={6}>
            <Typography sx={{ fontWeight: 700 }} variant="h3">Book Your Appointment at Wells Fargo</Typography>
          </Grid>
        </Grid>
      <br/><br/><br/><br/>
        


      </Container>

      {<Footer/>}




    </div>
  );
}
