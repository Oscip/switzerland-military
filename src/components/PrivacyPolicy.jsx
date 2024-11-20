import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentDate from "./TextFormating/ContentDate.jsx";

export default function PrivacyPolicy() {
    return (
        <div className="container my-5 top-space">
            <div className="row">
                <div className="col">
                    <h1 className="mb-5 text-center">Datenschutzerklärung</h1>

                    <section className="mb-4">
                        <h2 className="h4">1. Einführung</h2>
                        <p>
                            Willkommen auf unserer Website! Wir, Oscar Peach und Fabian Beck, betreiben diese Plattform als Teil eines
                            Bildungsprojekts am der KBW. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese
                            Datenschutzerklärung erklärt, welche Daten wir sammeln, wie wir sie nutzen und welche Rechte Ihnen
                            zustehen.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">2. Verantwortliche Stelle</h2>
                        <p>
                            Verantwortlich für diese Website sind Schüler der KBW. Sie dient ausschließlich Bildungszwecken und ist
                            nicht dauerhaft erreichbar. Bei Fragen können Sie sich an unsere Projektbetreuer wenden.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">3. Welche Daten wir erheben</h2>
                        <ul>
                            <li>
                                <strong>Technische Daten:</strong> Diese umfassen Ihre IP-Adresse, den verwendeten Browsertyp und das
                                Betriebssystem.
                            </li>
                            <li>
                                <strong>Nutzungsdaten:</strong> Informationen darüber, wie Sie unsere Website nutzen, z. B. welche
                                Seiten Sie besuchen.
                            </li>
                        </ul>
                        <p>Diese Daten werden nur anonymisiert verarbeitet.</p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">4. Zwecke der Datenerhebung</h2>
                        <p>Die erhobenen Daten nutzen wir ausschließlich zu folgenden Zwecken:</p>
                        <ul>
                            <li>Optimierung der Darstellung und Funktion unserer Website.</li>
                            <li>Erfüllung technischer Anforderungen Ihres Browsers.</li>
                        </ul>
                        <p>Es werden keine personenbezogenen Profile erstellt.</p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">5. Cookies und Tracking</h2>
                        <p>
                            Unsere Website setzt keine Cookies oder andere Tracking-Technologien ein, die persönliche Daten
                            speichern. Sollten Standard-Cookies durch Ihren Browser gesetzt werden, können Sie diese in Ihren
                            Browser-Einstellungen deaktivieren.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">6. Weitergabe von Daten an Dritte</h2>
                        <p>Wir teilen Ihre Daten nicht mit Dritten, da keine direkten Daten von uns erhoben werden.</p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">7. Sicherheit Ihrer Daten</h2>
                        <p>
                            Obwohl wir uns um den Schutz Ihrer Daten bemühen, können wir die Sicherheit der Datenübertragung über das
                            Internet nicht vollständig garantieren. Bitte achten Sie darauf, keine sensiblen Daten auf dieser Website
                            preiszugeben.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">8. Änderungen dieser Datenschutzerklärung</h2>
                        <p>
                            Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um neuen rechtlichen Vorgaben oder
                            technischen Entwicklungen Rechnung zu tragen. Besuchen Sie diese Seite regelmäßig, um sich über die
                            aktuelle Version zu informieren.
                        </p>
                    </section>

                    <footer className="mt-5 text-center">
                        <p>© {new Date().getFullYear()} Bildungsprojekt von Oscar Peach und Fabian Beck</p>
                    </footer>
                </div>
            </div>
            <ContentDate/>
        </div>
    );
}
