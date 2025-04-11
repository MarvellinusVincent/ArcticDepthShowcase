import React from 'react';
import Header from './components/Header';
import ThemeShowcase from './components/ThemeShowcase';
import Features from './components/Features';
import Palette from './components/Palette';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <Background>
      <Header />
      <ThemeShowcase />
      <Features />
      <Palette />
      <Footer />
    </Background>
  );
}

export default App;