import styles from './Cart.module.css';
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

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

  // Função para atualizar a quantidade de um produto
  function handleQtyChange(id, delta) {
    const product = cart.find(p => p.id === id);

    if (!product && delta > 0) return; // Se não existir, não faz nada

    let newCart = [...cart];

    if (delta > 0) {
      // Adiciona uma nova ocorrência do produto ao carrinho
      newCart.push(product);
    } else {
      // Remove UMA ocorrência do produto do carrinho
      const indexToRemove = newCart.findIndex(p => p.id === id);
      if (indexToRemove !== -1) {
        newCart.splice(indexToRemove, 1);
      }
    }

    setCart(newCart);
  }

  // Função para remover todas as ocorrências de um produto
  function handleRemoveItem(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  // Função para remover todos os itens
  function handleRemoveAll() {
    setCart([]);
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
                </div>
                <button
                  className={styles.cartButton}
                  onClick={() => handleRemoveItem(product.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remover Item
                </button>
              </li>
            ))}
          </ul>

          <button onClick={handleRemoveAll} className={styles.cartButton}>
            Remover todos os itens
          </button>

          <div style={{ marginTop: "20px" }}>
            <Link to="/" className={styles.cartButton}>
              <Home size={20} style={{ verticalAlign: "middle", marginRight: "6px" }} />
              Voltar para a página inicial
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
