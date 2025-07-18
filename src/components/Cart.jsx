import styles from './Cart.module.css';
import { useState } from "react";

export function Cart({ cart, setCart }) {
  // Agrupa os produtos por id e conta a quantidade
  const cartItems = cart.reduce((acc, product) => {
    const found = acc.find(item => item.id === product.id);
    if (found) {
      found.qty += 1;
    } else {
      acc.push({ ...product, qty: 1 });
    }
    return acc;
  }, []);

  function handleQtyChange(id, delta) {
    let newCart = [...cart];
    if (delta > 0) {
      // Adiciona mais um produto
      const product = cart.find(p => p.id === id);
      setCart([...cart, product]);
    } else {
      // Remove um produto
      const idx = newCart.findIndex(p => p.id === id);
      if (idx !== -1) {
        newCart.splice(idx, 1);
        setCart(newCart);
      }
    }
  }

  function handleRemoveAll() {
    setCart([]);
  }

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((product) => (
              <li key={product.id} className={styles.cartItem}>
                <img src={product.thumbnail} alt={product.title} className={styles.cartImg} />
                <span className={styles.cartTitle}>{product.title}</span>
                <span className={styles.cartPrice}>R$ {product.price.toFixed(2)}</span>
                <div className={styles.cartQty}>
                  <button className={styles.cartButton} onClick={() => handleQtyChange(product.id, -1)}>-</button>
                  <span>{product.qty}</span>
                  <button className={styles.cartButton} onClick={() => handleQtyChange(product.id, 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <button className={styles.cartButton} onClick={handleRemoveAll}>
            Remover todos os itens
          </button>
        </>
      )}
    </div>
  );
}