import styled from "@emotion/styled/macro";

export const StatsChartContainer = styled.div`
  background-color: #ffff;
  margin: 0 auto;
  max-width: 1060px;
  /* min-width: 422px; */
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  padding-bottom: 20px;

   @media (min-width: 768px) {
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  padding-top: 50px;
  }

  @media (min-width: 1200px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;
