/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext } from "react";
// Styles
import styles from "../scss/index.module.scss";
// Contexts
import { context } from "./_app";

function index() {
  const contextItems = useContext(context);
  const { searchValue, setSearchValue } = contextItems;

  useEffect(() => {
    setSearchValue("");
  }, []);

  return (
    <div className={styles.home_container}> 
      <i className="fa fa-home"></i>
      <h1>This is Home Page. You Can Navigate in Website With Menu</h1>
    </div>
  )
}

export default index