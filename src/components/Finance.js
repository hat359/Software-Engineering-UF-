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
import { positions } from '@mui/system';
import { makeStyles } from '@mui/styles';


export default function Finance() {
  return (
    <div>
        {<Nav/>}
      <Typography component="div">
      <Box sx={{ textAlign: 'center', m: 1, fontSize: 32}}>Finances</Box>
      <Box sx={{ textAlign: 'center', m: 1, fontStyle: 'italic'}}>Appropriate information right at your disposal</Box>
    </Typography>
    <div style={{ padding: 200 }} >
    <Grid container spacing = {4}>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <AccountBalanceIcon sx={{ fontSize: 80 }} color="primary"/>
        <Typography gutterBottom variant="h5" component="div">
          Bank Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Open your bank account with a preferred bank.
        </Typography>
      </CardContent>
      <CardActions>
      <a href={'/BankAccount'}>
        <Button size="small" variant="outlined">Know More</Button>
      </a>
      </CardActions>
    </Card>
    </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <HealthAndSafetyIcon sx={{ fontSize: 80 }} color="primary"/>
        <Typography gutterBottom variant="h5" component="div">
          Health insurance
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Get yourself a suitable health insurance. Be fully covered and save money. 

        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small" variant="outlined">Know More</Button>
       
      </CardActions>
    </Card>
    </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CreditScoreIcon sx={{ fontSize: 80 }} color="primary"/>
        <Typography gutterBottom variant="h5" component="div">
          Financial Aid
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Studying shouldn’t be a financial burden. Find help to fund your education.
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
