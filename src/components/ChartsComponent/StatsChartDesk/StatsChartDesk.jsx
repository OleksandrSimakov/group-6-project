import React, { useCallback } from "react";

import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

import { StatsChartDesk } from "./StatsChartDesk.styled";

Chart.register(ChartDataLabels);

const StatsChart = ({ transactions, activeCategory }) => {
  const updateCategory = useCallback(() => {
    const categoryFind = transactions
      ?.find((x) => x._id === activeCategory)
      ?.descriptions.map((item) => {
        return {
          id: item.description,
          value: item.total,
        };
      });
    return categoryFind;
  }, [activeCategory, transactions]);

  const data = {
    datasets: [
      {
        data: updateCategory()?.sort((a, b) => {
          return b.value - a.value;
        }),
        maxBarThickness: 60,
        borderRadius: 20,
        minBarLength: 2,
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            // console.log(
            //   context.chart.data.datasets[0].data[context.dataIndex].nested.value
            // );
            return (
              context.chart.data.datasets[0].data[context.dataIndex].value +
              " грн"
            );
          },
          color: "#52555F",
          anchor: "end",
          align: "top",
          offset: "10",
        },
        plugins: [ChartDataLabels],
      },
    ],
  };
  const options = {
    parsing: {
      xAxisKey: "id",
      yAxisKey: "value",
      // key: "data.value",
    },
    responsive: true,
    layout: {
      padding: {
        // left: 150,
        // right: 150,
        top: 30,
        // bottom: 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "white",
        },
      },
      y: {
        grid: {
          borderColor: "white",
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <StatsChartDesk>
      <Bar data={data} options={options} redraw />
    </StatsChartDesk>
  );
};

export default React.memo(StatsChart);
