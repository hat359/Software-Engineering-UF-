import React from 'react'
import Nav from '../Nav'
import { Container, Paper,Box } from "@mui/material"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Footer from "../rep-components/Footer"
import finaid from '../finaid.jpg'
import GraduateAid from '../GraduateAid.png'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));


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

      <Grid sx={{marginTop:"3vh"}} item md={4} className="bank" >
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
          <Typography sx={{ fontWeight: 400 }} variant="h6">Grants</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align = "justify">
          Grants are considered gift aid without requiring repayments and are awarded to students showing the greatest financial need.
          There are various kinds of grants including UF Graduate Grant, Excellence Grants, Completion Grants, and various other grants based on student's financial requirements. 
          <br/>
          Directly contact your financial aid advisor to tell them about your specific financial need and apply for a suitable grant.
          
          </Typography>
          <div style={{ paddingTop: 50, paddingRight: 300, paddingLeft: 300}}>
    <a href = "https://www.sfa.ufl.edu/contact-sfa/">
    <LightTooltip title="External link">
      <Button variant="contained" endIcon={<AssuredWorkloadIcon />}>
        Contact 
      </Button>
      </LightTooltip>
    </a>
    </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: 400 }} variant="h6">Scholarships</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align = "justify">
          Scholarships are considered gift aid, as they do not have to be repaid and do not require recipients to perform services. 
          There are various scholarship programs especially catered towards international students including UFIC scholarships, departmental scholarships, and many more. 
          <br/>
          Access the UF scholarship search engine and quickly apply to scholarship program which best fulfills your study financial needs. 
           
          </Typography>
          <div style={{ paddingTop: 50, paddingRight: 300, paddingLeft: 300}}>
    <a href = "https://www.sfa.ufl.edu/search/">
    <LightTooltip title="External link">
      <Button variant="contained" endIcon={<AssuredWorkloadIcon />}>
        Search
      </Button>
      </LightTooltip>
    </a>
    </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: 400 }} variant="h6">Student Employment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align = "justify">
          Employment is considered self-help aid, as the student is offered aid in exchange for a service. The Student Employment Office assists enrolled students as they seek part-time as well as full-time employment through various programs.
          International students can be eligible for assistantships, on-campus as well as off-campus employment with appropriate work authorisation. 
          <br/>
          Get more details from official resources and sign up for student employment.
          </Typography>
          <div style={{ paddingTop: 50, paddingRight: 280, paddingLeft: 280}}>
    <a href = "https://internationalcenter.ufl.edu/f-1-student/f-1-status-requirements/employment">
    <LightTooltip title="External link">
      <Button variant="contained" endIcon={<AssuredWorkloadIcon />}>
        Get a job
      </Button>
      </LightTooltip>
    </a>
    </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: 400 }} variant="h6">Student Loans</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align = "justify">
          Loans are considered self-help aid as loans are a form of aid that must be repaid. There are a number of other loan programs available at UF. 
          They help to meet temporary and emergency financial expenses. It is important to understand the conditions and repayment terms before deciding on a student loan program. 
          <br/>
          Access the comprehensive detailed resource for better understanding loan as a financial aid option. 
          </Typography>
          <div style={{ paddingTop: 50, paddingRight: 250, paddingLeft: 280}}>
    <a href = "https://www.sfa.ufl.edu/types-of-aid/loans/">
    <LightTooltip title="External link">
      <Button variant="contained" endIcon={<AssuredWorkloadIcon />}>
        Learn More
      </Button>
      </LightTooltip>
    </a>
    </div>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: 400 }} variant="h6">Other Aid Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align = "justify">
          Many civic, corporate, and private organizations offers financial aid options for students. 
          The University of Florida (UF) provides free access to this service, which searches a database of scholarships, fellowships, grants, and loans.
          Quick and efficient search works for students from all disciplines to find funding opportunities the right way.
          <br/>
          Successful education funding is just a click away.
          
          </Typography>
          <div style={{ paddingTop: 50, paddingRight: 300, paddingLeft: 300}}>
    <a href = "https://www.fastweb.com">
    <LightTooltip title="External link">
      <Button variant="contained" endIcon={<AssuredWorkloadIcon />}>
        Find
      </Button>
      </LightTooltip>
    </a>
    </div>
        </AccordionDetails>
      </Accordion>

         <Typography sx={{ fontWeight: 500 }} variant="h6"></Typography>

        

        </Grid>
        <Divider></Divider>
      </Grid>
    <br/>
      


    <br/>
    </Container>
    <br/>

    {<Footer/>}




    </div>
  );

}
