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
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import axios from 'axios'
import Bk from '../components/bankstep/BankApp'
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

  // const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
  // const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
  // const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:'"];
  // const allNumbers = [..."0123456789"];
  
  // const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];
  
  // const generator = (base, len) => {
  //    return [...Array(len)]
  //      .map(i => base[Math.random()*base.length|0])
  //      .join('');
  // };
  
  // var ansid = generator(base,6)



  const handleClickOpen = () => {
    setOpen(true);
  //   axios.get(`http://localhost:8080/travel/faq/answers/${props.id}`)
  // .then(response=>{
  //   setanswer(response.data)
  // })
  };
  const handleClose = () => {
    setOpen(false);
    setanswer([])
  };

//   const handelans=(event)=>{
//     setans(event.target.value)

//   }
// const handelsubmitanswer=()=>{
// const variable={
//   AnswerID:ansid,
//   QuestionID:props.id,
//   Answer:ans,
//   AnswerByUserId:"Admin"
// }

// axios.post("http://localhost:8080/travel/faq/answer",variable)
// .then(response=>{
//   console.log(response.data)
// })

// }
//   // useEffect(()=>{
  

//   // })

 

  return (
    <div align = "center" >
      <Button  variant="contained" endIcon={<AssignmentTurnedInIcon />} onClick={handleClickOpen}>
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
        
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {<Bk/>}
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}