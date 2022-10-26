import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailCourses from '../CategoryDetailCourses/CategoryDetailCourses';

const CoursesDetails = () => {
    const categoryDetails = useLoaderData();
    return (
        <div>
            {
                categoryDetails.map(categoryCourses => <CategoryDetailCourses key={categoryCourses._id} categoryCourses={categoryCourses} ></CategoryDetailCourses>)
            }
        </div>
    );
};

export default CoursesDetails;