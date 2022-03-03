import React from 'react'
import { TextField, Grid } from '@mui/material'

export default function Courses(){

return(
<div>
    <Grid container spacing={2}>
    <Grid item xs={12}>
<TextField fullWidth className="Course1" id="outlined-basic" label="Course 1" variant="outlined" />
</Grid>
</Grid>
<br/>
<Grid container spacing={2}>
    <Grid item xs={12}>
<TextField className="Course2" fullWidth id="outlined-basic" label="Course 2" variant="outlined" />
</Grid>
</Grid>
<br/>
<Grid container spacing={2}>
    <Grid item xs={12}>
<TextField className="Course3" fullWidth id="outlined-basic" label="Course 3" variant="outlined" />
</Grid>
</Grid>



</div>

)


}