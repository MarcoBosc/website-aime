import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <img src="/logotipo-aime.svg" alt="Logotipo da Aimê Uniformes" className={styles.img} />
        <h1 className={styles.h1} >Aimê Uniformes</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/contact">Contato</NavLink>
    </nav>
  )
}

export default Navbar
