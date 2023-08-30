import './App.css';
import Home from './Home.js';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/projects" element={<Home/>}/>
            <Route path="/about-me" element={<Home/>}/>
            <Route path="/resume" element={<Home/>}/>
            <Route path="/contact" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
