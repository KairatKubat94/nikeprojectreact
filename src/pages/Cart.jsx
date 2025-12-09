import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

export default function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity > 0) {
      onUpdateQuantity(product, newQuantity);
    }
  };

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <h1 className={styles.title}>КОРЗИНА</h1>

        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>Ваша корзина пуста</p>
            <p className={styles.emptySubtext}>Начните с добавления товара из каталога</p>
            <Link to="/products" className={styles.continueShopping}>
              НАЧАТЬ ПОКУПКИ
            </Link>
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.items}>
              <div className={styles.itemsHeader}>
                <span>Товар</span>
                <span>Цена</span>
                <span>Количество</span>
                <span>Сумма</span>
                <span></span>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className={styles.itemInfo}>
                    <Link to={`/product/${item.id}`} className={styles.itemName}>
                      {item.name}
                    </Link>
                    <span className={styles.itemCategory}>{item.category}</span>
                  </div>

                  <span className={styles.price}>${item.price}</span>

                  <div className={styles.quantity}>
                    <button 
                      className={styles.quantityBtn}
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    >
                      −
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item, parseInt(e.target.value) || 1)}
                      className={styles.quantityInput}
                    />
                    <button 
                      className={styles.quantityBtn}
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <span className={styles.sum}>${(item.price * item.quantity).toFixed(2)}</span>

                  <button
                    className={styles.removeBtn}
                    onClick={() => onRemoveFromCart(item.id)}
                    title="Удалить из корзины"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <h2>ИТОГО</h2>
              
              <div className={styles.summaryRow}>
                <span>Товаров:</span>
                <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Стоимость товаров:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Доставка:</span>
                <span>Бесплатно</span>
              </div>

              <div className={styles.totalRow}>
                <span>ВСЕГО К ОПЛАТЕ:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className={styles.checkoutBtn}>
                ОФОРМИТЬ ЗАКАЗ
              </button>

              <Link to="/products" className={styles.continueLink}>
                Продолжить покупки
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
