import React from 'react'
import Nav from '../Nav'
import { Container, Paper,Box } from "@mui/material"

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Footer from "../rep-components/Footer"
import finaid from '../finaid.jpg'
import GraduateAid from '../GraduateAid.png'

export default function FinancialAid() {

  return (
    <div>

    {<Nav />}
    <div className="fin">
      <img src={finaid} />

      </div>
    <br/><br/>

    <Container  className="Bacc" maxWidth="lg">
      <Grid container sx={{marginTop:"50vh"}}>

      <Grid sx={{marginTop:"2vh"}} item md={4} className="bank" >
            <img src={GraduateAid} />
          </Grid>

        <Grid sx={{marginTop:"10vh"}} item md={8}>
          <Typography sx={{ fontWeight: 700 }} variant="h4">Finding Funding</Typography>
          <br/>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Grants</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Grants are considered gift aid without requiring repayments and are awarded to students showing the greatest financial need.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Scholarships</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Scholarships are considered gift aid, as they do not have to be repaid and do not require recipients to perform services.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Student Employment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Employment is considered self-help aid, as the student is offered aid in exchange for a service. The Student Employment Office assists enrolled students as they seek part-time employment through various job programs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Student Loans</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Loans are considered self-help aid as loans are a form of aid that must be repaid. There are a number of other loan programs available at UF.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Other Aid Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Many civic, corporate, and private organizations offers financial aid options for students. 
          </Typography>
        </AccordionDetails>
      </Accordion>

         <Typography sx={{ fontWeight: 500 }} variant="h5"></Typography>

        </Grid>
      </Grid>
    <br/>
      


    <br/>
    </Container>
    <br/>

    {<Footer/>}




    </div>
  );

}
