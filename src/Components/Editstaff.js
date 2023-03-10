import React from 'react'
import Base from '../Base/Base'
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Editstaff = ({staff,setStaff}) => {

  const history = useHistory();
  const {Id} = useParams();
  const staffdata = staff[Id] 
  const[editId,seteditId]= useState("");
  const[Name,setName]= useState("");
  const[Age,setAge]= useState("");
  const[Gender,setGender]= useState("");
  const[Place,setPlace]= useState("");
  const[Qualification,setQualification]= useState("");


  useEffect(() => {
   seteditId(staffdata.Id);
   setName(staffdata.Name);
   setAge(staffdata.Age);
   setGender(staffdata.Gender);
    setPlace(staffdata.Place);
    setQualification(staffdata.Qualification);
 },[]);  

            //updation
            const updatedata= async ()=>{
              try{
                const updated={
                  Name,
                  Age,
                  Gender,
                  Place,
                  Qualification
                  
                  }
                const response = await fetch(`https://63b1d5505e490925c50f5e91.mockapi.io/Staffs/${Id}`,{
                  method:"PUT",
                  body : JSON.stringify(updated),
                  headers: {
                   "Content-Type":"application/json"
                  },
                 });
            
                 const Sdata = await response.json()
    
              const editstud= staff.findIndex((staff)=>staff.Id===editId)
              
              staff[editstud]=updated;
              setStaff([...staff])
              setName("")
              setAge("")
              setGender("")
               setPlace("")
               setQualification("")
               history.push("/Staffdashboard")
            
            
              }
              catch(error){
            console.log(error);
              }
              
              }


  return (
    <Base
    title = "Edit Form"
    description= "Edit staff detail here">
<div className="input">
          
            <TextField fullWidth label="Enter the Name" id="fullWidth" onChange={(event)=>setName(event.target.value)} value={Name} />

            <TextField fullWidth label="Enter the Age" id="fullWidth" onChange={(event)=>setAge(event.target.value)} value={Age} />

            <TextField fullWidth label="Enter the Gender" id="fullWidth" onChange={(event)=>setGender(event.target.value)} value={Gender}/>

            <TextField fullWidth label="Enter the Place" id="fullWidth" onChange={(event)=>setPlace(event.target.value)} value={Place} />

            <TextField fullWidth label="Enter the Qualification" id="fullWidth" onChange={(event)=>setQualification(event.target.value)} value={Qualification} />

           <Button className="add-btn" onClick={()=>updatedata()} variant="contained" color="primary">UPDATE</Button>
          
            </div>
            </Base>
  )
}

export default Editstaff
