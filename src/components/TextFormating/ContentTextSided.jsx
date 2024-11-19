import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function ContentTextSided({leftTitle, leftText, leftLinkText, leftLinkUrl, rightTitle, rightText, rightLinkText, rightLinkUrl, }) {
    return (
        <Container className="my-5 border-top border-black">
            <Row className="align-items-stretch pb-5 pt-5 content-row">
                <Col md={6} className="content-column">
                    <h3>{leftTitle}</h3>
                    <p>{leftText}</p>
                    {leftLinkText && leftLinkUrl && (
                        <p>
                            Quelle: <a href={leftLinkUrl} target="_blank" rel="noopener noreferrer">{leftLinkText}</a>
                        </p>
                    )}
                </Col>
                <Col md={6} className="content-column">
                    <h3>{rightTitle}</h3>
                    <p>{rightText}</p>
                    {rightText && rightLinkUrl && (
                        <p>
                            Quelle: <a href={rightLinkUrl} target="_blank" rel="noopener noreferrer">{rightLinkText}</a>
                        </p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
