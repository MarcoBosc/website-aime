import styles from './Product.module.css';
import produtos from '../products.json';
import images from '../products-media.json';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  const produto = produtos.find((produto) => produto.id === parseInt(id, 10));

  return (
    <section className={styles.section}>
      {!produto ? (
        <h1>Produto Não encontrado</h1>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.name}>{produto.nome}</h1>
          <p className={styles.p}>Personalize do seu jeito!</p>
          <div className={styles.imgContainer}>
            {images.find((img) => img.id === produto.id)?.media.map((src, index) => (
              <div className={styles.image}><img key={index} src={src} alt={`Product ${index}`} className={styles.img} /> </div>
            ))}
          </div> 

        </div>
      )}
    </section>
  );
};

export default Product;
