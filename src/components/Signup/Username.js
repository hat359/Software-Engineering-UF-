import React from 'react'
import { TextField, Grid } from '@mui/material'
import {reguname,regpass} from '../../redux/actions/Bank'
import {useDispatch,useSelector} from 'react-redux'


export default function Username(){
    const dispatch=useDispatch()
return(
<div>
    <Grid container spacing={2}>
    <Grid item xs={12}>
<TextField className="username" fullWidth id="outlined-basic" label="Username*" variant="outlined" onChange={(event)=>dispatch(reguname(event.target.value))}/>
</Grid>
</Grid>
<br/>
<Grid container spacing={2}>
    <Grid item xs={12}>
<TextField className="pass" fullWidth id="outlined-basic" label="Password*" variant="outlined" onChange={(event)=>dispatch(regpass(event.target.value))} />
</Grid>
</Grid>



</div>

)


}