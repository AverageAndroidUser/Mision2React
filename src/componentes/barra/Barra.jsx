import { Link } from 'react-router-dom'
import style from './Barra.module.css'

export default function Barra() {
  return (
    <nav className = {style.barra}>
      <ul className = {style.menu}>
        <li className={style.item}>
          <Link to="/Home" className={style.link}> {/*Retorna en base a lo que se definio en las Routes del App */}
            <div className={style.iconWrapper}>
              <img src='https://res.cloudinary.com/dpuixn4lq/image/upload/v1751125866/casa_n8nmio.png' alt='home' className = {style.icon}></img>
            </div>
            <span className={style.tooltip}>Home</span>
          </Link>
          </li>
        <li className={style.item}>
          <Link to="/ModeloER" className={style.link}>
            <div className={style.iconWrapper}>
              <img src='https://res.cloudinary.com/dpuixn4lq/image/upload/v1751125866/diagrama-de-flujo_gn0fjj.png' alt='modeloER' className = {style.icon}></img>  
            </div>
            <span className={style.tooltip}>ModeloER</span>
          </Link>
        </li>
        <li className={style.item}>
          <Link to="/Pruebas" className={style.link}>
            <div className={style.iconWrapper}>
              <img src='https://res.cloudinary.com/dpuixn4lq/image/upload/v1751125866/examen_kbyli1.png' alt='pruebas' className = {style.icon}></img>
            </div>
            <span className={style.tooltip}>Pruebas</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
