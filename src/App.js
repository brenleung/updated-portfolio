import logo from './imgs/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Hi! 👋 My name is Brendan.</h3>
      <p>I specialize in frontend development, fullstack development, and education.</p>
      <p>This site is a work in progress. Tune back in the future for more updates!</p>
      <p>For now.. check out my <a href="https://github.com/brenleung" target="_blank">GitHub</a></p>
      <p>Or my <a href="https://linkedin.com/in/brenleung" target="_blank">LinkedIn</a></p>
      <p>Or to contact me directly, <a href="mailto:brendansleung@gmail.com">email me!</a></p>
    </div>
  );
}

export default App;
