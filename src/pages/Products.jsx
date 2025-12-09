import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './Products.module.css';

export default function Products({ onAddToCart }) {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = ['all', 'apparel', 'shoes', 'accessories'];
  const categoryLabels = {
    all: 'ВСЕ',
    apparel: 'ОДЕЖДА',
    shoes: 'ОБУВЬ',
    accessories: 'АКСЕССУАРЫ'
  };

  return (
    <div className={styles.products}>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>КАТАЛОГ</h1>
          <p className={styles.subtitle}>Полный ассортимент спортивной одежды и обуви</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              onClick={() => setFilter(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className={styles.resultsInfo}>
          <p>Найдено товаров: {filtered.length}</p>
        </div>

        <div className={styles.grid}>
          {filtered.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
