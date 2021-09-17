import './App.css';
import Navigation from './components/Navigation';
import Tools from './components/Tools'
import Articles from './components/Articles'
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <section id='main-content'>
          <Tools />
          <Articles />
        </section>
      </Router>
    </div>
  );
}

export default App;
