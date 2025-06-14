import styles from "./Header.module.css";
import img from "../assets/cat.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.centralContainer}>
        <div className={styles.containerImg}>
          <img src={img}
          alt="gatos e suas etnias"
          />
        </div>
        <h1 className={styles.tema}>gatos e suas etnias</h1>
      </div>
    </header>
  );
}