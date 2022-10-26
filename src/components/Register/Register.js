import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import "./Register.css";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const { googleSignUp, githubSignUp, facebookSignUp, createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignUp(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message)
                console.error(error);
            })
    }
    const handleGithubSignIn = () => {
        githubSignUp(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                toast.error(error.message)
                console.error(error)
            })
    }
    const handleFacebookSignIn = () => {
        facebookSignUp(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                toast.error(error.message)
                console.error(error)
            })
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password) === false) {
            toast.error("Password should minimum six characters, at least one uppercase letter, one lowercase letter and one number");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserInfo(name, photoURL);
                verifyEmail();
                toast.success("E-mail send for verification! Please check your email.")
                form.reset()
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
                console.error(error)
            })

    }

    const updateUserInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        return updateUserProfile(profile)
    }

    return (
        <div>
            <div>
                <h1 className="text-center text-primary">Create An Account</h1>
                <Form onSubmit={handleSubmit} className="w-50 mx-auto">
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
                        <Form.Check onClick={() => setAccepted(!accepted)} type="checkbox" label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
                    </Form.Group>
                    <Button className="w-100 mx-auto" variant="primary" disabled={!accepted} type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="w-50 mx-auto text-center mt-3">
                <small>Or use one of these options</small>
                <div className="icons">
                    <FaFacebookSquare onClick={handleFacebookSignIn} className="icon facebook"></FaFacebookSquare>
                    <FcGoogle onClick={handleGoogleSignIn} className="icon"></FcGoogle>
                    <GoMarkGithub onClick={handleGithubSignIn} className="icon"></GoMarkGithub>
                </div>
            </div>
        </div>
    );
};

export default Register;