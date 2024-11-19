import React from 'react';
import '../../App.css';

export default function ContentCentered({ title, videoSrc, text, videoSourceText, videoSourceUrl}) {
    return (
        <div
            className="video-background-container d-flex align-items-center justify-content-center navbar-space"
            style={{
                position: 'relative',
                height: '250px',
                width: '100%',
                overflow: 'hidden'
            }}
        >

            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="overlay-content text-center" style={{ zIndex: 1 }}>
                <h2 className="text-overlay">{title}</h2>
                <p>{text}</p>
            </div>
            <div className="video-background-source">
                <p> Quelle: <a href={videoSourceUrl} target="_blank" rel="noopener noreferrer">{videoSourceText}</a></p>
            </div>
        </div>
    );
}
