import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ContentCentered from "./TextFormating/ContentCentered.jsx";
import ContentTextLeft from "./TextFormating/ContentTextLeft.jsx";
import ContentTextRight from "./TextFormating/ContentTextRight.jsx";
import grenzwacht from "../assets/Images/grenzwacht.jpg";
import Armee from "../assets/Images/HistorischeHintergrunde_schweizer_armee.jpg";
import Neutralitaet from "../assets/Images/HistorischeHintergrunde_neutralitat.jpeg";
import Flüchtlinge from "../assets/Images/HistorischeHintergrunde_fluchtlinge.jpg";
import ContentTextSided from "./TextFormating/ContentTextSided.jsx";
import ContentDate from "./TextFormating/ContentDate.jsx";

export default function Verteidigung() {

    return (
        <div>
            <ContentCentered
                title="Warum die Schweiz im Zweiten Weltkrieg nicht angegriffen wurde"
                text="Die Schweiz wird oft als kleines, neutrales Land angesehen, das Konflikten aus dem Weg geht. Doch im Zweiten Weltkrieg war die Schweiz mehr als nur ein unbeteiligter Beobachter. Mit cleveren Strategien, wirtschaftlichem Geschick und einer klaren Diplomatie schaffte es unser Land, sich sogar vor Hitler zu schützen und das mitten in Europa. Bis heute ist die Schweiz für ihre Neutralität bekannt und spielt eine wichtige Rolle als Vermittlerin in der Welt."
                imageSrc={grenzwacht}
                linkUrl="https://www.youtube.com/watch?v=7efKE0RIC00"
                linkText="Wieso kein Angriff?"
                sourceUrl="https://geschichtedergegenwart.ch/stacheldraht-und-volles-boot-georg-kreis/"
                sourceText="Grenzkontrolle"
            />
            <ContentTextRight
                title="Die Schweizer Armee: Klein, aber schlau"
                text="Die Schweiz hatte keine riesige Armee, aber einen Plan, der es in sich hatte: das „Alpen-Réduit“. Falls die Schweiz angegriffen worden wäre, hätten sich unsere Truppen in die Alpen zurückgezogen. Dort gab es versteckte Bunker, Artilleriestellungen und Vorräte. Diese Strategie machte es für jeden Angreifer fast unmöglich, die Schweiz komplett zu erobern.

Auch heute setzen wir auf Verteidigung. Unsere Armee besteht aus Bürgerinnen und Bürgern, die als Milizsoldaten bereitstehen, wenn es nötig wird. Das zeigt, dass wir nicht aggressiv sein müssen, um uns zu schützen - wir sind vorbereitet, ohne dabei anderen zu schaden."
                imageSrc={Armee}
                linkUrl="https://de.wikipedia.org/wiki/Schweiz_im_Zweiten_Weltkrieg"
                linkText="Schweiz im WW2"
                imageSourceText="Aufgestellte Kadeten"
                imageSourceUrl="https://www.swissinfo.ch/ger/kultur/blog-schweizerisches-nationalmuseum_das-schweizer-milizsystem/45375540"
            />
            <ContentTextLeft
                title="Neutralität: Unsere Schutzmauer"
                text="Seit 1815 ist die Schweiz neutral, was bedeutet, dass wir uns aus Kriegen heraushalten. Während des Zweiten Weltkriegs wurde diese Neutralität konsequent umgesetzt. Unsere Soldaten wurden sowohl an die deutsche als auch an die französische Grenze geschickt, um zu zeigen, dass wir niemanden bevorzugen.

Diese Haltung gilt bis heute. Wir sind kein Mitglied der NATO und schicken keine Soldaten in Konfliktzonen. Stattdessen helfen wir auf andere Weise, zum Beispiel durch das Internationale Komitee vom Roten Kreuz, das in Genf seinen Sitz hat. Dank unserer Neutralität können wir in Konflikten oft vermitteln und Lösungen finden, wo andere scheitern."
                imageSrc={Neutralitaet}
                linkUrl="https://www.eda.admin.ch/eda/de/home/aussenpolitik/voelkerrecht/neutralitaet.html"
                linkText="Schweizer Neutralität"
                imageSourceText="Leuchtturm der Neutralität"
                imageSourceUrl="https://www.swissinfo.ch/ger/kultur/blog-schweizerisches-nationalmuseum_das-schweizer-milizsystem/45375540"
            />
            <ContentTextRight
                title="Die Sache mit den Flüchtlingen"
                text="Während des Zweiten Weltkriegs suchten viele Menschen Schutz in der Schweiz, besonders Jüdinnen und Juden, die vor den Nazis flüchteten. Anfangs nahmen wir viele auf, doch 1942 wurden die Grenzen strenger kontrolliert, und zahlreiche Schutzsuchende wurden abgewiesen. Die Behörden argumentierten, unser Land sei zu klein, um noch mehr Menschen aufzunehmen. Tragischerweise wurden viele der Abgewiesenen später in Konzentrationslager deportiert und dort ermordet.

Das war ein dunkles Kapitel in unserer Geschichte und wurde zu Recht kritisiert. Heute versucht die Schweiz, aus diesen Fehlern zu lernen. Wir unterstützen Organisationen wie das UNHCR und helfen Flüchtlingen weltweit. Trotzdem bleibt Migration ein schwieriges Thema, über das es immer wieder Diskussionen gibt, wie viel Hilfe möglich ist."
                imageSrc={Flüchtlinge}
                linkUrl="https://www.uek.ch/de/schlussbericht/Publikationen/Zusammenfassungenpdf/17d.pdf"
                linkText="Flüchtlinge in der Schweiz"

                imageSourceText="Flüchtlinge wandern ein"
                imageSourceUrl="https://www.bar.admin.ch/bar/de/home/service-publikationen/verwaltungsgeschichte/quellen/fluechtlingspolitik-zweiter-weltkrieg--rechenschaftsberichte.html"
            />

            <ContentTextSided
                rightTitle="Was wir daraus lernen können"
                rightText={<><p><p>Die Geschichte zeigt, dass Neutralität, Verteidigungsbereitschaft und Diplomatie ein Land
                    sicher machen können - sogar ein kleines wie die Schweiz.</p>
                    <ul> <li><strong>Neutralität kann stark machen:</strong> Sie hat uns geholfen, Konflikte zu vermeiden und trotzdem Einfluss zu
                        haben.</li><br/>

                        <li><strong>Aus der Vergangenheit lernen:</strong> Unsere Fehler in der Flüchtlingspolitik erinnern uns daran, dass
                    humanitäre Verantwortung wichtig ist. Gerade in einer Welt, in der so viele Menschen auf der Flucht
                    sind, müssen wir Solidarität zeigen.</li><br/>

                            <li><strong>Vorbereitung zählt:</strong> Auch wenn wir klein sind, können wir mit klugen Strategien und guter Planung
                    sicher durch schwierige Zeiten kommen.</li></ul><br/>

                    Die Schweiz hat im Zweiten Weltkrieg gezeigt, dass es möglich ist, ein Gleichgewicht zwischen
                    Selbstschutz und Verantwortung zu finden. Das ist eine Herausforderung, die uns auch heute noch
                    beschäftigt - und zeigt, wie wichtig es ist, als kleines Land grosse Ideen zu haben.</p></>}
                leftTitle="Warum Hitler die Schweiz nicht angegriffen hat"
                leftText={<p>Dass Hitler die Schweiz nicht angegriffen hat, lag an mehreren Gründen:<br/><br/>

                    <ul>
                        <li><strong>Die Alpen als Festung:</strong> Die Berge waren ein riesiges Hindernis, und unser
                            Réduit-Plan machte eine
                            Invasion zu riskant und teuer.
                        </li>
                        <br/>

                        <li><strong>Wirtschaftliche Interessen:</strong> Die Schweiz war ein wichtiger Handelspartner
                            für Deutschland. Unsere
                            Banken waren ein sicherer Ort für Gold und Vermögenswerte - auch für die Nazis.
                        </li>
                        <br/>

                        <li><strong>Neutralität:</strong> Weil wir uns aus allem heraushielten und keine Bedrohung
                            darstellten, hatte Hitler
                            keinen Grund, uns anzugreifen.
                        </li>
                        <br/>

                        <li><strong> strategischer Nutzen:</strong> Die Besetzung der Schweiz hätte Hitler mehr Probleme
                            als Vorteile
                            gebracht.
                        </li>
                    </ul>

                    Unsere Strategie, vorbereitet und neutral zu sein, hat uns letztendlich geschützt. Dies wurde nur danke dem
                    nicht übereilligem Militärs zu verdanken, ihre
                    ausserordentliche strategie in militäry und politik haben auch guten beitrag zu unserem erfolg geleistet</p>}
                linkUrl="https://chatgpt.com" linkText="ChatGPT"
            />
            <ContentDate/>
        </div>
    );
}
