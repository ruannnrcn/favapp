import React from "react";
import styles from "./Cabecalho.module.css";

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
        
      <img src={props.logo} />
      <p>{props.titulo}</p>
      <p>{props.subtitulo}</p>
    </div>
  );
}
