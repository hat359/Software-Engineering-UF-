import React from 'react'
import Nav from '../Nav'
import { Container, Paper,Box } from "@mui/material"
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Footer from "../rep-components/Footer"
import Insurance from '../Insurance.png'
import healthins from '../healthins.png'
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function HealthInsurance() {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

    {<Nav />}
    <div className="fin">
      <img src={Insurance} />

      </div>
    <br/><br/>

    <Container  className="Bacc" maxWidth="lg">
      <Grid container sx={{marginTop:"50vh"}}>

      <Grid sx={{marginTop:"2vh"}} item md={4} className="bank" >
            <img src={healthins} />
          </Grid>

        <Grid sx={{marginTop:"10vh"}} item md={8}>
          <Typography sx={{ fontWeight: 700 }} variant="h4">Determining the right health insurance</Typography>
          <br/>
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="GatorGradCare" {...a11yProps(0)} />
          <Tab label="University Insurance" {...a11yProps(1)} />
          <Tab label="Private Insurance" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Typography sx={{ fontWeight: 400 }} variant="h6" align = "justify"> University of Florida graduate students on appointment as a Graduate Assistant, Teaching Assistant, or Research Assistant may choose to participate in the GatorGradCare health plan, an injury and sickness insurance plan. Some of the highlghts of this insurance program include free therapy sessions, wellness incentives, emergency and urgent care. </Typography>
      <Typography sx={{ fontWeight: 400 }} variant="h6" align  = "justify"> Access the following detailed resource to learn more about the insurance program, plan your documents and contact the insurance representative. </Typography>
    <div style={{ paddingTop: 50, paddingRight: 250, paddingLeft: 250}}>
    <a href = "https://gatorcare.org/gatorgradcare/">
      <Button variant="contained" endIcon={<LocalHospitalIcon />}>
        Learn More
      </Button>
    </a>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography sx={{ fontWeight: 400 }} variant="h6" align = "justify"> University provides 2 enrollment options, United Healthcare Student resources and Scarborough insurance. Enrollment in the UF insurance plan is necessary within 31 days of losing your other coverage. </Typography>
      <Typography sx={{ fontWeight: 400 }} variant="h6" align  = "justify"> Access the following official detailed resource to learn more about these insurance programs and directly contact the insurance representatives to clear your doubts and queries. </Typography>
    <div style={{ paddingTop: 50, paddingRight: 250, paddingLeft: 250}}>
    <a href = "https://shcc.ufl.edu/fees-and-insurance/health-insurance-options/uf-insurance-plan/">
      <Button variant="contained" endIcon={<LocalHospitalIcon />}>
        Learn More
      </Button>
    </a>
    </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      
      <Typography sx={{ fontWeight: 400 }} variant="h6" align = "justify"> Students can enroll in insurance plans from other private organisations, meeting the compliance requirements provided by the university. Clearly understand university's compliance requirements and steps of completing the insurance waiver while providing proof of comparable coverage. </Typography>
      <Typography sx={{ fontWeight: 400 }} variant="h6" align  = "justify"> Access the following resource to learn more about compliance details, insurance waiver requests and directly contact the compliance office representatives to seek help. </Typography>
    <div style={{ paddingTop: 50, paddingRight: 250, paddingLeft: 250}}>
    <a href = "https://healthcompliance.shcc.ufl.edu/health-insurance-requirement/waiver/">
      <Button variant="contained" endIcon={<LocalHospitalIcon />}>
        Learn More
      </Button>
    </a>
    </div>

      </TabPanel>
    </Box>
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
