import React from 'react';
import Hero from './components/Hero';
import IncidentFeed from './components/IncidentFeed';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/footer';
import RotatingCube from './components/RotatingCube';
import Phone from './components/Phone';

const App = () => (
  <div>
    <Hero />
    <RotatingCube />
    <IncidentFeed />
    <Phone />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
