import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>STRIDE</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <Link to="/products" className={styles.navLink}>Каталог</Link>
          <Link to="/about" className={styles.navLink}>О нас</Link>
        </nav>
        
        <Link to="/cart" className={styles.cartLink}>
          <span className={styles.cartIcon}>🛒</span>
          <span className={styles.cartText}>Корзина</span>
        </Link>
      </div>
    </header>
  );
}
