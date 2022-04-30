import { useEffect, useContext } from "react";
// Styles
import styles from "../scss/dashboard.module.scss";
// Components
import ContentContainer from "../components/content-container/ContentContainer";
import Chart from "../components/chart/Chart";
// Contexts
import { context } from "./_app";
// Datas
import { charts } from "../datas";

function dashboard() {
  const contextItems = useContext(context);
  const { searchValue, setSearchValue } = contextItems;

  useEffect(() => {
    setSearchValue("");
  }, []);

  const filteredCharts = charts.filter((chart) => {
    return chart.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className={styles.dashboard_container}>
      <ContentContainer title="Dashboard" filteredItem={filteredCharts}>
        {filteredCharts.map((chart, index) => (
          <Chart key={index} title={chart.title} swing={chart.swing} />
        ))}
      </ContentContainer>
    </div>
  );
}

export default dashboard;
