import React from 'react'
import { StatsChartContainer } from '../ChartsComponent/ChartComponent.styles'
import StatsChartDesk from './StatsChartDesk/StatsChartDesk'
import StatsChartMobile from './StatsChartMobile/StatsChartMobile'

export const ChartComponent = () => {
  return (
    <StatsChartContainer>
      <StatsChartDesk />
      <StatsChartMobile />
    </StatsChartContainer>
  )
}

export default ChartComponent
