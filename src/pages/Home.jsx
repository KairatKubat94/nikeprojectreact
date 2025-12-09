import { products } from '../data/products';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

export default function Home({ onAddToCart }) {
  const featured = products.filter(p => p.featured).slice(0, 4);
  const newProducts = products.filter(p => p.new).slice(0, 4);

  return (
    <div className={styles.home}>
      <Hero />
      
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
            <p className={styles.sectionSubtitle}>Выбор наших клиентов</p>
          </div>
          
          <div className={styles.grid}>
            {featured.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>НОВИНКИ</h2>
            <p className={styles.sectionSubtitle}>Самые свежие поступления</p>
          </div>
          
          <div className={styles.grid}>
            {newProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>ДВИЖЕНИЕ — ЭТО ЖИЗНЬ</h2>
          <p className={styles.bannerText}>
            Присоединяйтесь к сообществу людей, которые выбирают активный образ жизни. 
            Качество, стиль и комфорт в каждом товаре.
          </p>
        </div>
      </section>
    </div>
  );
}
