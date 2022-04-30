import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// Styles
import styles from "./Menu.module.scss";
// Datas
import { menuItems } from "../../datas"

function DashboardMenu() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const pathname = useRouter().pathname;
  const active = menuItems.findIndex((item) => item.path === pathname);

  function burgerMenuHandler() {
    setIsMobileMenu(!isMobileMenu);
  }

  function closeBurgerMenu() {
    setIsMobileMenu(false);
  }

  return (
    <>
      <div className={styles.dashboard_burger_menu} onClick={burgerMenuHandler}>
        {isMobileMenu ? (
          <i className="fas fa-times" />
        ) : (
          <i className="fas fa-bars" />
        )}
      </div>
      <div
        className={`${styles.menu_content_container} ${
          isMobileMenu && styles.active
        }`}
      >
        <div className={styles.dashboard_menu_first_side}>
          <h1>Wallet</h1>
          <div className={styles.dashboard_menu_profile}>
            <i className="fa-solid fa-user"></i>
            <div className={styles.dashboard_menu_profile_info}>
              <span className={styles.dashboard_menu_profile_info_name}>
                Saleh Jalili
              </span>
              <span className={styles.dashboard_menu_profile_info_stack}>
                Front End Developer
              </span>
            </div>
          </div>
        </div>
        <div className={styles.dashboard_menu_items}>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={active === index ? styles.active : null}
                onClick={closeBurgerMenu}
              >
                <Link href={item.path}>
                  <a>
                    <i className={item.icon}></i>
                    <span>{item.text}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DashboardMenu;
