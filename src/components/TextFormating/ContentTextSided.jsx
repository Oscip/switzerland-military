import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function ContentTextSided({leftTitle, leftText, rightTitle, rightText, linkText, linkUrl, }) {
    return (
        <Container className="my-5 border-top border-black">
            <Row className="align-items-stretch pb-5 pt-5 content-row">
                <Col md={6} className="content-column">
                    <h3>{leftTitle}</h3>
                    <p>{leftText}</p>
                        <p>
                            Quelle: <a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>
                        </p>
                </Col>
                <Col md={6} className="content-column">
                    <h3>{rightTitle}</h3>
                    <p>{rightText}</p>
                </Col>
            </Row>
        </Container>
    );
}
