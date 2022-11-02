//import React from 'react';
import './App.css';

//import components from CourseForm.js
import CourseForm from './components/CourseForm.mjs';

//export the zustand form component
//sets a course list to follow the data the user is inputting
function App2(){
    return (
    <div className="main-container">  
    <h1 style = {{
      fontSize: "2.5rem",
      marginBottom: "2rem"
    }}> My Course List </h1>   
    <CourseForm /> 
    </div>
    );
  }

  export default App2;
