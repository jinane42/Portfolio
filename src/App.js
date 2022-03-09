import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './components/about'
import Skills from './components/skills'
import Banner from './components/banner'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './components/home';
import Experiences from './components/experiences';

function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/experiences" element={<Experiences />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
