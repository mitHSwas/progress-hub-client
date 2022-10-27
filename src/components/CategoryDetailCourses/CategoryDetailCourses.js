import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CategoryDetailCourses = (props) => {
    const ref = React.createRef();
    const { _id, about, course_name, instructor, picture } = props.categoryCourses
    return (
        <div>
            <Card className="text-center w-75 mx-auto mb-5">
                <Card.Header className="d-flex justify-content-between">
                    <>Instructor: {instructor}</>
                    <Pdf targetRef={ref} filename={course_name + ".pdf"}>
                        {({ toPdf }) => <Button variant="light" onClick={toPdf}>Download pdf</Button>}
                    </Pdf>
                </Card.Header>
                <Card.Body ref={ref}>
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