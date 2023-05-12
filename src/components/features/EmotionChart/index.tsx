import { ApexOptions } from 'apexcharts'
import ApexCharts from 'react-apexcharts'

type EmotionData = {
  day: number
  emotionList: number[]
}

interface EmotionChartProps {
  data: EmotionData[]
}
const seriesNames = ['파랑', '초록', '노랑', '빨강', '보라']

const EmotionChart: React.FC<EmotionChartProps> = ({ data }) => {
  const seriesData = seriesNames.map((_, i) => ({
    name: seriesNames[i],
    data: data.map((item) => item.emotionList[i]),
  }))

  const state = {
    series: seriesData,
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: ['월', '화', '수', '목', '금'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'K'
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 40,
        fontSize: '16px',
      },
      theme: {
        palette: 'palette3',
      },
    } as ApexOptions,
  }
  return (
    <ApexCharts type="bar" options={state.options} series={state.series} height="630" />
  )
}

export default EmotionChart
