import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Typography,TextField} from '@mui/material';
import axios from 'axios'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal(props) {
  const [open, setOpen] = React.useState(false);
  const [answer,setanswer]=useState([])
  const [ans,setans]=useState("")

//   const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
//   const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
//   const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:'"];
//   const allNumbers = [..."0123456789"];
  
  



  

 

  return (
    <div>
      <Button  variant="outlined" onClick={handleClickOpen}>
        Book an Appointment
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        fullWidth="true"
        id="answer"

        scroll="paper"
        
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Book an appointment
        </BootstrapDialogTitle>
        <DialogContent dividers>
            
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}