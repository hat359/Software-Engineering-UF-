import React from 'react'
import {Box,Grid,Divider} from '@mui/material'
import gator from '../gator.png'

export default function Footer(props){

return(
<Box align="center"
      sx={{
        width: 0.99,
        height: 200,
        backgroundColor:'black',   
        marginTop:'30vh',
        zIndex:-1,
        borderRadius:'15px',
        marginLeft:'0.5vw'
        
      }}
       


    >
      <Grid  class="footer-img"container>
        <Grid align="center"  item xs={12}><Box sx={{fontWeight:'Bold',fontSize: 'h4.fontSize',color:'common.white',marginTop:"20px"}}><img src={gator}/>InfoGator</Box></Grid>
        <Grid align="center"  item xs={12}><Box sx={{fontSize: '20px',color:'common.white'}}><i class="fab fa-facebook-f"></i> <i class="fab fa-instagram"></i> <i class="fab fa-youtube"></i></Box></Grid>
        <Grid align="center" item xs={12}><Divider sx={{width:'150px',color:'blue'}} /></Grid><br/><br/>
        <Grid align="center"  item xs={12}><Box sx={{fontSize: '15px',color:'common.white'}}>© Copyright 2021, InfoGator. All Rights Reserved.</Box></Grid>

        
      </Grid>
    </Box>



)






}