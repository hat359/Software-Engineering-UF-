import React from 'react'
import { TextField, Grid } from '@mui/material'

export default function Bio(){

return(
<div>
    <Grid container spacing={2}>
    <Grid item xs={6}>
<TextField id="outlined-basic" label="First Name *" variant="outlined" />
</Grid>
<Grid item xs={6}> 
<TextField id="outlined-basic" label="Last Name *" variant="outlined" />
</Grid>

</Grid>
<br/>
    <Grid container spacing={2}>
        <Grid item xs={12}> 
            <TextField sx={{width:'482px'}} id="outlined-basic" label="Email *" variant="outlined" />
        </Grid>
    </Grid>
    <br/>
    <Grid container spacing={2}>
        <Grid item xs={12}> 
            <TextField sx={{width:'482px'}} id="outlined-basic" label="Address" variant="outlined" />
        </Grid>
    </Grid>
    <br/>
    <Grid container spacing={2}>
    <Grid item xs={6}>
<TextField id="outlined-basic" label="Zip code" variant="outlined" />
</Grid>
<Grid item xs={6}> 
<TextField id="outlined-basic" label="Contact" variant="outlined" />
</Grid>

</Grid>
</div>

)


}