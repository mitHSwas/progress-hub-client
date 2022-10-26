import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import "./AllCourse.css"

const AllCourse = () => {
    const [allCourse, setAllCourse] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])
    return (
        <div className="courses">
            {
                allCourse.map(course => <SingleCourse key={course.price} course={course}></SingleCourse>)
            }
        </div>
    );
};

export default AllCourse;