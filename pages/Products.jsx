import styles from './Products.module.css';
import produtos from '../products.json';
import {Link} from 'react-router-dom';

const Products = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Veja alguns de nossos produtos</h1>
      <div className={styles.container}>
        {produtos.map((produto) => (
            <div key={produto.id}>
              <Link to={`/products/${produto.id}`} className={styles.link} >
                <div className={styles.productCard}>
                  <img src={produto.src} alt={produto.nome} className={styles.img}/>
                  <div className={styles.text}>
                    <h2 className={styles.h2}>{produto.nome}</h2>
                    <p className={styles.size}>{produto.tamanhosDisponiveis.join(', ')}</p>
                    <p className={styles.description}>{produto.Description.join(' ')}</p>
                  </div>
                  <div className={styles.btnDiv}>
                    <Link to={"/contact"} className={styles.link}>
                      <button className={styles.button}>Orçamento</button>
                    </Link>                  
                  </div>
                </div>             
              </Link>
            </div>    
          ))}
      </div>
    </section>
  )
}

export default Products
