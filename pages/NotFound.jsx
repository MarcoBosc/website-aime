import styles from './NotFound.module.css';

import Button from '../components/Button';

const NotFound = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.map}>Está precisando de um mapa?</h1>
      <div className={styles.error}>
        <h1 className={styles.h1}>4</h1>
        <img src="/rounded-aime-logo.svg" alt="Logotipo da Aimê Uniformes" className={styles.img}/>
        <h1 className={styles.h1}>4</h1>
      </div>
      <h1 className={styles.h2}>Página não encontrada.</h1>
      <Button btnName={"Voltar"} to={"/"}/>
    </section>
  )
}

export default NotFound
