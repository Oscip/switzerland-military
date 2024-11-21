import React from 'react';
import Carousel from '../components/TextFormating/Carousel.jsx';
import ContentCenteredVideo from './TextFormating/ContentCenteredVideo.jsx';

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

import VideoBackground from '../assets/Videos/Swiss_Army_in_the_60s.mp4';
import ContentDate from "./TextFormating/ContentDate.jsx";

export default function Home() {
    const personenSlides = [
        { image: Imageguisan, title: 'Henri Guisan', description: 'Wichtiger militärischer Führer im 2. Weltkrieg.', linkUrl: 'https://www.nzz.ch/schweiz/ein-gluecksfall-in-der-gefaehrlichsten-phase-unserer-geschichte-wie-general-guisan-zum-held-der-schweiz-wurde-und-was-er-uns-heute-noch-sagt-ld.1853528', linkName: 'Henri Guisan', internalLink: '/wichtige-personlichkeiten' },
        { image: Imagegonard, title: 'Samuel Gonard', description: 'Kompetenter Stratege im 2. Weltkrieg.', linkUrl: 'https://de-academic.com/dic.nsf/dewiki/1230769', linkName: 'Samuel Gonard', internalLink: '/wichtige-personlichkeiten' },
        { image: Imageburckhardt, title: 'Carl Buckhardt', description: 'Präsident des Internationalen Komitees vom Roten Kreuz im 2. Weltkrieg.', linkUrl: 'https://de.wikipedia.org/wiki/Carl_Jacob_Burckhardt', linkName: 'Carl Buckhardt', internalLink: '/wichtige-personlichkeiten' },
        { image: Imagemasson, title: 'Roger Masson', description: 'Zuständig für das Informationsnetz.', linkUrl: 'https://en.wikipedia.org/wiki/Roger_Masson', linkName: 'Roger Masson', internalLink: '/wichtige-personlichkeiten' },
    ];

    const verteidigungSlides = [
        { image: Imagebrucke, title: 'Brückensprengungen', description: 'Brücken wurden mit Sprengstoff bestückt, um Wege zu versperren.', linkUrl: 'https://www.badische-zeitung.de/schweizer-haben-nicht-nur-bruecken-mit-tnt-bestueckt', linkName: 'Brücke', internalLink: '/verteidigung' },
        { image: Imagegrenzen, title: 'Grenzsicherung', description: 'Die Schweiz verteidigte ihre Grenzen rigoros.', linkUrl: 'https://geschichtedergegenwart.ch/stacheldraht-und-volles-boot-georg-kreis/', linkName: 'Grenzschutz', internalLink: '/verteidigung' },
        { image: Imagereduit, title: 'Alpen-Reduit', description: 'Strategie, um eine Eroberung zu erschweren.', linkUrl: 'https://de.wikipedia.org/wiki/Schweizer_Réduit', linkName: 'Bildquelle: Wikimedia Commons', internalLink: '/verteidigung' },
        { image: Imagebunker, title: 'Bunkerbau', description: 'Verteidigungsbauten im ganzen Land verteilt.', linkUrl: 'https://schweiz.fandom.com/de/wiki/Schweizer_Reduit', linkName: 'Schweiz.fandom', internalLink: '/verteidigung' },
    ];

    const hintergrundSlides = [
        { image: Imageneutralitaet, title: 'Neutralität', description: 'Wie die Schweiz ihre Neutralität bewahrte.', linkUrl: 'https://www.swissinfo.ch/ger/kultur/blog-schweizerisches-nationalmuseum_das-schweizer-milizsystem/45375540', linkName: 'Neutralität', internalLink: '/historische-hintergruende' },
        { image: Imagefluchtlinge, title: 'Flüchtlinge', description: 'Die Schweiz nahm während des Krieges viele Flüchtlinge auf.', linkUrl: 'https://www.uek.ch/de/schlussbericht/Publikationen/Zusammenfassungenpdf/17d.pdf', linkName: 'Flüchtlinge', internalLink: '/historische-hintergruende' },
        { image: Imagekreuz, title: 'Schweizer Kreuz', description: 'Symbol der Schweiz und ihrer Unabhängigkeit.', linkUrl: 'https://commons.wikimedia.org/wiki/File:Schweizer_Kreuz.jpg', linkName: 'Bildquelle: Wikimedia Commons', internalLink: '/historische-hintergruende' },
        { image: Imagearmee, title: 'Schweizer Armee', description: 'Rolle und Ausbau der Armee im 2. Weltkrieg.', linkUrl: 'https://www.swissinfo.ch/ger/kultur/blog-schweizerisches-nationalmuseum_das-schweizer-milizsystem/45375540', linkName: 'swissinfo', internalLink: '/historische-hintergruende' },
    ];

    const handleSlideChange = (newIndex) => {
        console.log(`Slide changed to index: ${newIndex}`);
    };

    return (
        <div>
            <ContentCenteredVideo
                title="Allgemeines"
                videoSrc={VideoBackground}
                text="Auf dieser Website werden Ihnen die militärischen Gegebenheiten der Schweiz im 2. Weltkrieg nähergebracht. Wir führen Sie durch die verschiedenen Verteidigungsstrategien, stellen wichtige Persönlichkeiten vor und erläutern geschichtliche Hintergründe, damit Sie die Zusammenhänge möglichst gut verstehen."
                videoSourceText="Swiss Armee in WW2"
                videoSourceUrl="https://www.youtube.com/watch?v=5a77ISffxEo"
            />
            <div className="carousel-div">
                <div className="carousel-container">
                    <h2 className="carousel-text">Persönlichkeiten</h2>
                    <Carousel slides={personenSlides} onSlideChange={handleSlideChange} autoSlideInterval={4500} />
                </div>
                <div className="carousel-container">
                    <h2 className="carousel-text">Verteidigung</h2>
                    <Carousel slides={verteidigungSlides} onSlideChange={handleSlideChange} autoSlideInterval={4500} />
                </div>
                <div className="carousel-container">
                    <h2 className="carousel-text">Historische Hintergründe</h2>
                    <Carousel slides={hintergrundSlides} onSlideChange={handleSlideChange} autoSlideInterval={4500} />
                </div>
            </div>
            <ContentDate />
        </div>
    );
}
