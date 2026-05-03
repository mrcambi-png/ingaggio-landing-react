export default function PulsantiCTA({ onPulsanteClick, nomeUtente }) {
    const pulsanti = ['amichevoli', 'calciatori', 'staff', 'provini', 'tornei'];
  
    return (
      <section className="cta-section">
        <p className="cta-greeting">
          Ciao{nomeUtente ? ` ${nomeUtente}` : ''}!
        </p>
        
        <h2 className="cta-title">Cosa vuoi fare oggi?</h2>
        
        <div className="cta-grid">
          {pulsanti.map((nome) => (
            <button
              key={nome}
              onClick={() => onPulsanteClick(nome)}
              className="cta-button"
            >
              {nome}
            </button>
          ))}
        </div>
      </section>
    );
  }