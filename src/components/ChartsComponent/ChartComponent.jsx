import React from "react";

import { StatsChartContainer } from "../ChartsComponent/ChartComponent.styles";
import StatsChartDesk from "./StatsChartDesk/StatsChartDesk";
import StatsChartMobile from "./StatsChartMobile/StatsChartMobile";

export const ChartComponent = ({
  getIncomeDetail,
  getExpenseDetail,
  type,
  category = "Продукты",
}) => {
  return (
    <StatsChartContainer>
      <StatsChartDesk
        transactions={type === "expense" ? getExpenseDetail : getIncomeDetail}
        activeCategory={category}
      />
      <StatsChartMobile
        transactions={type === "expense" ? getExpenseDetail : getIncomeDetail}
        activeCategory={category}
      />
    </StatsChartContainer>
  );
};

export default React.memo(ChartComponent);
