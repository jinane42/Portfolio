import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './components/about'
import Skills from './components/skills'
import Banner from './components/banner'
import Footer from './components/footer'
import Navbar from './components/skills'
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>

        <Banner />
        <Navbar />

        <Routes>
        <Route exact path="/home" component={() => <Home />} ></Route>
          <Route exact path="/about" component={() => <About />} ></Route>
          <Route exact path="/skills" component={() => <Skills />}></Route>
        </Routes>
        <Home/>
        <Footer />


      </Router>
    </div>
  );
}

export default App;
