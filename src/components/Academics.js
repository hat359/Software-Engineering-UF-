import React,{useEffect} from 'react';
import Nav from '../Nav'
import{Card,Container,Paper,TextField} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import Box from '@mui/material/Box';
import Footer from '../rep-components/Footer'
import profdat from './profdat.json'
import acad from '../academics.jpg'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function Academics() {
useEffect(()=>{

  for(var i=0;i<profdat.length;i++){
    if(profdat[i].tDept== 'Computer Science'){
      console.log(profdat[i])
    }
  }


})

function handelpost(){



}
const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div>
        {<Nav/>}
        <div className="fin">
        <img src={acad}/>

        </div>
        <Container className="Bacc" sx={{marginTop:'55vh'}}>
        <br/><br/>
        <Typography variant="h5" sx={{m:2}}> 
        Select a course to join a group
      </Typography>
      <br/>
        <Grid container sx={{marginTop:"0vh"}}>
        

      
      <Grid item md={6} >
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Grid>
            <Grid item md={6}>
              <Button sx={{marginTop:'2vh'}} variant='outlined'>Join</Button>


            </Grid>

    
          </Grid>
          <table class="table table-bordered ">
  <thead>
    <tr>
       
       <th className="text-center" scope="col">Course</th>
      <th className="text-center" scope="col">Group Chat</th>
      
     

    </tr>
  </thead>

   {/* { loadquestions.map(item=>(
              
               
              <BasicTable  id={item.ID} ques={item.Question} user={item.PostedByUserId}/>
              
              
            ))} */} 
  </table>
        
  <Box sx={{ paddingTop: '50px', fontWeight: 'bold', m: 1, fontSize: 'h4.fontSize' }}>Ask a Question</Box>
        <Paper align="center" sx={{ marginTop: '50px' }} variant="outlined">
          <TextField sx={{ marginLeft: '50px', marginTop: '50px', width: '75%' }} name="ques"  id="outlined-basic" label="Question" variant="outlined" />
          <br />
          <Grid container>
            <Grid item xs={8}>
              <TextField sx={{ marginTop: '50px', width: '55%', paddingBottom: '50px' }}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                
                

              />
            </Grid>
            <Grid align="left" item xs={2}>
              <Button sx={{ marginTop: '50%' }} variant="contained" onClick={handelpost} endIcon={<SendIcon />}>
                Post
              </Button>
            </Grid>

          </Grid>

        </Paper>
        


        </Container>
        <Container className="Bacc" >
              <br/><br/>

        </Container>


  <Footer />
  </div>
  
  );
}
