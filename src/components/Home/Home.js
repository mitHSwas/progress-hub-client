import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from "../../assets/images/carousel/Banner1.jpg";
import Carousel2 from "../../assets/images/carousel/Banner2.jpg";
import Choice1 from '../../assets/images/home/explore-dream-career.jpg';
import Choice2 from '../../assets/images/home/recruiters-not-noticing.jpg';

const Home = () => {
    return (
        <div>
            <Carousel className="mb-5">
                <Carousel.Item interval={4000} className="p-0">
                    <img
                        className="d-block w-100 rounded"
                        src={Carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Progress Hub is a web-technology based site.</h3>
                        <p>Web Technology refers to the various tools and techniques that are utilized in the process of communication between different types of devices over the internet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000} className="p-0">
                    <img
                        className="d-block w-100 rounded"
                        src={Carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row className="my-5">
                <Col lg="7">
                    <h1>Explore Dream Career of Your Choice</h1>
                    <h5>Explore alternate career paths and skills you need to reach your dream job.</h5>
                    <Button className="p-2 m-2" variant="warning">Career Planner</Button>
                    <Button className="p-2 m-2" variant="primary">Talk to Expert</Button>
                </Col>
                <Col lg="5">
                    <img src={Choice1} alt="" />
                </Col>
            </Row>
            <Row className="mb-5">
                <Col lg="5">
                    <img src={Choice2} alt="" />
                </Col>
                <Col lg="7">
                    <h1>Recruiters Not Noticing your Skills?</h1>
                    <h5>Take assessment now and showcase your skills to recruiters.</h5>
                    <Button className="p-2 m-2" variant="primary">Talk to Expert</Button>
                    <Button className="p-2 m-2" variant="warning">Take Assessment</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Home;