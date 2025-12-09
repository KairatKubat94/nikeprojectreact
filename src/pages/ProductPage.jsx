import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import styles from './ProductPage.module.css';

export default function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Товар не найден</h1>
        <p>Возможно, он был удален или ссылка неверна.</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <a href="/">Главная</a>
          <span>/</span>
          <a href="/products">Каталог</a>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className={styles.product}>
          <div className={styles.image}>
            <img src={product.image} alt={product.name} />
            {product.new && <span className={styles.badge}>НОВОЕ</span>}
          </div>

          <div className={styles.info}>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.name}>{product.name}</h1>
            
            <div className={styles.price}>
              <span className={styles.priceValue}>${product.price}</span>
            </div>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.sizes}>
              <label className={styles.sizeLabel}>Выберите размер:</label>
              <div className={styles.sizeOptions}>
                {product.category === 'shoes' ? (
                  ['36', '37', '38', '39', '40', '41', '42', '43', '44'].map(size => (
                    <button key={size} className={styles.sizeBtn}>{size}</button>
                  ))
                ) : (
                  ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} className={styles.sizeBtn}>{size}</button>
                  ))
                )}
              </div>
            </div>

            <button className={styles.addBtn} onClick={handleAddToCart}>
              ДОБАВИТЬ В КОРЗИНУ
            </button>

            <div className={styles.details}>
              <h3>Детали товара</h3>
              <ul>
                <li>Высокое качество материалов</li>
                <li>Удаляет влагу во время активности</li>
                <li>Удобная посадка</li>
                <li>Современный минималистичный дизайн</li>
                <li>Доступна доставка по всей стране</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className={styles.related}>
          <div className={styles.container}>
            <h2>ПОХОЖИЕ ТОВАРЫ</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map(p => (
                <a key={p.id} href={`/product/${p.id}`} className={styles.relatedCard}>
                  <img src={p.image} alt={p.name} />
                  <h4>{p.name}</h4>
                  <span>${p.price}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
