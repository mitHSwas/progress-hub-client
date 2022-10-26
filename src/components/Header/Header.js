import React from 'react';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/images/logo/logo.jpg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Header.css'

const Header = () => {
    const [theme, setTheme] = useState('light');
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut();
    }
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'><Image rounded className="logo-img" src={Logo} /></Link>
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
                                        <Tippy content={user.displayName}><Image roundedCircle className="profile-img" src={user?.photoURL} /></Tippy>
                                        <Link className="ms-0"><Button onClick={handleSignOut} variant="danger">Sign Out</Button></Link>
                                    </> :
                                    <>
                                        <Link to="/login"><Button variant="primary">Sign In</Button></Link>
                                        <Link className="register" to="/register"><Button variant="warning">Sign Up</Button></Link>
                                    </>
                            }
                        </Nav.Item>
                        <Nav.Item>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-secondary"
                                checked={theme}
                                value="1"
                                onClick={toggleTheme}
                            >
                                {theme === "light" ? "Light" : "Dark"}
                            </ToggleButton>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;