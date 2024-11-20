import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from "../assets/Icons/icon_switzerland.png";
import './CustomNavbar.css';

export default function CustomNavbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [scrollingDown, setScrollingDown] = useState(false);
    let prevScrollPos = window.pageYOffset;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setScrollingDown(isScrollingDown);
            setShowNavbar(!isScrollingDown);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine navbar visibility class
    const navbarClass = showNavbar ? 'navbar-visible' : 'navbar-hidden';

    return (
        <div className={`navbar-container ${navbarClass}`}>
            <Navbar expand="lg" className="nav-background-color" id="navbar-design">
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
