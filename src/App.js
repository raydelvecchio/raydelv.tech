import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Misc from "./components/Misc";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/fun" element={<Misc />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
);
}

export default App;
