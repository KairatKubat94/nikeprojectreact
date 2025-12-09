import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>О STRIDE</h3>
          <p className={styles.text}>
            Современный спортивный бренд, вдохновляющий людей активным образом жизни через качественную спортивную одежду и обувь.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Помощь</h3>
          <ul className={styles.links}>
            <li><a href="#help">Контакты</a></li>
            <li><a href="#faq">F.A.Q</a></li>
            <li><a href="#shipping">Доставка</a></li>
            <li><a href="#returns">Возврат товара</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Навигация</h3>
          <ul className={styles.links}>
            <li><a href="/">Главная</a></li>
            <li><a href="/products">Каталог</a></li>
            <li><a href="/about">О компании</a></li>
            <li><a href="/cart">Корзина</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Контакты</h3>
          <p className={styles.text}>Email: hello@stride.com</p>
          <p className={styles.text}>Тел: +7 (999) 123-45-67</p>
          <p className={styles.text}>Время работы: Пн-Пт 10:00-20:00</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} STRIDE. Все права защищены.</p>
        <div className={styles.legal}>
          <a href="#privacy">Политика конфиденциальности</a>
          <span>|</span>
          <a href="#terms">Условия использования</a>
        </div>
      </div>
    </footer>
  );
}
