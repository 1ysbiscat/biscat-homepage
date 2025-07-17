import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CompanyIntro from './components/sections/CompanyIntro';
import Philosophy from './components/sections/Philosophy';
import Culture from './components/sections/Culture';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { useSectionScroll } from './hooks/useSectionScroll';

// 홈페이지 컴포넌트
const HomePage: React.FC = () => {
  useSectionScroll();
  
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/company-intro" element={<CompanyIntro />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
