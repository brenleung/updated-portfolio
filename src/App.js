import './App.css';

import Home from './Home.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

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
            <Route path="/about-me" element={<AboutMe/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
