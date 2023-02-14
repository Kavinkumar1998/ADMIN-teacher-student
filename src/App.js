import './App.css';
import   Addstudent from './Components/Addstudent';
import   Editstudent from './Components/Editstudent';
import   Veiwstudent from './Components/Veiwstudent';
import   Addstaff from './Components/Addstaff';
import   Editstaff from './Components/Editstaff';
import   Veiwstaff from './Components/Veiwstaff';
import   Welcome from './Components/Welcome';
import Studentdashboard from './Components/Studentdashboard';
import Staffdashboard from './Components/Staffdashboard';
import NoPage from './Components/NoPage';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {

  const[student,setStudent]= useState([]);

const[staff,setStaff]= useState([]);


useEffect(() => {
  const getStudents= async()=>{
    try{
      const response= await fetch("https://63b1d5505e490925c50f5e91.mockapi.io/student",{
        method : "GET"
      });
      const data= await response.json();
      setStudent(data);
    }
    catch(error){
console.log(error);
    }
  };
  getStudents();
},[]);


useEffect(() => {
  const getStaffs= async()=>{
    try{
      const response = await fetch("https://63b1d5505e490925c50f5e91.mockapi.io/Staffs",{
        method : "GET"
      });
      const data= await response.json();
      setStaff(data);
    }
    catch(error){
console.log(error);
    }
  };
  getStaffs();
},[]);


  return (
    <div className="App">
        <Switch>
    
    <Route exact path = "/">
    <Welcome/>
    </Route>
     

    <Route path = "/add-Studentdata">
       <Addstudent
       student={student}
       setStudent={setStudent}
         />
     </Route>

     <Route path = "/edit-Studentdata/:Id">
       <Editstudent 
        student={student}
        setStudent={setStudent} />
     </Route>

     <Route path = "/Studentdetails/:Id">
       <Veiwstudent 
       studentsdata={student}/>
     </Route>
      
     <Route exact path = "/Studentdashboard">
    <Studentdashboard
    student={student}
    setStudent={setStudent}/>
    </Route>

     <Route path = "/add-Staffdata">
       <Addstaff
      staff={staff}
      setStaff={setStaff}
         />
     </Route>

     <Route path = "/edit-Staffdata/:Id">
       <Editstaff 
        staff={staff}
        setStaff={setStaff} 
        />
     </Route>

     <Route path = "/Staffdetails/:Id">
       <Veiwstaff 
       teachersdata={staff}
         />
     </Route>

     <Route exact path = "/Staffdashboard">
    <Staffdashboard
     staff={staff}
     setStaff={setStaff}/>
    </Route>
    
     <Route path = "**">
       <NoPage/>
     </Route>




  </Switch>

   
    </div>
  );
}

export default App;
