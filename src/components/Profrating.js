import react,{useState,useEffect} from 'react'
import profdat from './profdat.json'
import Box from '@mui/material/Box';
import {TextField,Container,Button, Typography} from '@mui/material';
import Proftable from '../rep-components/Proftable'
export default function Profrating(){
    const [pdat,setpdat]=useState([])
    const [sub,setsub]=useState('')
    
    const [curr,setcurr]=useState(0)
    const [next,setnext]=useState(20)
    const [searching,setsearching]=useState(false)
    const [course,setcourse]=useState('')
    const [profname,setprofname]=useState('')
function handelChange(event){
if(event.target.name=="course"){
setcourse(event.target.value)

}
if(event.target.name=="prof"){
    setprofname(event.target.value)
    
    }


}

function handelprev(){
if(curr==0){
    return
}
if(next==20){
return

}
setcurr(curr-20)
setnext(next-20)



}
function handelNext(){

    setcurr(curr+20)
    setnext(next+20)
    
    
    
    }

function handelSubmit(){
    setsearching(true)
    if(profname==''){
    var x=[]
    for(var i=0;i<profdat.length;i++){
        if(profdat[i].tDept==course){
        x.push(profdat[i])
        }


}
    }else if(course==''){
        var fname=profname.split(" ")[0]
        var lname=profname.split(" ")[1]
        var x=[]
        for(var i=0;i<profdat.length;i++){
            if(profdat[i].tFname==fname){
            x.push(profdat[i])
            }
            else if(profdat[i].tLname==fname){
                x.push(profdat[i])

            }
    
    
    }

    }

setpdat(x)
setsearching(false)
}

    // useEffect(()=>{
    //     if(sub=='s'){
    //         for(var i=0;i<profdat.length;i++){
    //             if(profdat[i].tDept==course){
    //               var x=profdat[i]
    //                 setpdat(prevdat => {
    //                     return { 
    //                       ...prevdat, 
    //                        x 
    //                     }
    //                   })

    //             }

    //         }

    //     }


    // },[sub])



return(

    <div>
        <Container align="center"className="Bacc">
        <div>
        <TextField id="outlined-basic" name="course" label="Course" variant="outlined" onChange={handelChange} /> {'\u00A0'}{'\u00A0'}
<TextField id="filled-basic" label="Prof Name" name="prof" variant="outlined" onChange={handelChange} />{'\u00A0'}{'\u00A0'}
<TextField id="standard-basic" label="Standard" variant="outlined" /> {'\u00A0'}{'\u00A0'}
<Button variant="contained" onClick={handelSubmit}>Search</Button>
<table class="table table-bordered ">
  <thead>
    <tr>
       
       <th className="text-center" scope="col">ProfName</th>
       <th className="text-center" scope="col">Rating Class</th>
       <th className="text-center" scope="col">Overall Rating</th>
      
      
     

    </tr>
  </thead>
 


{searching==false && pdat.length!=0? pdat.slice(curr,next).map(item=>(
    <Proftable tFname={item.tFname} tLname={item.tLname} classrating={item.rating_class} overall={item.overall_rating}/>
)):null}

 </table>




        </div>
        <Button variant='contained' onClick={handelprev}>Prev</Button>
        <Button variant='contained' onClick={handelNext}>Next</Button>
        <Typography>{curr}-{next}</Typography>

        </Container>


    </div>




)


}



