import { Outlet, Link } from "react-router-dom";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>IEGresos</h1>
        <h3 className={styles.subtitle}>By. Juan Diego Ascanio</h3>
        <Link to="/ModeloER" className={styles.button}>Ver Más</Link>
      </div>
      <Outlet />
    </div>
  );
}

