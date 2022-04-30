import styles from "./TransactionComponent.module.scss";

function TransactionComponent({ transaction }) {
  return (
    <div className={styles.transaction_item}>
      <img src={transaction.image} alt="image" />
      <div className={styles.transaction_item_title}>{transaction.name}</div>
      <div className={styles.transaction_content}>
        <div className={styles.transaction_item_amount}>
          {transaction.amount}$
          {transaction.amount > 0 ? (
            <i className="fa fa-caret-up" style={{ color: "green" }}></i>
          ) : (
            <i className="fa fa-caret-down" style={{ color: "red" }}></i>
          )}
        </div>
        <div className={styles.transaction_item_date}>{transaction.date}</div>
        <div className={styles.transaction_item_time}>{transaction.time}</div>
      </div>
    </div>
  );
}

export default TransactionComponent;
