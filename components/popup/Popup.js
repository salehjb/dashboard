import { useContext } from "react";
// Styles
import styles from "./Popup.module.scss";
// Contexts
import { context } from "../../pages/_app";

function Popup({ items, title }) {
  const popup = useContext(context);

  const { showPopup, setShowPopup } = popup;

  return (
    <>
      <div className={`${styles.popup} ${showPopup ? styles.active : null}`}>
        <div className={styles.popup_header}>
          <h2>{title}</h2>
          <div onClick={() => setShowPopup(false)}>&times;</div>
        </div>
        <div className={styles.items_container}>
          {items &&
            items.map((item, index) => (
              <div key={index} className={styles.item_container}>
                <h3>{item.title}</h3>
                <div className={styles.dates}>
                  <span className={styles.date}>{item.date}</span>
                  <span className={styles.time}>{item.time}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

export default Popup;
