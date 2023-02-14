import { AppBar, Box, Button,  Toolbar } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom'


 function Base ({title, description, children}) {

    const history = useHistory();
  
  return (
    
    <div className="mainPage-component">
 <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar varient="dense" >

        <Button color="inherit"
         onClick={()=>history.push("/")}>
         <span className="nav-name">DashBoard</span> 
        </Button>

        <Button color="inherit"
         onClick={()=>history.push("/add-Studentdata")}>
             <span className="nav-name">Add Students</span>
            </Button>

    
        <Button color="inherit"
         onClick={()=>history.push("/Studentdashboard")}>
            <span className="nav-name">Student Dashboard</span> 
            </Button>

        <Button color="inherit"
         onClick={()=>history.push("/add-Staffdata")}>
           <span className="nav-name">Add Staff</span>  
            </Button>

        <Button color="inherit"
         onClick={()=>history.push("/Staffdashboard")}>
        <span className="nav-name">Staff Dashboard</span>
        </Button>

        </Toolbar>
      </AppBar>
    </Box>
    <div className="main-component">
    <header>
        <h1 className ="heading">{title}</h1>
    </header>
    <main className="main-segment">
        <h2>{description}</h2>
        <div className="child-segment">
            {children}
        </div>
    </main>
</div>
    </div>
  )
        }

    
export default Base;
