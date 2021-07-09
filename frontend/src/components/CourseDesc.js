import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const CourseDesc = ({match}) => {

    const [course, setCourse] = useState([]);

    useEffect(()=>{
        const fetchCourse = async () =>{
           const { data } = await axios.get(`/api/courses/${match.params.id}`);
           setCourse(data);
           console.log(data);
        }

        fetchCourse();
   },[match])

    return (
        <div className="App">
            <button className="back"><Link to="/">Go Back</Link></button>
            <h1>This page contains the description of courses</h1>
            <p>{course.description}</p>
        </div>
    )
}

export default CourseDesc;
