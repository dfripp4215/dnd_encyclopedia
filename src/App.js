import './App.css';
import Navigation from './components/Navigation';
import Tools from './components/Tools'
import MainPages from './components/MainPages'
import { BrowserRouter as Router, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <section id='main-content'>
            <Tools />
            <MainPages />
          </section>
      </Router>
    </div>
  );
}

export default App;
