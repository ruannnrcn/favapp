import React from "react";
import { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nome, setNome] = useState("Google");
  const [important, setImportant] = useState(false);
  const [url, setUrl] = useState("https://www.google.com");
  const [favoritos, setFavoritos] = useState([]);

  function adicionarFavorito(nome, url) {
    let favorito = { nome, url };
    setFavoritos([...favoritos, favorito, important]);
  }

  function handleInput(valor) {
    console.log(valor)
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

      <input
        type="text"
        value={nome}
        onChange={(e) => handleInput(e.target.value)}
      />

      <br />
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <input type="button" onClick={()=>adicionarFavorito(nome, url)} value="adicionar" /> 
      <br></br>

      <input type="checkbox" name="checkbox" onChange={()=>setImportant(!important)}></input>
      <label htmlFor="checkbox">Importante</label>

      <ul>
      {favoritos[0]!=undefined &&
  
         favoritos.map((favorito) => (
           <li key={favorito.nome} style={favorito.important?{color:'red'}:{}}> {favorito.nome} : {favorito.url} </li>
         ))} 
      </ul>

      {/* <ul>
        {favoritos.map((fav) => (
          <li key={fav.url}>
            {fav.nome} <br />
            {fav.url}
          </li>
        ))}
      </ul> */}
      {/* </form> */}
    </div>
  );
};
export default Conteudo;
