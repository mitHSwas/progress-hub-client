import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
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
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/home'>Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/statistics'>Statistics</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/blogs'>Blogs</NavLink>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;