import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar.jsx";
import Home from "./components/Home";
import Verteidigung from "./components/Verteidigung";
import WichtigePersoenlichkeiten from "./components/WichtigePersoenlichkeiten.jsx";
import HistorischeHintergruende from "./components/HistorischeHintergruende";
import NotFound from "./components/NotFound.jsx";
import './App.css';

export default function App() {
    return (
        <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true}}>
            <>
                <CustomNavbar/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/verteidigung" element={<Verteidigung />} />
                        <Route path="/wichtige-personlichkeiten" element={<WichtigePersoenlichkeiten />} />
                        <Route path="/historische-hintergruende" element={<HistorischeHintergruende />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </div>
            </>
        </Router>
    );
}


