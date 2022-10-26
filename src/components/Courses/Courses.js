import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import AllCourse from '../AllCourse/AllCourse';
import Categories from '../Categories/Categories';
import "./Courses.css";

const Courses = () => {
    const categories = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg="3">
                    <h2>Course Category</h2>
                    {
                        categories.map(category => <Categories key={category.id} category={category}></Categories>)
                    }
                </Col>
                <Col lg="9">
                    <AllCourse></AllCourse>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;