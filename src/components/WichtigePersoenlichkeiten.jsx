import ContentCentered from "./TextFormating/ContentCentered.jsx";
import ContentTextLeft from "./TextFormating/ContentTextLeft.jsx";
import ContentTextRight from "./TextFormating/ContentTextRight.jsx";
import ImageWP from "../assets/Images/WP_persoenlichkeiten.jpg";
import ImageHenriGuisan from "../assets/Images/WichtigePersoenlichkeiten_henry_guisan.jpeg";
import ImageRogerMasson from "../assets/Images/WichtigePersoenlichkeiten_Roger_Masson.png";
import ImageCarlBurckhardt from "../assets/Images/WichtigePersoenlichkeiten_Carl_Burckhardt.jpg";
import ImageSamuelGonard from "../assets/Images/WichtigePersoenlichkeiten_Samuel_Gonard.png";
import ContentDate from "./TextFormating/ContentDate.jsx";

export default function WichtigePersoenlichkeiten() {
    return (
        <div>
            <ContentCentered
                title="Wichtige Persönlichkeiten im Zweiten Weltkrieg"
                text="Im Zweiten Weltkrieg gab es viele Persönlichkeiten, die im Vordergrund standen, wie Hitler oder Mussolini. Auch in der Schweiz gab es Menschen, die für ihr Land kämpften und es bestmöglich vor Gefahren schützten. Aufgeführt sind hier militärische sowie teilweise politische Personen, die sich gegen das deutsche Regime gewehrt hatten oder die Schweiz trotz der schwierigen Zeiten bereicherten."
                imageSrc={ImageWP}
                sourceUrl="https://www.weltkrieg2.de/personen/"
                sourceText="Wichtige Personen"
            />

            <ContentTextLeft
                title="General Henri Guisan"
                text="Henri Guisan wurde am 21. Oktober 1874 in Mézières im Kanton Waadt geboren. Er kam aus einer französischsprachigen Familie mit ländlichen Wurzeln und wuchs in einem Umfeld auf, das von starkem Pflichtgefühl und Werten wie Zusammenhalt geprägt war. Schon früh fühlte er sich stark mit der Schweiz und ihrer Neutralität verbunden, was später sein Handeln als militärischer Führer stark beeinflusste.
    Guisan begann früh eine militärische Karriere und galt als sehr fähiger und vorausschauender Offizier. 1939, kurz vor Beginn des Zweiten Weltkriegs, wurde er zum General der Schweizer Armee ernannt. Seine wichtigste Verteidigungsstrategie war das Reduit-Konzept, bei dem die Truppen im Notfall ins schwer zugängliche Alpengebiet zurückgezogen werden sollten, um dort Widerstand zu leisten. Eine seiner bedeutendsten Aktionen war der Rütli-Rapport am 25. Juli 1940, bei dem er Offiziere auf den Widerstand einschwor. Dieser Akt stärkte den Mut der Armee und Bevölkerung und wurde zu einem Symbol für den Schweizer Verteidigungswillen. Heute gilt Guisan als Nationalheld und seine Ideen prägen das Verteidigungsdenken der Schweiz bis heute."
                imageSrc={ImageHenriGuisan}
                linkUrl="https://www.nzz.ch/schweiz/ein-gluecksfall-in-der-gefaehrlichsten-phase-unserer-geschichte-wie-general-guisan-zum-held-der-schweiz-wurde-und-was-er-uns-heute-noch-sagt-ld.1853528"
                linkText="Wer ist er?"
                imageSourceText="Henri Guisan"
                imageSourceUrl="https://www.nzz.ch/schweiz/ein-gluecksfall-in-der-gefaehrlichsten-phase-unserer-geschichte-wie-general-guisan-zum-held-der-schweiz-wurde-und-was-er-uns-heute-noch-sagt-ld.1853528"
            />

            <ContentTextRight
                title="Oberstbrigadier Roger Masson"
                text="Roger Masson, geboren 1894 in Genf, entstammte einer bürgerlichen Familie und entschied sich nach einem Jurastudium für eine militärische Laufbahn im Schweizer Nachrichtendienst. Während des Krieges leitete Masson den Schweizer Nachrichtendienst und sorgte dafür, dass die Schweiz über die Pläne der Achsenmächte informiert war. Seine Kontakte zu deutschen Offizieren, die dem NS-Regime kritisch gegenüberstanden, halfen ihm, wertvolle Informationen zu beschaffen. Diese halfen der Schweizer Führung, Bedrohungen einzuschätzen und die Neutralität zu wahren.
    Obwohl Masson teils kritisiert wurde für seine Verbindungen zu deutschen Offizieren, war seine Arbeit entscheidend für die Sicherheit der Schweiz. Er demonstrierte die Bedeutung von Spionageabwehr und Kommunikation in Krisenzeiten."
                imageSrc={ImageRogerMasson}
                linkUrl="https://en.wikipedia.org/wiki/Roger_Masson"
                linkText="Wer ist er?"
                imageSourceText="Roger Masson"
                imageSourceUrl="https://en.wikipedia.org/wiki/Roger_Masson"
            />

            <ContentTextLeft
                title="Carl Jacob Burckhardt"
                text="Carl Jacob Burckhardt wurde am 10. September 1891 in Basel geboren. Er stammte aus einer einflussreichen Familie und wählte nach seinem Studium eine Karriere in der Diplomatie. Als Präsident des Internationalen Komitees vom Roten Kreuz (IKRK) war Burckhardt während des Zweiten Weltkriegs für humanitäre Hilfe verantwortlich. Er setzte sich besonders für Kriegsgefangene und Zivilisten ein, die unter den Kriegsfolgen litten.
    Unter seiner Leitung stärkte das IKRK die Einhaltung der Genfer Konventionen und half vielen Menschen unabhängig von ihrer Herkunft. Durch seine Arbeit trug Burckhardt dazu bei, die Neutralität der Schweiz zu bewahren und das Ansehen des IKRK zu stärken. Seine humanitäre Arbeit hatte einen großen Einfluss auf die internationale Gemeinschaft und festigte den Ruf der Schweiz als neutraler und humanitär engagierter Staat."
                imageSrc={ImageCarlBurckhardt}
                linkUrl="https://de.wikipedia.org/wiki/Carl_Jacob_Burckhardt"
                linkText="Wer ist er?"

                imageSourceText="Carl Burckhardt"
                imageSourceUrl="https://de.wikipedia.org/wiki/Carl_Jacob_Burckhardt"
            />

            <ContentTextRight
                title="Oberst Samuel Gonard"
                text="Samuel Gonard, geboren 1896, war während des Zweiten Weltkriegs für die Mobilisierung der Schweizer Armee zuständig. Er stellte sicher, dass die Truppen schnell einsatzbereit waren und über die notwendige Ausrüstung verfügten. Diese Planung war entscheidend, um die Schweiz jederzeit verteidigungsbereit zu halten.
    Als enger Mitarbeiter von General Guisan half Gonard, die Reduit-Strategie umzusetzen und die Ressourcen für eine mögliche Verteidigung im Alpengebiet zu sichern. Seine organisatorischen Fähigkeiten waren essenziell für die Verteidigungsfähigkeit der Schweizer Armee. Gonards Arbeit zeigt die Bedeutung einer gut vorbereiteten Mobilisierung, die bis heute die Schweizer Militärlogistik beeinflusst."
                imageSrc={ImageSamuelGonard}
                linkUrl="https://de-academic.com/dic.nsf/dewiki/1230769"
                linkText="Wer ist er?"
                imageSourceText="Oberst Gonard"
                imageSourceUrl="https://de-academic.com/dic.nsf/dewiki/1230769"

            />
            <ContentDate/>

        </div>

    );
}
