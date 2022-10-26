import React from 'react';
import Card from 'react-bootstrap/Card';

const SingleCourse = (props) => {
    const { course_name, picture, about } = props.course;
    return (
        <div>
            <Card style={{ width: '15rem', height: "25rem" }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>{about.slice(0, 150)}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;