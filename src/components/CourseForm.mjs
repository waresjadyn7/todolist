import React, {useState} from 'react'
import useCourseStore from '../app/courseStore';

//keeps track of the current course state that the user is using
//lists each of the course states for the user to track of their progress
function CourseForm(){
    const addCourse = useCourseStore((state) => state.addCourse)
    
    const [courseTitle, setCourseTitle] = useState("")
    console.log("CourseForm Rendered");

    const handleCourseSumbit = () => {
        if (!courseTitle) return alert ("Please add a course title");
        addCourse({
            id: Math.ceil(Math.random() * 10000000),
            title: courseTitle
        })
    }
    return(
        <div className = "form-container">
        <input
        value = {courseTitle}
        onChange={(e) => {
            setCourseTitle(e.target.value)
        }}
        className="form-input" /> 
        <button 
        onClick={() => {
            handleCourseSumbit()
        }}
        className = "form-submit-btn">
            Add Course
        </button>
        </div>
    )
}

export default CourseForm; //give the same name as the function name 
