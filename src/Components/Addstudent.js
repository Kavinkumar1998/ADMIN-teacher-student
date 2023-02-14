import React from 'react'
import Base from '../Base/Base'
import  { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Addstudent = ({student,setStudent}) => {

  const history = useHistory();
const [values,setvalues]=useState({
  Name:"",
  Age:"",
  Gender:"",
  Place:"",
  Qualification:""
});

const {
    Name,
    Age,
    Gender,
    Place,
    Qualification
             }=values;
            

             const handleChange = (name) => (event) =>{
              const value = event.target.value; 
              setvalues({...values, [name]:value})
           }


  //function for adding 
    const adddata = async (event)=>{
event.preventDefault();
      try{
              const newStudents={
                Name,
                Age,
                Gender,
                Place,
                Qualification 
              }
              const response = await fetch("https://63b1d5505e490925c50f5e91.mockapi.io/student",{
                method:"POST",
                body : JSON.stringify(newStudents),
                headers: {
                 "Content-Type":"application/json"
                },
               });

              const Sdata = await response.json()
              console.log(Sdata);
             setStudent([...student,Sdata])    
      
          setvalues({
            ...values, 
            Name:"",
            Age:"",
            Gender:"",
            Place:"",
            Qualification:""
           })
           
           history.push("/Studentdashboard")
      
      }
      catch(error){
    console.log(error);
      }

  };



  return (
  <Base title="Add Students Data Here"
  description="You can Add a New Student Data" >
<div className="input">

            <TextField fullWidth label="Enter the Name" id="fullWidth" onChange={handleChange("Name")} value={Name}  name="Name"/>

            <TextField fullWidth label="Enter the Age" id="fullWidth" onChange={handleChange("Age")} value={Age} name="Age" />

            <TextField fullWidth label="Enter the Gender" id="fullWidth" onChange={handleChange("Gender")} value={Gender} name="Gender"/>

            <TextField fullWidth label="Enter the Place" id="fullWidth" onChange={handleChange("Place")} value={Place} name="Place" />

            <TextField fullWidth label="Enter the Qualification" id="fullWidth" onChange={handleChange("Qualification")} value={Qualification} name="Qualification" />

              <Button className="add-btn" onClick={adddata} variant="contained" color="success">ADD</Button>
        
          
            </div>
  </Base>
  )
  }

export default Addstudent
