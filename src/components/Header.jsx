import styles from "./Header.module.css";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <h1>TJA Megastore</h1>
      </Link>
      <nav className={styles.navLinks}>
        <Link to="/login" className={`${styles.link} ${styles.navButton}`}>
          🔑 <span className={styles.linkText}>Login</span>
        </Link>
        <Link to="/cadastro" className={`${styles.link} ${styles.navButton}`}>
          📝 <span className={styles.linkText}>Cadastro</span>
        </Link>
        <Link to="/gerenciar" className={`${styles.link} ${styles.navButton}`}>
          🛠️ <span className={styles.linkText}>Gerenciar Produtos</span>
        </Link>
        <Link to="/cart" className={`${styles.link} ${styles.navButton}`}>
          <div
            className={styles.cartInfo}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            🛒
            <ShoppingBasket size={36} />
            <div className={styles.cartIcon}>
              {cart.length > 0 && (
                <span className={styles.cartCount}>
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
            <span className={styles.linkText}>Carrinho</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}