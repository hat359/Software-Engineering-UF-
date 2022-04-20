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
import {Typography,TextField,Divider} from '@mui/material';
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
  
  // const generator = (base, len) => {
  //    return [...Array(len)]
  //      .map(i => base[Math.random()*base.length|0])
  //      .join('');
  // };
  
  // var ansid = generator(base,6)



  const handleClickOpen = () => {
    setOpen(true);
    console.log(props.cid)
    axios.get(`http://localhost:8080/info-gator-api/academics/courses/chats/${props.cid}`)
  .then(response=>{
    setanswer(response.data)
  })
  };
  const handleClose = () => {
    setOpen(false);
    setanswer([])
  };

  const handelans=(event)=>{
    console.log(event.target.value)
    setans(event.target.value)

  }
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
const chatid = makeid(6)

const handelsubmitanswer=()=>{
const variable={
  CourseID:props.cid,
  UserID:window.localStorage.getItem('username'),
  ChatID:chatid,
  Message:ans
}

axios.post("http://localhost:8080/info-gator-api/academics/courses/chats",variable)
.then(response=>{
  console.log(response.data)
})

}
  // useEffect(()=>{
  

  // })

 

  return (
    <div>
      <Button  variant="outlined" onClick={handleClickOpen}>
        View Chat
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
          {props.course}
        </BootstrapDialogTitle>
        <DialogContent dividers>
      
          {answer.map(item=>(
              <div>
                 <div className="answerbox">
                <Typography sx={{fontWeight:'700',m:1,color:"green"}}>
                  {item.UserID}
                </Typography>
                <Typography sx={{m:1}}variant="h6">
                  {item.Message}
                </Typography>
                
              </div>
              <br/>
              </div>

          ))}
          <br/><br/><br/>
          <Divider/>
          <Typography sx={{marginTop:'5%'}}variant="h4">
            Post
          </Typography>
          <TextField sx={{ marginTop: '50px', width: '55%', paddingBottom: '50px' }}
                id="outlined-multiline-static"
                label="Chat"
                multiline
                rows={1}
                
                value={ans}
                
                onChange={handelans}
                className="anstext"

              />

              <Button id="postbut" variant="outlined" onClick={handelsubmitanswer}>Post </Button>
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}