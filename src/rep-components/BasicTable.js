


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
  
        
         
        

<tbody >

<td className="tablecon" style={{marginLeft:'50px'}}>{props.ques}</td>
<td align="center"  className="tablecon">{<Answermodal id={props.id} user={props.user} ques={props.ques}/>}</td>
<td align="center" >{props.user}</td>




</tbody>


    
  );
}