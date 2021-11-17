import React from "react";
import { useSelector } from "react-redux";
import reportSelectors from "../../redux/report/report-selectors";
import { StatsChartContainer } from "../ChartsComponent/ChartComponent.styles";
import StatsChartDesk from "./StatsChartDesk/StatsChartDesk";
import StatsChartMobile from "./StatsChartMobile/StatsChartMobile";
import Loader from "react-js-loader";

export const ChartComponent = ({
  getIncomeDetail,
  getExpenseDetail,
  type,
  category = "Продукты",
}) => {
  const IsLoading = useSelector(reportSelectors.getIsLoading);

  return (
    <StatsChartContainer>
      {IsLoading ? (
        <Loader
          type="spinner-circle"
          bgColor={"#ff751d"}
          color={"#ff751d"}
          size={60}
        />
      ) : (
        <StatsChartDesk
          transactions={type === "expense" ? getExpenseDetail : getIncomeDetail}
          activeCategory={category}
        />
      )}

      {IsLoading ? (
        <Loader
          type="spinner-circle"
          bgColor={"#ff751d"}
          color={"#ff751d"}
          size={60}
        />
      ) : (
        <StatsChartMobile
          transactions={type === "expense" ? getExpenseDetail : getIncomeDetail}
          activeCategory={category}
        />
      )}
    </StatsChartContainer>
  );
};

export default React.memo(ChartComponent);
