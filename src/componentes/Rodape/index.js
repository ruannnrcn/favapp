import React from "react";
import styles from "./Rodape.module.css";

export default function Rodape(props) {
  return (
    <div className={styles.footer}>
      <p>
        {props.dataAtual}
        {Datenow()}
      </p>
      <div className={styles.icons}>
        <img className={styles.facebook} src={props.facebook} />
        <img className={styles.instagram} src={props.instagram} />
        <img className={styles.twitter} src={props.twitter} />
        <img className={styles.whatsapp} src={props.whatsapp} />
      </div>
    </div>
  );
}

export function Datenow() {
  const today = new Date();
  console.log(today);
  return today.toLocaleDateString();
}
