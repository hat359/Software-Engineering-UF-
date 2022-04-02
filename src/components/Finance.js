import React from 'react';
import Nav from '../Nav'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Box from '@mui/material/Box';
import Footer from '../rep-components/Footer'
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[700],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));


export default function Finance() {
  return (
    <div>
        {<Nav/>}
       
      <Typography component="div">
      <Box sx={{ textAlign: 'center', m: 1, fontSize: 42, color:"white"}}>Finances</Box>
      <Box sx={{ textAlign: 'center', m: 1, fontStyle: 'italic', color:"white"}}>Appropriate information right at your disposal</Box>
    </Typography>
    <div style={{ padding: 80 }} >
    <Grid container spacing = {4}>
      <Grid item xs={12} sm={6} md={4}>
      <Card class="card" sx={{ maxWidth: 345 }}>
      <CardContent align="center">
        <AccountBalanceIcon sx={{ fontSize: 80,color:"white" }}/>
        <Typography gutterBottom variant="h5" component="div" color="common.white">
          Bank Account
        </Typography>
        <Typography variant="body2" color="common.white" >
        Open your bank account with a preferred bank conveniently.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
      <a href={'/BankAccount'}>
        <ColorButton size="small" variant="contained" >Know More</ColorButton>
      </a>
      </CardActions>
    </Card>
    </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }} class="card">
      <CardContent align="center">
        <HealthAndSafetyIcon sx={{ fontSize: 80,color:"white"}} />
        <Typography gutterBottom variant="h5" component="div" color="common.white">
          Health Insurance
        </Typography>
        <Typography variant="body2" color="common.white">
        Get yourself a suitable health insurance. Be fully covered and save money. 

        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
      <a href={'/HealthInsurance'}>
        <ColorButton size="small" variant="contained">Know More</ColorButton>
       </a>
      </CardActions>
    </Card>
    </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }} class="card">
      <CardContent align="center">
        <CreditScoreIcon sx={{ fontSize: 80, color: "white" }}/>
        <Typography gutterBottom variant="h5" component="div" color="common.white">
          Financial Aid
        </Typography>
        <Typography variant="body2" color="common.white">
        Studying shouldn’t be a financial burden. Find help to fund your education.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
      <a href={'/FinancialAid'}>
        <ColorButton size="small" variant="contained">Know More</ColorButton>
       </a>
      </CardActions>
    </Card>
    </Grid>
   
    
    
  </Grid>
  </div>
  <Footer />
  </div>
  
  );
}
