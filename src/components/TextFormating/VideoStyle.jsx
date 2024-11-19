import React from 'react';
import {Container} from "react-bootstrap";

export default function VideoStyle({Video}) {
    return (
        <>
            <Container className="video-div pt-5 pb-5 border-top border-black">
                <video src={Video} className="video-style" controls/>
            </Container>
        </>
    );
}