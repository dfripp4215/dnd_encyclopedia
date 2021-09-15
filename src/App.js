import './App.css';
import Navigation from './components/Navigation';
import Tools from './components/Tools'
import { Articles } from './components/Articles'

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id='main-content'>
        <Tools />
        <Articles />
      </section>
    </div>
  );
}

export default App;
