import React from 'react';
import Hero from './components/Hero/Hero';
import Philosophy from './components/Philosophy/Philosophy';
import MissionVision from './components/MissionVision/MissionVision';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Philosophy />
      <MissionVision />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
