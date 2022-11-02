import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'

//making the store that will have all the components
//define a course list where the data will be stored 
const courseStore = (set) => (

    {
        courses: [], 
        addCourse: (course) => {
            set((state) => ({
                courses: [course, ... state.courses],
            }))
        },
        removeCourse: (courseId) => {
            set((state) => ({
                courses: state.courses.filter((c) => c.id !== courseId)
            }))
        },
        toggleCourseStatus: (courseId) => {
            set((state) => ({
                courses: state.courses.map((course) => course.id === courseId ? {... course, completed: !course.completed} : course)
            }))
        }
})

//store is being created
//this is where all the values go to 
const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",
        })
    )
)

export default useCourseStore;
