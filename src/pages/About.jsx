import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Kairat</h1>
          <p className={styles.subtitle}>Бренд, вдохновляющий активный образ жизни</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>НАША ИСТОРИЯ</h2>
          <p>
            Че смеетесь пацаны Движение это жизнь.
          </p>
          <p>
            Мы верим, что каждый человек заслуживает качественной, стильной спортивной одежды, 
            которая будет поддерживать его на пути к личным целям и достижениям.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>НАША МИССИЯ</h2>
          <p>
            Вдохновлять людей жить активнее через инновационные спортивные товары, 
            которые сочетают передовые технологии с чистым, минималистичным дизайном.
          </p>
        </section>

        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>НАШИ ЦЕННОСТИ</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Качество</h3>
              <p>Мы используем только лучшие материалы и строгий контроль качества.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Инновация</h3>
              <p>Постоянно развиваем новые технологии для лучшей производительности.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Минимализм</h3>
              <p>Чистый дизайн без лишнего — суть нашего стиля.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Сообщество</h3>
              <p>Мы строим сообщество активных людей, воодушевленных спортом.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>ПОЧЕМУ ВЫБИРАЮТ STRIDE?</h2>
          <ul className={styles.reasons}>
            <li>✓ Легкие и удобные материалы</li>
            <li>✓ Инновационные технологии влагоотведения</li>
            <li>✓ Современный минималистичный дизайн</li>
            <li>✓ Справедливые цены</li>
            <li>✓ Быстрая доставка по всей стране</li>
            <li>✓ Дружелюбная служба поддержки</li>
            <li>✓ Гарантия качества на все товары</li>
            <li>✓ Экологичные материалы</li>
          </ul>
        </section>

        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>СВЯЖИТЕСЬ С НАМИ</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>Email</h3>
              <p>hello@stride.com</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Телефон</h3>
              <p>+7 (999) 123-45-67</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Часы работы</h3>
              <p>Пн-Пт: 10:00 - 20:00</p>
              <p>Сб-Вс: 12:00 - 18:00</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
