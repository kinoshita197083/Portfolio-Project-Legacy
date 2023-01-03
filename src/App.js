// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer/footer';
import HomePage from './Pages/Home/home';
import ProjectPage from './Pages/Projects/projects';
import ResumePage from './Pages/Resume/resume';
import AboutPage from './Pages/About/about'
// import HeroSection from './HeroSection/hero_section';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Projects' element={<ProjectPage />} />
          <Route path='/Resume' element={<ResumePage />} />
          <Route path='/About' element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
