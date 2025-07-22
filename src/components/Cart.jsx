import styles from './Cart.module.css';
import { useState } from "react";
import { Link } from "react-router-dom"; // Adicione esta linha
import { ShoppingBasket, Home } from "lucide-react"; // Adicione o ícone Home

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
    if (delta > 0) {
      // Adiciona mais uma unidade do produto
      const product = cartItems.find(p => p.id === id);
      if (product) {
        setCart([...cart, { ...product }]);
      }
    } else {
      // Remove uma unidade do produto
      const idx = cart.findIndex(p => p.id === id);
      if (idx !== -1) {
        const newCart = [...cart];
        newCart.splice(idx, 1); // Remove apenas uma unidade
        setCart(newCart);
      }
    }
  }

  function handleRemoveAll() {
    setCart([]);
  }

  function handleRemoveItem(id) {
    // Remove todas as ocorrências do produto com o id informado
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <div className={styles.cart}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <h2>Shopping Cart</h2>
        <Link to="/" className={styles.cartButton}>
          <Home size={20} style={{ verticalAlign: "middle", marginRight: "6px" }} />
          Voltar para a loja
        </Link>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((product) => (
              <li key={product.id} className={styles.cartItem}>
                <img src={product.thumbnail} alt={product.title} className={styles.cartImg} />
                <span className={styles.cartTitle}>{product.title}</span>
                <span className={styles.cartPrice}>
                  R$ {(product.price * product.qty).toFixed(2)}
                </span>
                <div className={styles.cartQty}>
                  <button
                    className={styles.cartButton}
                    onClick={() => handleQtyChange(product.id, -1)}
                    disabled={product.qty <= 1}
                  >
                    -
                  </button>
                  <span>{product.qty}</span>
                  <button
                    className={styles.cartButton}
                    onClick={() => handleQtyChange(product.id, 1)}
                  >
                    +
                  </button>
                  {/* Botão "Remover item" removido */}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}