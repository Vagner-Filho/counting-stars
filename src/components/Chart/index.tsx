import React from 'react';
import { FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines } from 'react-vis';
import { Historico } from '../../utils/interfaces';

function Chart(props: {
  chartWidth: number,
  chartHeight: number,
  starsHistory: Historico
}) {
  const dataSeries: Array<{x: number, y: number}> = [];
  
  for (const testrela of props.starsHistory.estrelas) {
    const idx = getIndexInDataSeries(testrela.starred_at)
    if (idx) {
      dataSeries[idx].y++
    } else {
      dataSeries.push({ x: testrela.starred_at, y: 1})
    }
  }

  function getIndexInDataSeries(d: number) {
    let idx = null;
    dataSeries.forEach((serie, index) => {
      if (serie.x === d) {
        idx = index;
        return;
      }
    })
    return idx;
  }
  return (
    <>
      <FlexibleWidthXYPlot
        // width={props.chartWidth}
        height={props.chartHeight}
        xType="ordinal"
        yType="linear"
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <LineSeries
          data={dataSeries}
        />
        <XAxis
          title='Time'
          attr="x"
          attrAxis="y"
          orientation="bottom"
          tickFormat={function tickFormat(d){return new Date(d).toLocaleDateString()}}
        />
        <YAxis
          title='Stars'
          attr="y"
          attrAxis="x"
          orientation="left"
        />
      </FlexibleWidthXYPlot>
    </>
  )
}

export { Chart }