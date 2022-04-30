import { useState, createContext } from "react";
// Styles
import "../scss/globals.scss";
// Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";
// Components
import Layout from "../components/layout/Layout";

export const context = createContext();

function MyApp({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const value = {
    showPopup,
    setShowPopup,
    searchValue,
    setSearchValue,
  };

  return (
    <context.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </context.Provider>
  );
}

export default MyApp;
