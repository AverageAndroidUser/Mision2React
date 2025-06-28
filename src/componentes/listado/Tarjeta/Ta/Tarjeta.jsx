import React from 'react';
import styles from './Tarjeta.module.css';

export const Tarjeta = ({ titulo, imagen, verMas }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{titulo}</div>
      <div className={styles.body}>
        <img src={imagen} alt="ImagenPrueba" className={styles.image} />
      </div>
      <div className={styles.footer}>
        <button className={styles.button} onClick={verMas}>Ver más</button>
      </div>
    </div>
  );
};

