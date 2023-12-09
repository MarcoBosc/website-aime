import styles from './Product.module.css';
import images from '../products-media.json';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  const produtos = [
    {
        "id": 1,
        "media": ["/camiseta-mc.svg", "/camiseta-mc-2.svg", "/camiseta-mc-3.svg", "/camiseta-mc-4.svg"]
    },
    {
        "id": 2,
        "media": ["/camisa-social.svg", "/camisa-social-2.svg", "/camisa-social-3.svg", "/camisa-social-4.svg", "/camisa-social-5.svg"]
    },
    {
        "id": 3,
        "media": ["/camiseta-ml.svg", "/camiseta-ml-2.svg", "/camiseta-ml-3.svg", "/camiseta-ml-4.svg", "/camiseta-ml-5.svg"]
    },
    {
        "id": 4,
        "media": ["/jaleco-brim.svg", "/jaleco-brim-2.svg", "/jaleco-brim-3.svg", "/jaleco-brim-4.svg"]
    },
    {
        "id": 5,
        "media": ["/avental-napa.svg", "/avental-napa-2.svg", "/avental-napa-3.svg", "/avental-napa-4.svg"]
    },
    {
        "id": 6,
        "media": ["/calca-brim.svg", "/calca-brim-2.svg", "/calca-brim-3.svg", "/calca-brim-4.svg"]
    },
    {
        "id": 7,
        "media": ["/jaqueta.svg", "/jaqueta-2.svg", "/jaqueta-3.svg", "/jaqueta-4.svg", "/jaqueta-5.svg"]
    },
    {
        "id": 8,
        "media": ["/jaleco-fem.svg", "/jaleco-fem-2.svg", "/jaleco-fem-3.svg", "/jaleco-fem-4.svg", "/jaleco-fem-5.svg", "/jaleco-fem-6.svg"]
    },
    {
        "id": 9,
        "media": ["/jaleco-masc.svg", "/jaleco-masc-2.svg", "/jaleco-masc-4.svg"]
    },
    {
        "id": 10,
        "media": ["/jaleco-fem-simples.svg", "/jaleco-fem-simples-2.svg", "/jaleco-fem-simples-3.svg"]
    },
    {
        "id": 11,
        "media": ["/colete-obras.svg", "/colete-obras-2.svg", "/colete-obras-3.svg"]
    }
]

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
