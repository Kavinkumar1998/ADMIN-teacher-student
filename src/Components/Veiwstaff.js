import React from 'react'
import { useParams } from 'react-router-dom';
import Base from '../Base/Base'

const Veiwstaff = ({teachersdata}) => {
  const {Id} = useParams();
  const staff = teachersdata[(parseInt(Id) - 1)]
  return (
    <Base title="Staff Profile"
    discription="Veiw Staff Profile here">
 <div>
        <h1>Staff-Profile </h1>
        <h2>Staff Name: {staff.Name}</h2>
        <p> Gender: {staff.Gender} </p>
        <p>Age : {staff.Age} years </p>
        <p>Place : {staff.Place} </p>
        <p>Qualification: {staff.Qualification}</p>
      </div>
    </Base>
  )
}

export default Veiwstaff
