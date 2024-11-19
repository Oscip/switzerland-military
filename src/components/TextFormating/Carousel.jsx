import React, { useState, useEffect } from 'react';

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

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            style={{
                transform: 'scale(0.5)',
                transformOrigin: 'top center',
                margin: '0 auto',
                marginTop: '5%',
                maxWidth: '100%',
            }}
        >
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
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <img
                            src={slide.image}
                            className="d-block w-100 carousel-image"
                            alt={slide.caption}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                        {/* Quellenangabe unter dem Bild */}
                        <div className="carousel-source">
                            <p>
                                <a href={slide.sourceUrl} target="_blank" rel="noopener noreferrer">
                                    {slide.sourceText}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
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
        </div>
    );
};

export default Carousel;
