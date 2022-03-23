import React,{useState,useEffect} from 'react';
import Rating from '@mui/material/Rating';
export default function Proftable(props){

return(


<tbody align='center'>

<td className="tablecon">{props.tFname}{" "}{props.tLname}</td>
<td className="tablecon">{props.classrating}</td>
<td className="tablecon"><Rating name="read-only" value={props.overall} precision={0.2} readOnly /></td>






</tbody>



)

}