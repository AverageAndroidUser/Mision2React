import React from 'react';
import styles from './ModeloER.module.css';

export default function ModeloER() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>IEGresos</h2>
        <h3 className={styles.subtitle}>Diagrama de Clases</h3>
        <div className={styles.content}>
          <img
            className={styles.image}
            src="https://res.cloudinary.com/dpuixn4lq/image/upload/v1751117894/IEGresos_eourck.png"
            alt="Diagrama de Clases"
          />
          <p className={styles.text}>
            Permite a los usuarios registrar, visualizar y gestionar <strong className={styles.ieText}>ingresos</strong> y <strong className={styles.ieText}>egresos</strong> de manera sencilla.
            El sistema clasifica las transacciones, permite su edición y eliminación,
            y muestra un resumen con el saldo actual.
          </p>
        </div>
      </div>
    </div>
  );
}

