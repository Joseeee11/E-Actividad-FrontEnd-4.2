import React, { useState, useEffect } from 'react';
import './CSS/BotonModoOscuro.css'; 

const BotonModoOscuro = () => {
  const modoOscuroInicial = localStorage.getItem('modoOscuro') === 'true';
  const [modoOscuro, setModoOscuro] = useState(modoOscuroInicial);

  useEffect(() => {
    document.body.classList.toggle('modo-oscuro', modoOscuro);
    document.querySelector('header').classList.toggle('modo-oscuro', modoOscuro);
    document.querySelectorAll('pestanas').forEach((element) => {
      element.classList.toggle('modo-oscuro', modoOscuro);
    });
    document.querySelectorAll('button').forEach((element) => {
      element.classList.toggle('modo-oscuro', modoOscuro);
    });
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <button className="boton-modo-oscuro" onClick={toggleModoOscuro}>
      {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default BotonModoOscuro;


