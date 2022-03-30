import React,{useState,useEffect} from 'react';
import {Table,Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Answermodal from './Answermodal'
import Groupforum from './Groupforum'

function createData(name, calories, fat) {
  return { name, calories, fat};
}



export default function BasicTable(props) {

  const [state,setstate]=useState(false)
  const [qu,setqu]=useState([])
function handle(){

  setstate(true)
}




  return (
  
        
         
        

<tbody>

<td className="tablecon">12</td>
<td className="tablecon">{<Groupforum />}</td>





</tbody>


    
  );
}