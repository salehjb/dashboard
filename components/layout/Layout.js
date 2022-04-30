// Styles
import styles from "./Layout.module.scss";
// Components
import DashboardMenu from "../menu/Menu";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <div className={styles.layout_container}>
      <DashboardMenu />
      <div calssName={styles.fixed_components}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
