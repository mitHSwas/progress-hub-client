import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between my-4">
            <div>
                <Link className="p-2 m-2">About Us</Link>
                <Link className="p-2 m-2">Privacy Policy</Link>
                <Link className="p-2 m-2">Terms & Conditions</Link>
                <Link className="p-2 m-2">Contact</Link>
            </div>
            <div>
                <FaFacebookSquare className="f-icon m-2"></FaFacebookSquare>
                <FcGoogle className="f-icon m-2"></FcGoogle>
                <GoMarkGithub className="f-icon m-2"></GoMarkGithub>
            </div>
        </div>
    );
};

export default Footer;