import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header({ cart }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src="/logo.png" alt="Logo" />
      </div>

      <h1>Minha Loja</h1>

      <div className={styles.cartInfo}>
        🛒 {cart.length} itens
      </div>

      <Link to="/carrinho" className={styles.link}>
        <ShoppingBasket />
      </Link>
    </div>
  );
}
