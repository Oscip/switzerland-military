import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from "../assets/Icons/icon_switzerland.png";

export default function CustomNavbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setShowNavbar(!isScrollingDown);

            setIsDarkMode(currentScrollPos > 1050);

            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarClass = showNavbar ? 'navbar-visible' : 'navbar-hidden';
    const themeClass = isDarkMode ? 'navbar-dark' : 'navbar-light';

    return (
        <div className={`navbar-container ${navbarClass} ${themeClass}`}>
            <Navbar expand="lg" id="navbar-design" className={themeClass}>
                <Navbar.Brand as={Link} to="/" id="navbar-brand-design">
                    <img className="image-icon me-2" src={icon} alt="Swiss Icon" />
                    <span className="brand-text">Militärische Aspekte</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto justify-content-evenly w-100 ps-3">
                        <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/verteidigung" className="navbar-link">Verteidigung</Nav.Link>
                        <Nav.Link as={Link} to="/wichtige-personlichkeiten" className="navbar-link">Wichtige Persönlichkeiten</Nav.Link>
                        <Nav.Link as={Link} to="/historische-hintergruende" className="navbar-link">Historische Hintergründe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
