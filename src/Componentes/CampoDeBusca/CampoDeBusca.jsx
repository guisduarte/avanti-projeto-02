import React, { useState } from 'react';
import styles from './CampoDeBusca.module.css';

const CampoDeBusca = ({ aoBuscar }) => {
  const [input, setInput] = useState('');

  const handleBuscar = () => {
    if (input.trim() !== '') {
      aoBuscar(input);
      setInput('');
    } else {
      aoBuscar(null);
    }
  };

  return (
    <div className={styles.containerBusca}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite um usuário do Github"
      />

      <button className={styles.botaoBuscar} onClick={handleBuscar}>
        <img src="../public/imagens/lupa.png" alt="imagem da lupa" />
      </button>
    </div>
  );
};

export default CampoDeBusca;
