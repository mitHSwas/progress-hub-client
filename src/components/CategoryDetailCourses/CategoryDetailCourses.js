import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CategoryDetailCourses = (props) => {
    const { _id, about, course_name, email, instructor, picture } = props.categoryCourses
    return (
        <div>
            <Card className="text-center w-75 mx-auto mb-5">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Img className="" variant="top" src={picture} />
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>{about}</Card.Text>
                    <Link to={`/courseDetails/${_id}`}>
                        <Button variant="primary">Get Premium Access</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CategoryDetailCourses;