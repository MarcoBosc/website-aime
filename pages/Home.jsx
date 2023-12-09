import React from 'react';
import styles from './Home.module.css';
import Button from '../components/Button';
import About from '../components/About';
import { Link } from 'react-router-dom'; 
import Footer from '../components/Footer';

const Home = () => {
    return (
        <body className={styles.section}>
            <section className={styles.VideoContent}>
                <video
                    muted
                    playsInline  
                    autoPlay     
                    loop
                    data-poster="/costura.svg"
                    className={styles.video}  
                    poster="/costura.svg"
                >
                    <source
                        data-src="/video.mp4"
                        type="video/mp4"
                        src="video.mp4"
                    />
                </video>
            </section>
            <section className={styles.services}>
                <Button btnName={"Conheça nossos produtos"} to={"/products"}/>
            </section>
            <section className={styles.about}>
                <About />
                <button className={styles.contactBtn}>
                    <Link to="/contact" className={styles.link}>
                        Entre em contato
                    </Link>   
                </button>   
            </section>

            <section className={styles.customers}>
                <div className={styles.title}>
                    <h1 className={styles.h1}>ALGUNS DE NOSSOS PARCEIROS</h1>
                </div>
                <div className={styles.partners}>
                    <div className={styles.centerDiv}>
                        <img src="/andreeta.svg" alt="Logotipo do parceiro Andreeta" className={styles.imgCustomer} />
                    </div>
                    <div className={styles.centerDiv}>
                        <img src="/tracado.svg" alt="Logotipo do parceiro Tracado" className={styles.imgCustomer} />
                    </div>
                    <div className={styles.centerDiv}>
                        <img src="/master.svg" alt="Logotipo do parceiro Master" className={styles.imgCustomer} />
                    </div>
                    <div className={styles.centerDiv}>
                        <img src="/pressag.svg" alt="Logotipo do parceiro Pressag" className={styles.imgCustomer} />
                    </div>
                </div>
                <Button btnName={"Seja um parceiro"} to={"/contact"}/>
            </section>
        </body>
    );

};

export default Home;
