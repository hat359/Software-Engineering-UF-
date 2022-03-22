import React,{useState,useEffect} from 'react';

export default function Proftable(props){

return(


<tbody align='center'>

<td className="tablecon">{props.tFname}{" "}{props.tLname}</td>
<td className="tablecon">{props.classrating}</td>
<td className="tablecon">{props.overall}</td>






</tbody>



)

}