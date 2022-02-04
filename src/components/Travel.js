import React, {useState} from 'react'
import Nav from '../Nav'
import {Grid,Card,Container} from '@mui/material'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Table from '../rep-components/Table'
import Modal from '../rep-components/Modal'
import plane from '../paperplane.png'
function Travel(){
  const [tf, settf] = useState(false);
const handleclick=()=>{



}

return(
<div>
 {<Nav/>}
 
 <Container maxWidth="lg">
   
 <Grid container spacing={2} sx={{marginTop:10}}>
  <Grid item xs={4}>




    <Card align="center" sx={{ maxWidth: 345 }} class="card" onClick={handleclick}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="common.white">
            <Modal text="Before you Travel"/>
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  

    
  </Grid>
  <Grid item xs={4}>
  <Card align="center" sx={{ maxWidth: 345 }} class="card">
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="common.white">
          <Modal text="During Travel"/>
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

  </Grid>
  <Grid item xs={4}>
  <Card align="center" sx={{ maxWidth: 345 }} class="card">
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="common.white">
          <Modal text="After you Land"/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  </Grid>
  
</Grid>

<Table/>
<Modal/>
</Container>


</div>




)







}

export default Travel