import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button class={props.test} sx={{color:'white', fontSize:'20px'}} onClick={handleClickOpen}>
        {props.text}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.text}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {props.text == 'Before you Travel' ?<Typography gutterBottom align = "justify">
          Before you leave for the United States, familiarize yourself with the different kinds of documents you might need. It is always a good idea to carry your original documents with you at all times. Do not put them in your checked baggage.

It is also a good idea to make at least two sets of copies of these documents: one copy to leave with your family before you depart and one copy to give to your school officials. Here is a list of the important immigration documents:
<ul>
<li>Passport</li>
<li>Visa</li>
<li>Form I-20</li> 
<li>Certificate of Eligibility for Nonimmigrant Student Status</li></ul>
          </Typography> : props.text == 'During Travel' ? <Typography gutterBottom align = "justify">
            As an international student, you'll want to make sure you've all the right documents required for immigration at the airport. Traveling through airport security and immigration can be stressful. If you remember to be patient, stay calm and not take anything personally in this final stage of your journey to the United States, you will be on your way to your exciting adventure studying at your new university.
          </Typography>: <Typography gutterBottom align = "justify">
          If you arrive by a land port, you will receive a paper Form I-94. If you arrive at the port of entry by air or sea, an automated Form I-94 record will automatically be generated for you by U.S. Customs and Border Protection (CBP) officers. CBP will provide you with an admission stamp on your passport that is annotated with date of admission, class of admission and admitted-until date. The electronic arrival/departure record can be obtained at www.cbp.gov/I94.
          </Typography> }
          
          
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}