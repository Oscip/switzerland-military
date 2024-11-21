import React from 'react';
import '../../App.css';

export default function ContentCentered({ title, imageSrc, text, sourceUrl, sourceText }) {
    return (
        <div
            className="image-background d-flex align-items-center justify-content-center navbar-space"
            style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div className="overlay-content text-center">
                <h2 className="text-overlay">{title}</h2>
                <p>{text}</p>
            </div>
            <div className="video-background-source">
                <p>
                    Quelle:{' '}
                    <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                        {sourceText}
                    </a>
                </p>
            </div>
        </div>
    );
}
