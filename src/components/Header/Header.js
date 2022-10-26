import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/images/logo/logo.jpg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut();
    }
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'><Image rounded className="logo-img" src={Logo}></Image></Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Item >
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/courses'>Courses</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/blogs'>Blogs</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/questions'>FAQ</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            {
                                user?.uid ?
                                    <>
                                        <Link><Button onClick={handleSignOut} variant="danger">Sign Out</Button></Link>
                                        <Image roundedCircle className="profile-img" src={user?.photoURL}></Image>
                                    </> :
                                    <>
                                        <Link to="/login"><Button variant="primary">Sign In</Button></Link>
                                        <Link className="register" to="/register"><Button variant="warning">Sign Up</Button></Link>
                                    </>
                            }
                        </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;