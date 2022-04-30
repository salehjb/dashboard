/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext } from "react";
// Styles
import styles from "../scss/my-wallet.module.scss";
// Components
import ContentContainer from "../components/content-container/ContentContainer";
import Box from "../components/box/Box";
// Contexts
import { context } from "./_app";
// Datas
import { wallet } from "../datas";

function myWallet() {
  const contextItems = useContext(context);
  const { searchValue, setSearchValue } = contextItems;

  useEffect(() => {
    setSearchValue("");
  }, []);

  const filteredWallet = wallet.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className={styles.my_wallet_container}>
      <ContentContainer title="My Wallet" filteredItem={filteredWallet}>
        <div className={styles.wallet_boxs_container}>
          {filteredWallet.map((item, index) => (
            <Box item={item} key={index} />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
}

export default myWallet;
