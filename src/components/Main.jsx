import styles from "./Main.module.css";
import persa from "../assets/persa.jpeg";
import cats from "../assets/cats.png";
import Sphynx from "../assets/Sphynx.jpeg";
import gato from "../assets/gato.jpeg";
import puma from "../assets/puma.jpg";


export function Main() {
  return (
    <div className={styles.container}>
      <header className={styles.header1} />
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={persa} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>My Text 0</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda repudiandae 
                  ex iste ducimus aut at eius corporis debitis, magni eos quasi velit, accusamus veniam? Et 
                  atque quam excepturi numquam?</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={cats} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>My Text 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nesciunt inventore labore nihil, 
                  amet praesentium rerum dolorum distinctio officiis officia quo aspernatur quas expedita harum 
                  tempore quisquam delectus quaerat temporibus!</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={Sphynx} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>My Text 2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi eligendi delectus 
                  deleniti quaerat ea mollitia blanditiis adipisci temporibus nesciunt, libero tempora aliquam 
                  sit? Fugit maxime alias sit odit laborum.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={gato} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>My Text 3</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam maiores ullam accusamus vel 
                  ratione dignissimos ex, voluptatem labore id accusantium nam. Saepe illo libero nihil odit 
                  perferendis fugiat, enim odio.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={puma} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>My Text 4</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil repellendus, blanditiis 
                  consequatur esse voluptatibus tempore, quod atque doloribus quae dolor cumque veritatis quas 
                  quisquam officia eum deleniti totam ad!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}