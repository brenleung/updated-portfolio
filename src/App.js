import './App.css';
import Home from './Home.js';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
