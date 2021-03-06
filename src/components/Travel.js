import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import { Grid, Card, Container, Paper, TextField, Button, Box,Table} from '@mui/material'
import Footer from '../rep-components/Footer'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BasicTable from '../rep-components/BasicTable'
import Modal from '../rep-components/Modal'
import axios from 'axios'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import travel from '../travel.jpg'


import SendIcon from '@mui/icons-material/Send';
function Travel() {
  const [tf, settf] = useState(false);
  const [ques,setques]=useState("")
  const [desc,setdesc]=useState("")
  const [loadquestions,setquestions]=useState([])
  
  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
  const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:'"];
  const allNumbers = [..."0123456789"];
  
  const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];
  
  const generator = (base, len) => {
     return [...Array(len)]
       .map(i => base[Math.random()*base.length|0])
       .join('');
  };
  
  var quesid = generator(base,10)


  const variable={
    ID:quesid,
  Question:ques,
  PostedByUserId:window.localStorage.getItem('username')

  }

  const handleclick = () => {

 }
  const handeldesc=(event)=>{
    setdesc(event.target.value)

  }
  

  const handelques=(event)=>{
    setques(event.target.value)
  }

  const handelpost=()=>{
    axios.post("http://localhost:8080/info-gator-api/travel/faq/question",variable)
    .then(response=>{
      console.log(response.data)
      
    }).catch(err=>{


   
      
      })

  }

  useEffect(() => {
    axios.get("http://localhost:8080/info-gator-api/travel/faq").then(
      response => {
        setquestions(response.data)
        
      },[ques,desc]
    )


  })
  return (
    <div >
      {<Nav />}
      <div className="travel">
      <img src={travel}/>
      </div>
      <Container className="Travel" maxWidth="lg">

        <Grid container spacing={2} sx={{ marginTop: "50vh"}}>
          <Grid item xs={4}>




            <Card align="center" sx={{ maxWidth: 345 }} class="tcard" onClick={handleclick}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="common.white">
                    <Modal  text="Before you Travel" />
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>



          </Grid>
          <Grid item xs={4}>
            <Card align="center" sx={{ maxWidth: 345 }} class="tcard">
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="common.white">
                    <Modal text="During Travel" />
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>

          </Grid>
          <Grid item xs={4}>
            <Card align="center" sx={{ maxWidth: 345 }} class="tcard">
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="common.white">
                    <Modal text="After you Land" />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </Grid>

        </Grid>
        
      {/* <Table sx={{ minWidth: 650,marginTop:'10vh' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:600}}>Questions</TableCell>
            <TableCell sx={{fontWeight:600}} align="right">View Answer</TableCell>
           
            <TableCell sx={{fontWeight:600}} align="right">User</TableCell>
            
          </TableRow>
        </TableHead> */}
        <Container>
        <table class="table table-bordered ">
  <thead>
    <tr>
       
       <th className="text-center" scope="col">Question</th>
      <th className="text-center" scope="col">View Answer</th>
      <th className="text-center" scope="col">User</th>
    </tr>
  </thead>
          
            { loadquestions.map(item=>(
              
              
            <BasicTable  id={item.ID} ques={item.Question} user={item.PostedByUserId}/>
            
            
          ))}
          
          </table>
          {/* </table> */}
          

          </Container>
        <Box sx={{ paddingTop: '50px', fontWeight: 'bold', m: 1, fontSize: 'h4.fontSize' }}>Ask a Question</Box>
        <Paper align="center" sx={{ marginTop: '50px' }} variant="outlined">
          <TextField sx={{ marginLeft: '50px', marginTop: '50px', width: '75%' }} name="ques" value={ques} onChange={handelques} id="outlined-basic" label="Question" variant="outlined" />
          <br />
          <Grid container>
            <Grid item xs={8}>
              <TextField sx={{ marginTop: '50px', width: '55%', paddingBottom: '50px' }}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                
                value={desc}
                name={desc}
                onChange={handeldesc}

              />
            </Grid>
            <Grid align="left" item xs={2}>
              <Button sx={{ marginTop: '50%' }} variant="contained" onClick={handelpost} endIcon={<SendIcon />}>
                Post
              </Button>
            </Grid>

          </Grid>

        </Paper>
        <br/>
      </Container>
       <br/>
      
      <Container align="center"className="Bacc" maxWidth="lg">
          <br/>
          <a href="/map"><i style={{color:'green',marginBottom:'100px',display:'inline'}}class="fas fa-map-marked-alt fa-5x"></i></a><br/>
              <Typography sx={{display:'inline'}}> <h3>Find out Bus stops, Dining Facilities, Libraries and much more </h3></Typography>
              <br/>
      </Container>

      <Footer />

    </div>




  )







}

export default Travel