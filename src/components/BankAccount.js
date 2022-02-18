import React from 'react';
import Nav from '../Nav'
import {Container} from "@mui/material"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Carousel from '../rep-components/carousel'
import wellsfargo from '../wellsfargo.png'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    {<Nav/>}
    {<Carousel/>}
    <Container maxWidth="lg">
       <Grid container>
         
           <Grid item xs={6} class="bank">
              <img src={wellsfargo}/>
           </Grid>
           <Grid item xs={4}>
              fuf
           </Grid>
        </Grid>
       
      
      </Container>


    </div>
  );
}
