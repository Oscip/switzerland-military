import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentDate from "./TextFormating/ContentDate.jsx";

export default function TermsService() {
    return (
        <div className="container my-5 top-space">
            <div className="row">
                <div className="col">
                    <h1 className="mb-5 text-center">Nutzungsbedingungen</h1>

                    <section className="mb-4">
                        <h2 className="h4">1. Einführung</h2>
                        <p>
                            Willkommen auf unserer Website! Diese Nutzungsbedingungen regeln die Nutzung dieser Plattform, die von
                            Oscar Peach und Fabian Beck im Rahmen eines Bildungsprojekts betrieben wird. Mit dem Zugriff auf unsere
                            Website erklären Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie sie sorgfältig durch.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">2. Nutzung der Website</h2>
                        <p>
                            Die Inhalte dieser Website sind ausschließlich für persönliche und nicht-kommerzielle Zwecke bestimmt.
                            Ohne unsere ausdrückliche schriftliche Zustimmung ist das Kopieren, Verbreiten oder anderweitige Nutzen
                            der Inhalte untersagt. Jeglicher Missbrauch kann rechtliche Schritte nach sich ziehen.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">3. Haftungsausschluss</h2>
                        <p>
                            Diese Website dient ausschließlich Bildungszwecken. Wir übernehmen keine Haftung für Schäden, die aus der
                            Nutzung dieser Website entstehen. Dazu zählen, aber nicht ausschließlich, technische Fehler, Datenverlust
                            oder ungenaue Inhalte. Die Nutzung erfolgt auf eigene Verantwortung. Wir karantieren auch in keinerweise
                            das Inhalte der Website der Wahrheit entprechen.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">4. Geistiges Eigentum</h2>
                        <p>
                            Alle Inhalte dieser Website, einschließlich Texte, Bilder und Grafiken, sind urheberrechtlich geschützt.
                            Jegliche nicht genehmigte Nutzung, Vervielfältigung oder Verbreitung der Inhalte kann rechtliche
                            Konsequenzen nach sich ziehen.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">5. Änderungen der Nutzungsbedingungen</h2>
                        <p>
                            Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf
                            dieser Seite veröffentlicht und treten mit ihrer Veröffentlichung in Kraft. Wir empfehlen Ihnen, diese
                            Seite regelmäßig zu überprüfen.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h4">6. Kontakt</h2>
                        <p>
                            Bei Fragen zu diesen Nutzungsbedingungen oder zur Website im Allgemeinen können Sie uns über die auf
                            dieser Website angegebenen Kontaktmöglichkeiten erreichen.
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
