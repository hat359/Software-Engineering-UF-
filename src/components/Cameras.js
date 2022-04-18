import React,{useEffect,useState} from 'react'
import {FormControl,Container,TextField,Button} from '@mui/material';
import axios from 'axios'
export default function Cameras(){

const [cam1,setcam1]=useState('')
    useEffect(()=>{
        axios.get('http://recsports.ufl.edu/cam/cam1.jpg')
        .then(response=>{
            console.log(response.data)
            setcam1(response.data)

        })
        
    })
return(

    <div>
    <br/><br/>
    <Container  align="center"className="Bacc cam">
        <br/>
    <img src="http://recsports.ufl.edu/cam/cam1.jpg"/>
    <br/><br/>
    <img src="http://recsports.ufl.edu/cam/cam2.jpg"/>
    <br/><br/>
    <img src="http://recsports.ufl.edu/cam/cam3.jpg"/>
    <br/><br/>
    <img src="http://recsports.ufl.edu/cam/cam4.jpg"/>
    <br/><br/>
    <img src="http://recsports.ufl.edu/cam/cam5.jpg"/>
    <br/><br/>
    <img src="http://recsports.ufl.edu/cam/cam6.jpg"/>
    <br/><br/>
    <img src="http://recsports.ufl.edu/cam/cam7.jpg"/>
    <br/><br/>
    </Container>
    </div>
       


)


}