import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Link to="/home" className="text-white text-decoration-none px-3">
                            Home
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/verteidigung" className="text-white text-decoration-none px-3">
                            Verteidigung
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/wichtige-personlichkeiten" className="text-white text-decoration-none px-3">
                            Wichtige Persönlichkeiten
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/historische-hintergruende" className="text-white text-decoration-none px-3">
                            Historische Hintergründe
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs="auto">
                        <Link to="/datenschutzerklärung" className="text-white text-decoration-none px-3">
                            Datenschutzerklärungen
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/nutzungsbedingungen" className="text-white text-decoration-none px-3">
                            Nutzungsbedingungen
                        </Link>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <hr className="border-light my-3"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <p className="text-center mb-0">© 2024 Switzerland WWII History, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
