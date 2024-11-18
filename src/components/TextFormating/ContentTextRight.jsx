import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ContentTextRight({ title, text, imageSrc }) {
    return (
        <Container className="my-5">
            <Row className="align-items-center mb-5">
                <Col md={6}>
                    <div className="bg-light p-5 text-center rounded">
                        <img src={imageSrc} alt="Placeholder" className="img-fluid" />
                    </div>
                </Col>
                <Col md={6}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
    );
}
