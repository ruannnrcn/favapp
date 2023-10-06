import React from "react";
import styles from "./Cabecalho.module.css"

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      <img className={styles.imagemHeader} src={props.logo} />
      <p className={styles.titulo}>{props.titulo}</p>
      <nav>
        <ul className={styles.listHeader}>
          <li className={styles.topicos}>Login</li>
          <li className={styles.topicos}>Cadastrar-se</li>
          <li className={styles.topicos}>Home</li>
          <li className={styles.topicos}>Meus Favoritos</li>
        </ul>
      </nav>
      {/* <Menu/> */}
    </div>
  );
}
