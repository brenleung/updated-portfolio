import './App.css';

import Home from './Home.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

import Gluchart from './Gluchart.js';
import ZLS from './ZLS.js';
import IELC from './IELC.js';
import Portfolio from './PersonalPortfolio.js';
import Asteroids from './Asteroids.js';
import AgePredictor from './AgePredictor.js';
import EDMO from './EDMO.js';
import TKH from './TKH.js';
import Whizkidz from './Whizkidz.js';

import Navbar from './components/navbar.js';
import ScrollToTop from './ScrollToTop.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/gluchart" element={<Gluchart/>}/>
            <Route path="/projects/zls-redesign" element={<ZLS/>}/>
            <Route path="/projects/ielc" element={<IELC/>}/>
            <Route path="/projects/portfolio" element={<Portfolio/>}/>
            <Route path="/projects/asteroids" element={<Asteroids/>}/>
            <Route path="/projects/age-predictor" element={<AgePredictor/>}/>
            <Route path="/projects/edmo" element={<EDMO/>}/>
            <Route path="/projects/techknowhow" element={<TKH/>}/>
            <Route path="/projects/whizkidz" element={<Whizkidz/>}/>
            <Route path="/about-me" element={<AboutMe/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
