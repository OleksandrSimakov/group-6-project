import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import {
  fetchCurrentExpenses,
  fetchCurrentIncome,
} from "../../services/transactions-api";
import { StatsChartContainer } from "../ChartsComponent/ChartComponent.styles";
import StatsChartDesk from "./StatsChartDesk/StatsChartDesk";
import StatsChartMobile from "./StatsChartMobile/StatsChartMobile";

export const ChartComponent = ({
  activeCategory = "Продукты",
  income = false,
  year = 2021,
  month = 10,
}) => {
  const [transactions, setTransactions] = useState([]);
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  console.log(transactions);
  console.log(incomeTransactions);

  useEffect(() => {
    fetchCurrentExpenses(year, month).then((data) => {
      if (transactions.length === 0) {
        setTransactions(data);
      }

      fetchCurrentIncome(year, month).then((data) => {
        if (incomeTransactions.length === 0) {
          setIncomeTransactions(data);
        }
      });
    });
  }, [incomeTransactions, transactions]);

  return (
    <StatsChartContainer>
      <StatsChartDesk
        transactions={income ? incomeTransactions : transactions}
        activeCategory={activeCategory}
      />
      <StatsChartMobile
        transactions={income ? incomeTransactions : transactions}
        activeCategory={activeCategory}
      />
    </StatsChartContainer>
  );
};

export default React.memo(ChartComponent);
