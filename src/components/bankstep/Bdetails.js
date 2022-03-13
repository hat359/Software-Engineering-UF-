import React from 'react'
import { TextField, Grid } from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import {chfname,chlname} from '../../redux/actions/Bank'

export default function Bio(){
    const dispatch=useDispatch()

return(
<div>
    <Grid container spacing={2}>
    <Grid item xs={6}>
<TextField id="outlined-basic" className="fname" label="First Name *" variant="outlined" onChange={(event)=>dispatch(chfname(event.target.value))} />
</Grid>
<Grid item xs={6}> 
<TextField id="outlined-basic" className="lname" label="Last Name *" variant="outlined" onChange={(event)=>dispatch(chlname(event.target.value))} />
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