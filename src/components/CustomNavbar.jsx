import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from "../assets/icon_switzerland.png";

export default function CustomNavbar() {
    return (
        <>
            <Navbar expand="lg" className="w-100 nav-background-color">
                <Navbar.Brand as={Link} to="/"><img id="image-icon" src={icon} alt="swiss Icon"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto justify-content-evenly w-100 ">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/verteidigung">Verteidigung</Nav.Link>
                        <Nav.Link as={Link} to="/wichtige-personlichkeiten">Wichtige Persönlichkeiten</Nav.Link>
                        <Nav.Link as={Link} to="/historische-hintergruende">Historische Hintergründe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
