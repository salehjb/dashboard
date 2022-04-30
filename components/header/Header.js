import { useContext, useState } from "react";
// Styles
import styles from "./Header.module.scss";
// Contexts
import { context } from "../../pages/_app";
import Popup from "../popup/Popup";
// Datas
import { notifications, messages, gifts } from "../../datas";

function Navbar() {
  const [popupDetails, setPopupDetails] = useState({
    title: "",
    items: [],
  });

  const contextItems = useContext(context);
  const { showPopup, setShowPopup, searchValue, setSearchValue } = contextItems;

  const menuItems = [
    {
      name: "Notifications",
      items: notifications,
      icon: "fa-solid fa-bell",
      notifNumber: "3",
    },
    {
      name: "Messages",
      items: messages,
      icon: "fa-solid fa-message",
      notifNumber: "1",
    },
    {
      name: "Gifts",
      items: gifts,
      icon: "fa-solid fa-gift",
      notifNumber: "4",
    },
  ];

  function popupHandler(items, name) {
    setPopupDetails({
      title: name,
      items: items,
    });
    setShowPopup(true);
  }

  function searchHandler(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className={styles.navbar_container}>
      <div className={styles.right_side}>
        <div className={styles.navbar_search_box}>
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className={styles.navbar_options}>
        <ul>
          {menuItems.map((item, index) => {
            const { items, name } = item;
            return (
              <li key={index} onClick={() => popupHandler(items, name)}>
                <i className={item.icon}></i>
                {item.notifNumber && <div>{item.notifNumber}</div>}
              </li>
            );
          })}
        </ul>
      </div>
      <Popup title={popupDetails.title} items={popupDetails.items} />
    </div>
  );
}

export default Navbar;
