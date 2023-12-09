import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img src="/logotipo-aime.svg" alt="Logotipo da Aimê Uniformes" className={styles.img} />
        <p>&copy; 2023 Aimê Uniformes. Todos os Direitos Reservados.</p>
    </footer>
  )
}

export default Footer
