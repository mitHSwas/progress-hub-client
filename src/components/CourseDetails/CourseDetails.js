import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const details = useLoaderData();
    const { course_name, about, features, price } = details;
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>{about}</Card.Text>
                    <Card.Title>Why you choose our course?</Card.Title>
                    <Card.Text>
                        {
                            features?.map(feature => <p key={feature.index}>{feature}</p>)
                        }
                    </Card.Text>
                    <Card.Title>Price: ${price}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;