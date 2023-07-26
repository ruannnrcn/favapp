import React from "react";
import styles from "./Cabecalho.module.css";

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      <img src={props.logo} />
      <p className={styles.titulo}>{props.titulo}</p>
      <nav>
        <ul>
          <li>Home</li>
          <li>Meus Favoritos</li>
          <li>Sair</li>
        </ul>
      </nav>
      {/* <Menu/> */}
    </div>
  );
}
