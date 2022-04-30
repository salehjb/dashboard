/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext } from "react";
// Styles
import styles from "../scss/transaction.module.scss";
// Components
import ContentContainer from "../components/content-container/ContentContainer";
// Contexts
import { context } from "./_app";
// Datas
import { transactions } from "../datas";
import TransactionComponent from "../components/transaction-component/TransactionComponent";

function transaction() {
  const contextItems = useContext(context);
  const { searchValue, setSearchValue } = contextItems;

  useEffect(() => {
    setSearchValue("");
  }, []);

  const filteredTransactions = transactions.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const totalProfit = transactions.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <div className={styles.transaction_container}>
      <ContentContainer title="Transaction" filteredItem={filteredTransactions}>
        <div className={styles.transaction_total_profit}>
          <div>Total Profit: {totalProfit}</div>
          {totalProfit > 0 ? (
            <i className="fa fa-caret-up" style={{ color: "green" }}></i>
          ) : (
            <i className="fa fa-caret-down" style={{ color: "red" }}></i>
          )}
        </div>
        {filteredTransactions.map((transaction, index) => {
          return (
            <>
              <TransactionComponent transaction={transaction} key={index} />
            </>
          );
        })}
      </ContentContainer>
    </div>
  );
}

export default transaction;
