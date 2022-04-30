// Styles
import styles from "./Box.module.scss";

function Box({ item }) {
  return (
    <div className={styles.box_container}>
      <img src={item.image} alt={item.name} />
      <div className={styles.box_texts}>
        <h3>{item.name}</h3>
        <p>{item.value}$</p>
      </div>
    </div>
  );
}

export default Box;
