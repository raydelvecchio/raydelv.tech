import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Misc from "./routes/Misc";
import Research from "./routes/Research";
import Tech from "./routes/Tech";
import About from "./routes/About";
import Teaching from "./routes/Teaching";
import Writing from "./routes/Writing";
import Gallery from "./routes/Gallery";
import galleries from "./galleries";

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
                {galleries.map((gallery) => (
                    <Route key={gallery.slug} path={`/${gallery.slug}`} element={<Gallery gallery={gallery} />} />
                ))}
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
);
}

export default App;
