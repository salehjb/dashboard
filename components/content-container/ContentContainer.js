import { useContext } from "react"
// Styles
import styles from "./ContentContainer.module.scss";
// Contexts
import { context } from "../../pages/_app";

function ContentContainer({ children, title, filteredItem }) {
  const contextItems = useContext(context);
  const { searchValue } = contextItems;

  return (
    <>
      <div className={styles.content_container}>
        <h1>{title}</h1>
        {children}
        {filteredItem && filteredItem.length === 0 && (
          <div className={styles.no_results}>
            No results found for {`"${searchValue}"`}
          </div>
        )}
      </div>
    </>
  );
}

export default ContentContainer;
