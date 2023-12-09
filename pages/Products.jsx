import styles from './Products.module.css';
import {Link} from 'react-router-dom';

const Products = () => {
  const produtos = [
    {
      "id": 1,
      "nome": "Camiseta Manga Curta",
      "src": "camiseta-mc.svg",
      "tamanhosDisponiveis": ["Tamanhos Personalizados"],
      "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça. Disponível com ou sem faixa refletiva."]
    },
    {
      "id": 2,
      "nome": "Camisa Social",
      "src": "camisa-social.svg",
      "tamanhosDisponiveis": ["Tamanhos Personalizados"],
      "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça."]
    },
    {
        "id": 3,
        "nome": "Camiseta Manga Longa",
        "src": "camiseta-ml.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça. Disponível com ou sem faixa refletiva."]
      },
      {
        "id": 4,
        "nome": "Jaleco Brim Manga Longa",
        "src": "jaleco-brim.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça. Disponível com ou sem faixa refletiva."]
      },
      {
        "id": 5,
        "nome": "Avental em Napa",
        "src": "avental-napa.svg",
        "tamanhosDisponiveis": ["0,70 x 1m", "0,70 x 1,2m"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça. Disponível com ou sem faixa refletiva."]
      },
      {
        "id": 6,
        "nome": "Calça Brim",
        "src": "calca-brim.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de 50 são acrescentados 10 reais ao valor da peça. Disponível com ou sem faixa refletiva."]
      },
      {
        "id": 7,
        "nome": "Jaqueta",
        "src": "jaqueta.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça. Disponível com ou sem faixa refletiva."]
      },
      {
        "id": 8,
        "nome": "Jaleco Hospitalar Gola Padre Feminino",
        "src": "jaleco-fem.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça."]
      },
      {
        "id": 9,
        "nome": "Jaleco Hospitalar Masculino",
        "src": "jaleco-masc.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça."]
      },
      {
        "id": 10,
        "nome": "Jaleco Hospitalar Feminino",
        "src": "jaleco-fem-simples.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça."]
      },
      {
        "id": 11,
        "nome": "Colete Obras",
        "src": "colete-obras.svg",
        "tamanhosDisponiveis": ["Tamanhos Personalizados"],
        "Description": ["Acima de XGG são acrescentados 10 reais ao valor da peça. Disponível com ou sem faixa refletiva."]
      }
  ]


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
