import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const CourseDetails = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        const url = `http://localhost:5000/courseDetails/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details)
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