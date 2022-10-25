import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import "./Register.css";

const Register = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-primary">Create An Account</h1>
                <Form className="w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="PhotoURL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="w-100 mx-auto" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="w-50 mx-auto text-center">
                <small>Or use one of these options</small>
                <div className="icons">
                    <FaFacebookSquare className="icon facebook"></FaFacebookSquare>
                    <FcGoogle className="icon"></FcGoogle>
                    <GoMarkGithub className="icon"></GoMarkGithub>
                </div>
            </div>
        </div>
    );
};

export default Register;