import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          ОБУЙ СВОЮ МЕЧТУ
        </h1>
        <p className={styles.subtitle}>
          Спортивная одежда и обувь нового поколения для активных людей
        </p>
        <Link to="/products" className={styles.cta}>
          СМОТРЕТЬ КАТАЛОГ
        </Link>
      </div>
      
      <div className={styles.imageBlock}>
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop" 
          alt="Hero" 
          className={styles.image}
        />
      </div>
    </section>
  );
}
