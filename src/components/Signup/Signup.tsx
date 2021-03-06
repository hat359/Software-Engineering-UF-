import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Nav from '../../Nav'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Snackbar,Alert} from '@mui/material'
import Bio from './Bio';
import Courses from './Courses';
import Username from './Username';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        InfoGator
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Bio', 'Username/Password'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Bio/>;
    
    case 1:
      return <Username/>;
    default:
      throw new Error('Wrong input');
  }
}

const theme = createTheme();

export default function Signup(props) {
  let navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const [open, setOpen] = React.useState(false);
  
  const handleClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };
  
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const userid = makeid(6)
    const username = useSelector(state=>state.Form.reguname)
    const password = useSelector(state=>state.Form.regpass)
    const fname = useSelector(state=>state.Form.regfname)
    const lname = useSelector(state=>state.Form.reglname)
    const email = useSelector(state=>state.Form.regemail)
    const address =useSelector(state=>state.Form.regaddress)
    const zip = useSelector(state=>state.Form.regzip)
    const contact = useSelector(state=>state.Form.regcontact)


  const handleClick = () => {
    setOpen(true);
    
    const variable={
      UserID:  userid, 
	Username :username,
  Password :password,
  FirstName : fname,
	LastName :lname,
	Address   : address,
	Email     : email,
	Zipcode   : zip,
	Contact   :contact

    }

    axios.post('http://localhost:8080/info-gator-api/users/add',variable).then(response=>{
      console.log('added')
    }).catch((err)=>{
      console.log(err)
    })

    setTimeout(() => {
      navigate('/signin')
    }, 2000);
   
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {<Nav/>}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Register
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <></>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button  onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                    
                  )}
                  <Button
                    variant="contained" id="nextbut"
                    onClick={activeStep ==steps.length-1 ? handleClick :handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Register' : 'Next'}
                  </Button>
                  
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                      Registered Successfully!
                    </Alert>
                  </Snackbar>
        
      </Container>
    </ThemeProvider>
  );
}