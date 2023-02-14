import React from 'react'
import { useParams } from 'react-router-dom';
import Base from '../Base/Base'

const Veiwstudent = ({studentsdata}) => {
  const {Id} = useParams();
  const student = studentsdata[(parseInt(Id) - 1)]
  return (
    <Base title="Student Profile"
    discription="Veiw Student Profile here">
 <div>
        <h1>Student-Profile </h1>
        <h2>Student Name: {student.Name}</h2>
        <p> Gender: {student.Gender} </p>
        <p>Age : {student.Age} years </p>
        <p>Place : {student.Place} </p>
        <p>Qualification: {student.Qualification}</p>
      </div>
    </Base>
  )
}

export default Veiwstudent