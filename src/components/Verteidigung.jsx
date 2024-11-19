import ContentCentered from "./TextFormating/ContentCentered.jsx";
import ContentTextLeft from "./TextFormating/ContentTextLeft.jsx";
import ContentTextRight from "./TextFormating/ContentTextRight.jsx";
import ImageBrucke from "../assets/Images/Verteidigung_brucke.jpg";
import ImageEuschelsbunker from "../assets/Images/Verteidigung_Euschelsbunker.jpg";
import ImageReduitPlan from "../assets/Images/Verteidigung_Reduit_Schweiz_Neu.jpg";
import ImageVerteidigung from "../assets/Images/Verteidigung_verteidigung.jpg";
import ContentDate from "./TextFormating/ContentDate.jsx";

export default function Verteidigung() {
    return (
        <div>
            <ContentCentered
                title="Die Verteidigung der Schweiz im Zweiten Weltkrieg"
                text="Im Zweiten Weltkrieg stand die Schweiz unter grossem Druck. Umgeben von den Achsenmächten Deutschland und Italien war die neutrale Schweiz ständig bedroht. Die Regierung und die Armee bereiteten sich deshalb auf eine mögliche Invasion vor und arbeiteten an einer starken Verteidigungsstrategie, die das Land für Feinde unattraktiv machen sollte. Im Mittelpunkt dieser Strategie stand das sogenannte Alpen-Reduit, das viele militärische Massnahmen und Bauprojekte beinhaltete. Ziel war es, das Land für Angreifer so schwierig und teuer wie möglich zu machen. Die Verteidigungsstrategie umfasste unter anderem befestigte Bunkeranlagen in den Bergen und Pläne, bei einem Angriff strategische Brücken und Strassen zu sprengen. Die Schweizer Armee war auf Rückzug und Verteidigung ausgerichtet, um das Überleben der Bevölkerung und des Staates zu sichern."
                imageSrc={ImageVerteidigung}
                linkUrl="https://www.youtube.com/playlist?list=PLyxIylscfwI34y0BQvQOcE-oSfRciYets"
                linkText="playlist Verteidigung"
                imageSourceText="Grenzbesetzung"
                imageSourceUrl="https://brienzer-dorfgeschichte.ch/acht-eis-detailansicht/grenzbesetzung.html"
            />

            <ContentTextLeft
                title="Das Alpen-Reduit"
                text="Das Alpen-Reduit war die wichtigste Verteidigungsstrategie der Schweiz im Zweiten Weltkrieg. Entwickelt wurde es von General Henri Guisan und seiner Armeeführung, um die Schweiz im Falle eines Angriffs vor allem in den Alpen zu verteidigen. Die Idee war, sich im Ernstfall in die schwer zugänglichen und gut geschützten Alpen zurückzuziehen und dort einen langwierigen Widerstand zu organisieren. Die Alpen boten viele natürliche Vorteile: Sie waren für grosse Truppen schwer erreichbar und boten Schutz vor Panzern und Flugzeugen. Im Alpen-Reduit wurden zahlreiche Bunker und Festungen gebaut, die nicht nur schwer zugänglich waren, sondern auch durch dicke Wände und Tarnung geschützt. Die Verteidigungslinie verlief durch das zentrale Alpenmassiv und deckte wichtige Pässe und Täler ab. In diesen Bunkern und Befestigungen wurden Vorräte für lange Belagerungen gelagert – Lebensmittel, Munition und Wasser. Ziel war es, die Schweizer Armee über lange Zeit kampffähig zu halten, auch wenn die restlichen Teile des Landes besetzt wären. So wollte die Schweiz den Feind entmutigen, einen Angriff zu wagen."
                imageSrc={ImageReduitPlan}
                linkUrl="https://hls-dhs-dss.ch/de/articles/008696/2010-08-20/"
                linkText="Réduit"
                imageSourceText="Réduit Bild"
                imageSourceUrl="https://de.wikipedia.org/wiki/Schweizer_Réduit"
            />

            <ContentTextRight
                title="Bunkeranlagen"
                text="Bunkeranlagen waren ein zentraler Bestandteil der Schweizer Verteidigungsstrategie und wurden in grosser Zahl im Alpengebiet und anderen wichtigen Regionen gebaut. Diese Bunker waren oft geschickt in die Natur integriert und von aussen kaum zu erkennen. Viele waren als 'Tarnbauten' in die Landschaft eingefügt und tarnten sich als gewöhnliche Scheunen, Felsformationen oder Wohnhäuser. Die Bunker waren so konzipiert, dass sie auch schweren Bombenangriffen standhalten konnten. In den Bunkern wurden Maschinengewehre, Kanonen und teilweise sogar grössere Geschütze installiert. Einige Bunker waren durch Tunnel und unterirdische Räume miteinander verbunden, sodass Soldaten sich schnell und sicher zwischen den Stellungen bewegen konnten. Die Bunkeranlagen wurden als Verteidigungsstellungen geplant, die eine angreifende Armee aufhalten und so viel Schaden wie möglich zufügen sollten. Durch die Bunker konnte die Schweiz ihre Verteidigungsfähigkeit verbessern und potenziellen Angreifern zeigen, dass jede Invasion teuer und gefährlich sein würde."
                imageSrc={ImageEuschelsbunker}
                linkUrl="https://www.nationalgeographic.de/geschichte-und-kultur/2021/02/reduit-das-geheime-militaerbunker-netzwerk-der-schweizer-alpen"
                linkText="Militärbunker-Netzwerk"
                imageSourceText="Versteckte Bunker"
                imageSourceUrl="https://schweiz.fandom.com/de/wiki/Schweizer_Reduit"
            />

            <ContentTextLeft
                title="Brückensprengungen"
                text="Ein weiterer wichtiger Teil der Verteidigungsstrategie waren die Brückensprengungen. Die Schweizer Armee hatte an strategisch wichtigen Punkten im ganzen Land Sprengladungen an Brücken und Tunneln vorbereitet, um sie im Falle eines Angriffs sofort zerstören zu können. Diese Massnahmen sollten verhindern, dass der Feind sich schnell durch das Land bewegen konnte. Die Idee hinter den Brückensprengungen war einfach, aber effektiv: Die Schweiz ist ein gebirgiges Land mit vielen Tälern und engen Pässen. Ohne Brücken und Tunnel würden Strassen und Bahnlinien unterbrochen, was eine schnelle Truppenbewegung unmöglich machen würde. Wenn eine feindliche Armee in die Schweiz einmarschiert wäre, hätten die gesprengten Brücken ihren Vormarsch stark verlangsamt und viele strategisch wichtige Routen blockiert. Die Verteidiger hätten mehr Zeit gewonnen, um sich in die Alpen zurückzuziehen und das Alpen-Reduit zu aktivieren."
                imageSrc={ImageBrucke}
                linkUrl="https://de.wikipedia.org/wiki/Sprengobjekt"
                linkText="Sprengobjekt"
                imageSourceText="Bruckensprengung"
                imageSourceUrl="https://www.badische-zeitung.de/schweizer-haben-nicht-nur-bruecken-mit-tnt-bestueckt"
            />

            <div className="d-flex justify-content-center align-items-start p-3 mb-3">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Df5Rv42uQSg?si=PlcOokRx35qrdZ-P"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="video-style-iframe shadow rounded"
                ></iframe>
            </div>
            <ContentDate/>

        </div>
    );
}




