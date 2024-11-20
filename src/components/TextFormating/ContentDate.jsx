import React from 'react';
import { Container } from 'react-bootstrap';

export default function ContentDate() {
    return (
        <>
            <Container className="d-flex justify-content-end mb-5">
                <div className="text-container">
                    <p className="created-info">
                        <span className="fw-bold">Erstellt: </span> 18.11.2024 (Fabian Beck, Oscar Peach)
                    </p>
                    <p className="edited-info border-2 border-black border-bottom ms-auto">
                        <span className="fw-bold">Zuletzt bearbeitet: </span> 20.11.2024 (Fabian Beck, Oscar Peach)
                    </p>
                </div>

            </Container>
        </>
    );
}
