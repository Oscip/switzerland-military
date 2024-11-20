import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ slides, onSlideChange, autoSlideInterval }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (direction) => {
        let newIndex = activeIndex + direction;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;

        setActiveIndex(newIndex);
        if (onSlideChange) {
            onSlideChange(newIndex);
        }
    };

    useEffect(() => {
        if (autoSlideInterval) {
            const intervalId = setInterval(() => {
                handleSlideChange(1);
            }, autoSlideInterval);
            return () => clearInterval(intervalId);
        }
    }, [autoSlideInterval, activeIndex]);

    const currentSlide = slides[activeIndex];

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-slide"
        >
            {/* Indicators */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={activeIndex === index ? 'active' : ''}
                        aria-current={activeIndex === index ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        {/* Bild mit internem Link */}
                        <Link
                            to={slide.internalLink}
                            style={{ display: 'block' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={slide.image}
                                className="d-block w-100 carousel-image"
                                alt={slide.title}
                            />
                        </Link>
                        <div className="carousel-caption">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
                onClick={() => handleSlideChange(-1)}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
                onClick={() => handleSlideChange(1)}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            {/* Quellenangabe */}
            {currentSlide.linkName && currentSlide.linkUrl && (
                <p
                    style={{
                        marginTop: '20px',
                        textAlign: 'center',
                        fontSize: '16px',
                    }}
                >
                    <span style={{ fontWeight: 'bold' }}>Quelle:</span>{' '}
                    <a
                        href={currentSlide.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#007bff',
                            textDecoration: 'underline',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {currentSlide.linkName}
                    </a>
                </p>
            )}
        </div>
    );
};

export default Carousel;
