


import React,{useState,useEffect} from 'react';
import {Table,Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Answermodal from './Answermodal'

function createData(name, calories, fat) {
  return { name, calories, fat};
}

// const rows = [
//   createData('What would be the cheapest flight from New Delhi to Orlando ?', 'John Doe', '2/12/2021'),
//   createData('How to travel from Orlando International airport to Gainesville ?', 'Elon Musk', '2/12/2021'),
//   createData('What documents to carry during travel???', 'Bezos to the moon', '2/12/2021'),
//   createData('Has anyone travelled with Etihad before??', 'Zukerberg ', '2/12/2021'),
//   createData('How much is the baggage allowance in Qatar Airways? ', 'Bill ','2/12/2021'),
// ];

export default function BasicTable(props) {

  const [state,setstate]=useState(false)
  const [qu,setqu]=useState([])
function handle(){

  setstate(true)
}

// useEffect(()=>{
// setqu(props.item)

// })


  return (
    <div>
   
    {/* <TableContainer sx={{marginTop:'100px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:600}}>Questions</TableCell>
            <TableCell sx={{fontWeight:600}} align="right">Author</TableCell>
           
            <TableCell sx={{fontWeight:600}} align="right">Date</TableCell>
            
          </TableRow>
        </TableHead> */}
        <TableBody>
         
            <TableRow >
              <TableCell component="th" scope="row">
                 {props.ques}
              </TableCell>
              <TableCell>{<Answermodal id={props.id} user={props.user} ques={props.ques}/>}</TableCell>
              <TableCell align="right">fghgh </TableCell>
              <TableCell align="right">fh</TableCell>
              
            </TableRow>
         
        </TableBody>
      {/* </Table>
    </TableContainer> */}
    </div>
  );
}