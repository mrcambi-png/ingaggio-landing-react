import React, { useState } from 'react';
 
export default function App() {
  const [showPopup, setShowPopup] = useState(null);
 
  const handlePulsante = (nome) => {
    if (nome === 'amichevoli') {
      // Domani: naviga a /amichevoli con React Router
      console.log('Clicca Amichevoli');
    } else {
      // Per gli altri: mostra popup
      setShowPopup(nome);
    }
  };
 
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#2c2c2a' }}>
      {/* HEADER */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ddddd8',
        backgroundColor: '#fff'
      }}>
        <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a7a3c' }}>
          ingaggio.
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1a7a3c'
          }}>
            Accedi
          </button>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#1a7a3c',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Iscriviti
          </button>
        </div>
      </header>
 
      {/* HERO SECTION */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#fff',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#1a7a3c',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Il calcio dilettantistico romano<br />
          <span style={{ color: '#1a7a3c' }}>finalmente</span><br />
          in ordine
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#666662',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Pubblica la tua disponibilità una volta sola, tutti la trovano. Soprattutto quando ti disdicono il giovedì e hai bisogno di trovare qualcuno prima di sabato.
        </p>
      </section>
 
      {/* SEZIONE PULSANTI */}
      <section style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        backgroundColor: '#f5f5f2'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#2c2c2a',
          marginBottom: '2rem'
        }}>
          Cosa vuoi fare oggi?
        </h2>
 
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Pulsante AMICHEVOLI */}
          <button
            onClick={() => handlePulsante('amichevoli')}
            style={{
              padding: '2rem',
              backgroundColor: '#1a7a3c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0d4f25'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1a7a3c'}
          >
            Amichevoli
          </button>
 
          {/* Pulsante CALCIATORI */}
          <button
            onClick={() => handlePulsante('calciatori')}
            style={{
              padding: '2rem',
              backgroundColor: '#1a7a3c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0d4f25'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1a7a3c'}
          >
            Calciatori
          </button>
 
          {/* Pulsante STAFF */}
          <button
            onClick={() => handlePulsante('staff')}
            style={{
              padding: '2rem',
              backgroundColor: '#1a7a3c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0d4f25'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1a7a3c'}
          >
            Staff
          </button>
 
          {/* Pulsante PROVINI */}
          <button
            onClick={() => handlePulsante('provini')}
            style={{
              padding: '2rem',
              backgroundColor: '#1a7a3c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0d4f25'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1a7a3c'}
          >
            Provini
          </button>
 
          {/* Pulsante TORNEI */}
          <button
            onClick={() => handlePulsante('tornei')}
            style={{
              padding: '2rem',
              backgroundColor: '#1a7a3c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0d4f25'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1a7a3c'}
          >
            Tornei
          </button>
        </div>
      </section>
 
      {/* FOOTER */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f5f5f2',
        borderTop: '1px solid #ddddd8',
        fontSize: '14px',
        color: '#666662'
      }}>
        <p>© 2026 Ingaggio — Tutti i diritti riservati</p>
        <p>
          <a href="mailto:info@ingaggio.com" style={{ color: '#1a7a3c', textDecoration: 'none' }}>
            info@ingaggio.com
          </a>
        </p>
      </footer>
 
      {/* POPUP "In Arrivo" */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            <h2 style={{ color: '#1a7a3c', marginBottom: '1rem' }}>
              {showPopup.toUpperCase()}
            </h2>
            <p style={{ color: '#666662', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Questa funzionalità sarà disponibile presto. Ci stiamo lavorando. Grazie.
            </p>
            <button
              onClick={() => setShowPopup(null)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#1a7a3c',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
