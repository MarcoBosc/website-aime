import styles from './Button.module.css';
import { Link } from 'react-router-dom'; 

const Button = ({ btnName, to }) => {
  return (
    <div className={styles.bgButton}>
        <Link to={to} className={styles.link}>
            <button className={styles.button}>{btnName}</button>
        </Link>        
    </div>

  )
}

export default Button
