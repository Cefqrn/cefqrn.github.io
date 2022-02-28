import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './routes/Home'
import Projects from './routes/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
