import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
                <div className={styles.title}>
                    <h1 className={styles.h1}>UM POUCO SOBRE NÓS</h1>
                </div>
                <div className={styles.aboutDiv}>
                    <div className={styles.centerDiv}>
                        <img src="/love.svg" alt="" className={styles.aboutImg}/>
                        <h2 className={styles.h2}>AMOR PELO TRABALHO</h2>
                        <p className={styles.p}>A nossa empresa é apaixonada por cada detalhe do seu trabalho, dedicando-se incansavelmente para proporcionar aos clientes uma experiência única.</p>
                    </div>

                </div>
                <div className={styles.aboutDiv}>
                    <div className={styles.centerDiv}>
                        <img src="/speed.svg" alt="" className={styles.aboutImg}/>
                        <h2 className={styles.h2}>QUALIDADE E AGILIDADE</h2>
                        <p className={styles.p}>Somos conhecidos por nossa notável agilidade na criação e entrega de produtos, sem comprometer a qualidade que nos define.</p>                        
                    </div>

                </div>  
                <div className={styles.aboutDiv}>
                    <div className={styles.centerDiv}>
                        <img src="/nature.svg" alt="" className={styles.aboutImg}/>
                        <h2 className={styles.h2}>INOVAÇÃO SUSTENTÁVEL</h2>
                        <p className={styles.p}>Conduzimos nossa empresa com um compromisso com a inovação sustentável, integrando práticas e materiais ecoconscientes para oferecer soluções modernas e responsáveis aos nossos clientes.</p>                        
                    </div>

                </div>  
                <div className={styles.aboutDiv}>
                    <div className={styles.centerDiv}>
                       <img src="/identity.svg" alt="" className={styles.aboutImg}/>
                        <h2 className={styles.h2}>VESTINDO IDENTIDADES</h2>
                        <p className={styles.p}>Vemos cada uniforme como uma expressão única da identidade corporativa de nossos clientes. Ao combinar design inovador com funcionalidade, criamos uniformes que não apenas vestem, mas comunicam a essência e a missão de cada empresa.</p>
                    </div>
                </div>  
            </section>
  )
}

export default About
