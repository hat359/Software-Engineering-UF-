import React ,{useEffect}from 'react';
import Nav from '../Nav'
import { Container, Paper,Box } from "@mui/material"

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Carousel from '../rep-components/carousel'
import wellsfargo from '../wellsfargo.png'
import Footer from "../rep-components/Footer"
import money from '../money.jpg'
import BankModal from '../rep-components/Bankmodal'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
  'Application Received',
  'Processing',
  'Processed',
];

export default function BankAccount() {


  return (
    <div>

      {<Nav />}
      <div className="fin">
        <img src={money}/>

        </div>
      <br/><br/>

      <Container  className="Bacc" maxWidth="lg">
        <Grid container id="contain" sx={{marginTop:"50vh"}}>

          <Grid sx={{marginTop:"10vh"}} item id="item" md={4} className="bank" >
            <img src={wellsfargo} />
          </Grid>

          <Grid sx={{marginTop:"10vh"}} item md={8}>
          <Typography sx={{ fontWeight: 600 }} variant="h4" align = "justify">Book your appointment at Wells Fargo</Typography>
          <br/>
          <Typography sx={{ fontWeight: 400 }} variant="h5" align = "justify">University of Florida and Wells Fargo have collaborated to provide banking facilities conveniently and feasibly to the students. Easily manage day-to-day financial needs on and off-campus with Wells Fargo account services. </Typography>
          <br/>
            <Typography sx={{ fontWeight: 400 }} variant="h5" align = "justify">Schedule an appointment at a time that works for you. Tell the banker about what's important to you. Get help with various banking services, credit & debit card queries, account deposits, transactions, loans. </Typography>
            <br/>
            <Typography sx={{ fontWeight: 400 }} variant="h5" align = "justify">Follow-up and track real-time progress of your appointment request on our website.  </Typography>

          </Grid>
        </Grid>
      <br/>
        
      <BankModal />

      <br/>
      </Container>
      <br/>
      <Container  className="Bacc" maxWidth="lg">
        
      <br/>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
      

      <br/>
      </Container>

      {<Footer/>}




    </div>
  );
}
