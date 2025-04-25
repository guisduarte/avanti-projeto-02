import React, { useState } from 'react';
import styles from './Card.module.css';
import CampoDeBusca from '../CampoDeBusca/CampoDeBusca';

const Card = () => {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const buscarUsuario = async (usuario) => {
    setDados(null);
    setErro(null);
    
    if(usuario === null) {
      setErro('Por favor, digite um nome de usuário para buscar.');
      return;
    }
    setCarregando(true);
    try {
      const resposta = await fetch(`https://api.github.com/users/${usuario}`);
      if (!resposta.ok)
        throw new Error(
          'Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente',
        );
      const resultado = await resposta.json();
      setDados(resultado);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.containerTitulo}>
          <img src="../imagens/logo-github.png" alt="Logo do Github" />
          <h1>Perfil</h1>
          <img
            src="../imagens/nome-github.png"
            alt="Imagem com o nome do Github"
          />
        </div>
        <CampoDeBusca aoBuscar={buscarUsuario} />

        <div
          className={`${styles.containerPerfil} ${
            dados || erro || carregando ? styles.containerPerfilVisivel : ''
          }`}
        >
          
          {carregando && (
            <div className={styles.spinnerContainer}>
              <p className={styles.carregando}>Carregando...</p>
              <div className={styles.spinner}></div>
            </div>
          )}

          {erro && !carregando && <p className={styles.erro}>{erro}</p>}
          {dados && !carregando && (
            <>
              <div className={styles.containerFotoPerfil}>
                <img src={dados.avatar_url} alt="Foto do Perfil" />
              </div>
              <div className={styles.containerTextoPerfil}>
                <h2>{dados.name}</h2>
                <p>{dados.bio}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
