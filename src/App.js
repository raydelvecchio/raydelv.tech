import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
);
}

export default App;
