import React from "react";
import styles from "./Cabecalho.module.css"
import { Link } from "react-router-dom";

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      <img className={styles.imagemHeader} src={props.logo} />
      <p className={styles.titulo}>{props.titulo}</p>
      <nav>
        <ul className={styles.listHeader}>
          <li className={styles.topicos}> <Link to={'/'}>Home</Link></li>
          <li className={styles.topicos}> <Link to={'/login'}>Login</Link></li>
          <li className={styles.topicos}> <Link to={'/cadastro'}>Cadastrar-se</Link></li>
        </ul>
      </nav>
      {/* <Menu/> */}
    </div>
  );
}
