import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <Card>
                <Card.Body>
                    {/* <Card.Title>{course_name}</Card.Title>
                    <Card.Text>{about}</Card.Text> */}
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;