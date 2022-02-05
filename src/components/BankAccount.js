import React from 'react';
import Nav from '../Nav'
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
    <div style={{ padding: 100 }}>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <ContactSupportIcon sx={{ fontSize: 80 }} color="primary"/>
      <Typography variant="body2" color="text.secondary">
      Get connected to the bank
      </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" onClick={handleClickOpen}>
        Contact
      </Button>
      </CardActions>
      </Card>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your contact details so that we can connect you with the bank.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      
    </div>
    </div>
  );
}
