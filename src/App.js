import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Misc from "./components/Misc";
import Investing from "./components/Investing";
import Research from "./components/Research";
import Tech from "./components/Tech";
import About from "./components/About";
import Teaching from "./components/Teaching";
import Mixes from "./components/Mixes";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/fun" element={<Misc />} />
                <Route path="/invest" element={<Investing />} />
                <Route path="/research" element={<Research />} />
                <Route path="/technology" element={<Tech />} />
                <Route path="/about" element={<About />} />
                <Route path="/teach" element={<Teaching />} />
                <Route path="/mix" element={<Mixes />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
);
}

export default App;
