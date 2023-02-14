import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'


const Studentdashboard = ({student,setStudent}) => {

    const history= useHistory();

 //function for deleting data
 const deletedata=async (Id)=>{
  try{
    const response = await fetch(`https://63b1d5505e490925c50f5e91.mockapi.io/student/${Id}`,{
      method:"DELETE",
      headers: {
       "Content-Type":"application/json"
      },
     });
const data = await response.json();

     const removestud = student.filter((student)=>student.id !== Id);
     setStudent(removestud);
  }catch(error){
console.log(error);
  }
    
  
    
  };


  return (
    <Base
    title = "Student Details"
    description= "Veiw Student Details Here"
    >
  <div className="card-container"> 
              {student.map((stud,index)=>(
                       <Card sx={{ maxWidth: 345 }} key ={stud.id} className="card">
                       <CardContent className="card-comp">
  
                         <Typography gutterBottom variant="h5" component="div">
                         Name : {stud.Name}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Age : {stud.Age}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Gender : {stud.Gender}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         PLace : {stud.Place}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Qualification : {stud.Qualification}
                         </Typography>
  
                       </CardContent>
                       <CardActions className="Cardactions">
                       <Button onClick={()=>history.push(`/edit-Studentdata/${stud.id}`)} variant="contained" color="secondary">EDIT</Button>
                       <Button onClick={()=>deletedata(stud.id)}  variant="contained" color="error">DELETE</Button>
                       <Button onClick={()=>history.push(`/Studentdetails/${stud.id}`)} variant="contained" color="secondary">VEIW STUDENT</Button>
                       </CardActions>
                     </Card>
              ))}
        </div>
  
  </Base>
  
  )
}

export default Studentdashboard
