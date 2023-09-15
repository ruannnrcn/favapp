import React from "react";
import { useState } from "react";
import styles from "./Conteudo.module.css";

const Estados = () => {
  const [nome, setNome] = useState("Google");
  const [url, setUrl] = useState("https://www.google.com");
  const [favoritos, setFavoritos] = useState([]);

  function adicionarFavorito(nome, url) {
    let favorito = { nome, url };
    setFavoritos([...favoritos, favorito]);
    console.log(favoritos);
  }

  function handleInput(valor) {
    setNome(valor);
  }
  return (
    <div className={styles.main}>
      <h2 className={styles.favoritosTitle}>Lista de Favoritos:</h2>

      <div className={styles.containerDados}>
        <div className={styles.containerDadosIndividual}>
          <h1 className={styles.fontTitle}>Nome do Site:</h1>
          <h2>{nome}</h2>
        </div>
        <div className={styles.containerDadosIndividual}>
          <h1 className={styles.fontTitle}>Url do Site:</h1>
          <h2>{url}</h2>
        </div>
      </div>

      {/* <form onSubmit={()=>alert("Site favorito adicionado!")}> */}
      <input
        type="text"
        value={nome}
        onChange={(e) => handleInput(e.target.value)}
      />
      <br />
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={() => adicionarFavorito(nome, url)}>
        Adicionar Favorito
      </button>
      <ul>
        {favoritos.map((fav) => (
          <li key={fav.url}>
            {fav.nome} <br />
            {fav.url}
          </li>
        ))}
      </ul>
      {/* </form> */}
    </div>
  );
};
export default Estados;
