import React from 'react';
import Carousel from '../components/TextFormating/Carousel.jsx';
import ContentCenteredVideo from "./TextFormating/ContentCenteredVideo.jsx";

// Importing images
import Imagegonard from '../assets/Images/WichtigePersoenlichkeiten_Samuel_Gonard.png';
import Imageguisan from "../assets/Images/WichtigePersoenlichkeiten_henry_guisan.jpeg";
import Imageburckhardt from '../assets/Images/WichtigePersoenlichkeiten_Carl_Burckhardt.jpg';
import Imagemasson from '../assets/Images/WichtigePersoenlichkeiten_Roger_Masson.png';
import Imagebrucke from '../assets/Images/Verteidigung_brucke.jpg';
import Imagegrenzen from '../assets/Images/Verteidigung_verteidigung.jpg';
import Imagereduit from '../assets/Images/Verteidigung_Reduit_Schweiz_Neu.jpg';
import Imagebunker from '../assets/Images/Verteidigung_Euschelsbunker.jpg';
import Imageneutralitaet from '../assets/Images/HistorischeHintergrunde_neutralitat.jpeg';
import Imagefluchtlinge from '../assets/Images/HistorischeHintergrunde_fluchtlinge.jpg';
import Imagekreuz from '../assets/Images/HistorischeHintergrunde_schweizerkreuz.jpg';
import Imagearmee from '../assets/Images/HistorischeHintergrunde_schweizer_armee.jpg';

// Importing video
import VideoBackground from '../assets/Videos/Swiss_Army_in_the_60s.mp4';
import ContentDate from "./TextFormating/ContentDate.jsx";

export default function Home() {
    // Kategorie 1: Persönlichkeiten
    const personenSlides = [
        {
            image: Imagegonard,
            title: 'Samuel Gonard',
            description: 'Wichtiger militärischer Führer im 2. Weltkrieg.',
            sourceText: 'Bildquelle: Wikipedia',
            sourceUrl: 'https://de.wikipedia.org/wiki/Samuel_Gonard',
            name: 'Military Leader',
            customDescription: 'Leader during critical times in WWII.',
            link: 'https://example.com/gonard',
            linkText: 'Learn More',
        },
        {
            image: Imagegonard,
            title: 'Samuel Gonard',
            description: 'Wichtiger militärischer Führer im 2. Weltkrieg.',
            sourceText: 'Bildquelle: Wikipedia',
            sourceUrl: 'https://de.wikipedia.org/wiki/Samuel_Gonard',
        },
        {
            image: Imageburckhardt,
            title: 'Burchatrt Gonard',
            description: 'unfeinreifer militärischer Führer im 2.f dsaja fsj  Weltkrieg.',
            sourceText: 'Bildquelle: i dinere träum',
            sourceUrl: 'https://de.wikipedia.org/wiki/Test',
            name: 'Military not you dream',
            customDescription: 'Leader not being the most women critical times in WWII.',
            link: 'https://youtube.com',
            linkText: 'Learn you wish',
        },
        // Add other slides...
    ];


    // Kategorie 2: Verteidigung
    const verteidigungSlides = [
        { image: Imagebrucke, title: 'Strategische Brücken', description: 'Militärische Infrastruktur zur Verteidigung.', sourceText: 'Bildquelle: Wikipedia', sourceUrl: 'https://de.wikipedia.org/wiki/Strategische_Brücke' },
        { image: Imagegrenzen, title: 'Grenzsicherung', description: 'Die Schweiz verteidigte ihre Grenzen rigoros.', sourceText: 'Bildquelle: Wikipedia', sourceUrl: 'https://de.wikipedia.org/wiki/Grenzsicherung' },
        { image: Imagereduit, title: 'Alpen-Reduit', description: 'Strategie, um eine Eroberung zu erschweren.', sourceText: 'Bildquelle: Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alpen-Reduit.jpg' },
        { image: Imagebunker, title: 'Bunkerbau', description: 'Verteidigungsbauten im ganzen Land verteilt.', sourceText: 'Bildquelle: Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bunkerbau_Schweiz.jpg' },
    ];

    // Kategorie 3: Historische Hintergründe
    const hintergrundSlides = [
        { image: Imageneutralitaet, title: 'Neutralität', description: 'Wie die Schweiz ihre Neutralität bewahrte.', sourceText: 'Bildquelle: Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Neutralitaet.jpg' },
        { image: Imagefluchtlinge, title: 'Flüchtlinge', description: 'Die Schweiz nahm während des Krieges viele Flüchtlinge auf.', sourceText: 'Bildquelle: Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fluechtlinge_Schweiz.jpg' },
        { image: Imagekreuz, title: 'Schweizer Kreuz', description: 'Symbol der Schweiz und ihrer Unabhängigkeit.', sourceText: 'Bildquelle: Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Schweizer_Kreuz.jpg' },
        { image: Imagearmee, title: 'Schweizer Armee', description: 'Rolle und Ausbau der Armee im 2. Weltkrieg.', sourceText: 'Bildquelle: Wikipedia', sourceUrl: 'https://de.wikipedia.org/wiki/Schweizer_Armee' },
    ];

    const handleSlideChange = (newIndex) => {
        console.log(`Slide changed to index: ${newIndex}`);
    };


    return (
        <div>
            <ContentCenteredVideo
                title="Allgemeines"
                videoSrc={VideoBackground}
                text="Auf dieser Website werden ihnen die militärischen Gegebenheiten der Schweiz im 2ten Weltkrieg etwas nähergebracht. Wir werden sie durch die verschiedenen Verteidigungsstrategien führen, bekannte und wichtige Persönlichkeiten vorstellen und die geschichtlichen Hintergründe erläutern, damit sie die Zusammenhänge möglichst gut verstehen."
                videoSourceText="Swiss Armee in WW2"
                videoSourceUrl="https://www.youtube.com/watch?v=5a77ISffxEo"
            /><br/><br/>
            <h2 className="carousel-text">Persönlichkeiten</h2>
            <Carousel
                slides={personenSlides}
                onSlideChange={handleSlideChange}
                autoSlideInterval={3000}
            />

            <h2 className="carousel-text">Verteidigung</h2>
            <Carousel
                slides={verteidigungSlides}
                onSlideChange={handleSlideChange}
                autoSlideInterval={3000}
            />

            <h2 className="carousel-text">Historische Hintergründe</h2>
            <Carousel
                slides={hintergrundSlides}
                onSlideChange={handleSlideChange}
                autoSlideInterval={3000}
            />
            <p></p>
            <ContentDate/>
        </div>
    );
}
