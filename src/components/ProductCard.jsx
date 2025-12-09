import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
  const handleAddClick = (e) => {
    e.preventDefault();
    onAddToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={product.image} 
          alt={product.name}
          className={styles.image}
        />
        {product.new && <span className={styles.badge}>НОВОЕ</span>}
      </div>
      
      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <button 
            className={styles.addBtn}
            onClick={handleAddClick}
          >
            +
          </button>
        </div>
      </div>
    </Link>
  );
}
