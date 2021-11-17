import React, { useCallback } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { StatsChartMobileContainer } from "./StatsChartMobile.styled";

const StatsChartMobile = ({ transactions, activeCategory }) => {
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

        maxBarThickness: 15,
        borderRadius: 20,
        minBarLength: 120,
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
        },
        plugins: [ChartDataLabels],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 30,
      },
    },
    parsing: {
      xAxisKey: "value",
      yAxisKey: "id",
      // key: "data.nested.value",
    },

    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 1,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "white",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          borderColor: "white",
        },

        ticks: {
          align: "start",
          mirror: true,
          labelOffset: -20,
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
    <StatsChartMobileContainer>
      {transactions && activeCategory && (
        <Bar data={data} options={options} redraw />
      )}
    </StatsChartMobileContainer>
  );
};

export default React.memo(StatsChartMobile);
