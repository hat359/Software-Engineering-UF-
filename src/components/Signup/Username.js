import React from 'react'
import { TextField, Grid } from '@mui/material'

export default function Username(){

return(
<div>
    <Grid container spacing={2}>
    <Grid item xs={12}>
<TextField fullWidth id="outlined-basic" label="Username*" variant="outlined" />
</Grid>
</Grid>
<br/>
<Grid container spacing={2}>
    <Grid item xs={12}>
<TextField fullWidth id="outlined-basic" label="Password*" variant="outlined" />
</Grid>
</Grid>



</div>

)


}