import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PulsantiCTA from './components/PulsantiCTA';
import Footer from './components/Footer';
import './index.css';
 
export default function App() {
  const [showPopup, setShowPopup] = useState(null);
  const [nomeUtente, setNomeUtente] = useState(''); // Domani lo prendi dal login

  const handlePulsante = (nome) => {
    if (nome === 'amichevoli') {
      console.log('Clicca Amichevoli');
    } else {
      setShowPopup(nome);
    }
  };
 
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <PulsantiCTA 
        onPulsanteClick={handlePulsante} 
        nomeUtente={nomeUtente} 
      />
      <Footer />
 
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2 className="popup-title">
              {showPopup.toUpperCase()}
            </h2>
            <p className="popup-text">
              Questa funzionalità sarà disponibile presto. Ci stiamo lavorando. Grazie.
            </p>
            <button
              onClick={() => setShowPopup(null)}
              className="popup-button"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}