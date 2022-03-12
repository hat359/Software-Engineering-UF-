import React from 'react'
import { TextField, Grid } from '@mui/material'

export default function Bio(){

return(
<div>
    <Grid container spacing={2}>
    <Grid item xs={6}>
<TextField id="outlined-basic" className="fname" label="First Name *" variant="outlined" />
</Grid>
<Grid item xs={6}> 
<TextField id="outlined-basic" className="lname" label="Last Name *" variant="outlined" />
</Grid>

</Grid>
<br/>
    <Grid container spacing={2}>
        <Grid item xs={12}> 
            <TextField sx={{width:'482px'}} className="email" id="outlined-basic" label="Email *" variant="outlined" />
        </Grid>
    </Grid>
    <br/>
    <Grid container spacing={2}>
        <Grid item xs={12}> 
            <TextField sx={{width:'482px'}} className="address" id="outlined-basic" label="Address" variant="outlined" />
        </Grid>
    </Grid>
    <br/>
    <Grid container spacing={2}>
    <Grid item xs={6}>
<TextField id="outlined-basic" className="fname" label="Passport Number" variant="outlined" />
</Grid>
<Grid item xs={6}> 
<TextField id="outlined-basic" className="lname" label="UFID" variant="outlined" />
</Grid>

</Grid>
<br/>
    <Grid container spacing={2}>
    <Grid item xs={6}>
<TextField id="outlined-basic" className="zip" label="Zip code" variant="outlined" />
</Grid>
<Grid item xs={6}> 
<TextField id="outlined-basic" className="contact" label="Contact" variant="outlined" />
</Grid>

</Grid>

</div>

)


}