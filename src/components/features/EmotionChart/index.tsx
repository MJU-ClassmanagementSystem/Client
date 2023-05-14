import { ApexOptions } from 'apexcharts'
import ApexCharts from 'react-apexcharts'

type EmotionData = {
  day: number
  emotionList: number[]
}

interface EmotionChartProps {
  data: EmotionData[]
}
const SERIESNAME = ['파랑', '초록', '노랑', '빨강', '보라']

const OPTIONS: ApexOptions = {
  chart: {
    type: 'bar',
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
    horizontalAlign: 'left',
    fontSize: '16px',
    width: 900,
    itemMargin: {
      horizontal: 20,
    },
  },
  theme: {
    palette: 'palette3',
  },
}

const EmotionChart: React.FC<EmotionChartProps> = ({ data }) => {
  const seriesData = SERIESNAME.map((_, i) => ({
    name: SERIESNAME[i],
    data: data.map((item) => item.emotionList[i]),
  }))

  return (
    <ApexCharts
      type="bar"
      options={OPTIONS}
      series={seriesData}
      height="430px"
      width="930px"
    />
  )
}

export default EmotionChart
