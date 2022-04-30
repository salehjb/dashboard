import styles from "./CoinComponent.module.scss";

function CoinComponent({ coin }) {
  return (
    <div className={styles.coin_container}>
      <img src={coin.image} alt="coin image" />
      <div className={styles.coin_name}>{coin.name}</div>
      <div className={styles.coin_symbol}>{coin.symbol}</div>
      <div className={styles.coin_content}>
        <div className={styles.coin_marketcap}>{coin.market_cap}$</div>
        <div className={styles.coin_price}>{coin.current_price}$</div>
      </div>
    </div>
  );
}

export default CoinComponent;
