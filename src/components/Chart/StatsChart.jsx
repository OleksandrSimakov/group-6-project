import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { StatsChartContainer } from "./Chart.styles";

Chart.register(ChartDataLabels);

const data = {
  datasets: [
    {
      data: [
        { id: "Свинина", nested: { value: 1500 } },
        { id: "Говядина", nested: { value: 500 } },
        { id: "Кофе", nested: { value: 3800 } },
        { id: "Спагетти", nested: { value: 2800 } },
        { id: "Шоколад", nested: { value: 1800 } },
        { id: "Овощи", nested: { value: 600 } },
        { id: "Сладости", nested: { value: 100 } },
        { id: "Игры", nested: { value: 1500 } },
      ].sort((a, b) => {
        return b.nested.value - a.nested.value;
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
            context.chart.data.datasets[0].data[context.dataIndex].nested
              .value + " грн"
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
    yAxisKey: "nested.value",
    key: "data.nested.value",
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
      },
    },
    y: {
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

const StatsChart = () => (
  <StatsChartContainer>
    <Bar data={data} options={options} />
  </StatsChartContainer>
);

export default StatsChart;
