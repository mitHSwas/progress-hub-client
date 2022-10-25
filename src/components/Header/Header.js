import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/images/logo/logo.jpg";
import './Header.css'

const Header = () => {
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
                            <Link to="/login"><Button variant="primary">Sign in</Button></Link>
                            <Link className="register" to="/register"><Button variant="warning">Sign up</Button></Link>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;