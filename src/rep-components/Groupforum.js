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

  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
  const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:'"];
  const allNumbers = [..."0123456789"];
  
  const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];
  
  const generator = (base, len) => {
     return [...Array(len)]
       .map(i => base[Math.random()*base.length|0])
       .join('');
  };
  
  var ansid = generator(base,6)



  const handleClickOpen = () => {
    setOpen(true);
    axios.get(`http://localhost:8080/info-gator-api/travel/faq/answers/${props.id}`)
  .then(response=>{
    setanswer(response.data)
  })
  };
  const handleClose = () => {
    setOpen(false);
    setanswer([])
  };

  const handelans=(event)=>{
    setans(event.target.value)

  }
const handelsubmitanswer=()=>{
const variable={
  AnswerID:ansid,
  QuestionID:props.id,
  Answer:ans,
  AnswerByUserId:"Admin"
}

axios.post("http://localhost:8080/travel/faq/answer",variable)
.then(response=>{
  console.log(response.data)
})

}
  // useEffect(()=>{
  

  // })

 

  return (
    <div>
      <Button  variant="outlined" onClick={handleClickOpen}>
        Join 
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
        <BootstrapDialogTitle id="customized-dialog-title" sx={{color:"Red"}} onClose={handleClose}>
          {props.user}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant="h3" gutterBottom>
            {props.ques}
          </Typography>
          {answer.map(item=>(
              <div>
              <div className="answerbox">
                <Typography sx={{fontWeight:'700',m:1,color:"green"}}>
                  {item.AnswerByUserId}
                </Typography>
                <Typography sx={{m:1}}variant="h6">
                  {item.Answer}
                </Typography>
                
              </div>
              <br/>
              </div>

          ))}
          <br/><br/><br/>
          <Typography variant="h4">
            Post an Answer 
          </Typography>
          <TextField sx={{ marginTop: '50px', width: '55%', paddingBottom: '50px' }}
                id="outlined-multiline-static"
                label="Answer"
                multiline
                rows={4}
                defaultValue="-"
                value={ans}
                name={ans}
                onChange={handelans}
                className="anstext"

              />

              <Button variant="outlined" onClick={handelsubmitanswer}>Post </Button>
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}