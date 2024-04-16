import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Misc from "./components/Misc";
import Research from "./components/Research";
import Tech from "./components/Tech";
import About from "./components/About";
import Teaching from "./components/Teaching";
import Writing from "./components/Writing";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/fun" element={<Misc />} />
                <Route path="/research" element={<Research />} />
                <Route path="/technology" element={<Tech />} />
                <Route path="/about" element={<About />} />
                <Route path="/teach" element={<Teaching />} />
                <Route path="/write" element={<Writing />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
);
}

export default App;
