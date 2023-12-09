import styles from './Contato.module.css';

import React, { useState, useEffect  } from 'react';

import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import emailjs from '@emailjs/browser';


const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [pedido, setPedido] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    emailjs.init("FQr6YZVqXBYZyLoxa");
  }, []);

  function handleSubmit(e){
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: pedido,
      email: email
    }

    emailjs.send("service_shc6zqn", "template_tmrvugn", templateParams, "FQr6YZVqXBYZyLoxa")
    .then((res) => {
      console.log("EMAIL ENVIADO", res.status, res.text);
      setName('');
      setEmail('');
      setPedido('');
      setEnviado(true);
    }, (err) => {
        console.log("ERRO: ", err);
        setErro(true);
    });
  }

  return (
    <section className={styles.body}>
      <div className={styles.left}>
        <div className={styles.textLeft}>
          <h1 className={styles.h1}>Contate-nos</h1>
          <p className={styles.p}>Rua Duque de Caxias, 41</p>
          <p className={styles.p}>Erechim, Rio Grande do Sul</p>
          <p className={styles.p}>CEP: 99700-274</p>
          <p className={styles.p}>Telefone: +55 54 98400-2057</p>
          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/aimeuniformes" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.socialLogo} />
            </a>
            <a href="https://api.whatsapp.com/send?54984265406" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className={styles.socialLogo} />
            </a>
            <a href="mailto:aimeuniformes@gmail.com">
              <FaEnvelope className={styles.socialLogo} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
           <p className={styles.inputTitle}>Seja mais um de nossos parceiros.<br/>Invista na sua identidade visual!</p>
           {enviado && <p className={styles.success}>Email enviado com sucesso!</p>}
           {erro && <p className={styles.error}>Ocorreu um erro ao enviar o email.</p>}
          <input type="text" className={styles.input} placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} value={name} required />
          <input type="email" className={styles.input} placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email} required />
          <textarea name="message" id="" cols="30" rows="10" className={styles.input} placeholder='Digite seu pedido' onChange={(e) => setPedido(e.target.value)} value={pedido} required ></textarea>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script type="text/javascript">
      </script>
    </section>
  );
};

export default Contato;
