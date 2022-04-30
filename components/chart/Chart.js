import { useRef, useEffect } from "react";
// Styles
import styles from "./Chart.module.scss";
// Chart.js
import { Chart, registerables } from "chart.js";

function ChartComponent({ title, swing }) {
  const canvas = useRef(null);

  useEffect(() => {
    const myChartRef = canvas.current;

    Chart.register(...registerables);

    const myChart = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: title,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: swing,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className={styles.chart_container}>
      <h3>{title}</h3>
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default ChartComponent;
