import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
         const fetchCourses = async () =>{
            const { data } = await axios.get("/api/courses");
            setCourses(data);
            // console.log(data);
         }

         fetchCourses();
    },[])

    return (
        <div className="App">
            <h1>This page contains the list of the courses.</h1>
            {courses.map((course, key) =>{
                return <div className="courses"
                            key={key}
                        >
                            {course.title} 
                            <button>
                             <Link to={`/courselist/${course.id}`}>
                                 Info
                             </Link>   
                            </button>
                        </div>
            })}
        </div>
    )
}

export default CourseList;