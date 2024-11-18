import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function CenteredContent({ imageSrc, text }) {
    return (
        <Container className="my-5">
            <Row className="justify-content-center mb-4">
                <Col md={8} className="text-center">
                    <div className="bg-light p-5 rounded">
                        <img src={imageSrc} alt="Placeholder" className="img-fluid" />
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8}>
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
    );
}
