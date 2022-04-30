/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext } from "react";
// Styles
import styles from "../scss/crypto.module.scss";
// Component
import ContentContainer from "../components/content-container/ContentContainer";
import CoinComponent from "../components/coin-component/CoinComponent";
// Context
import { context } from "./_app";

function crypto({ coins }) {
  const contextItems = useContext(context);
  const { searchValue, setSearchValue } = contextItems;

  useEffect(() => {
    setSearchValue("");
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchValue.toLowerCase());
  })

  return (
    <div className={styles.crypto_container}>
      <ContentContainer title="Crypto" filteredItem={filteredCoins}>
        {filteredCoins.map((coin) => {
          return (
            <div className={styles.coin} key={coin.id}>
              <CoinComponent coin={coin} />
            </div>
          );
        })}
      </ContentContainer>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const coins = await response.json();

  return {
    props: {
      coins,
    },
  };
};

export default crypto;
