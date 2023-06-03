import { ApexOptions } from 'apexcharts'
import classNames from 'classnames/bind'
import ApexCharts from 'react-apexcharts'
import type { ChartData } from 'src/types'

import styles from './chart.module.scss'

interface Chart {
  subjectName: string
  options: ApexOptions
  series: {
    name: string
    data: number[]
  }[]
}

interface ChartProps {
  data: ChartData[]
  categories?: string[]
}

const cx = classNames.bind(styles)

const Chart: React.FC<ChartProps> = ({
  data,
  categories = ['월', '화', '수', '목', '금'],
}) => {
  const newChartData: Chart[] = data.map((item) => ({
    subjectName: item.subjectName,
    options: {
      chart: {
        type: 'area',
        width: 730,
      },
      yaxis: {
        max: 100,
        decimalsInFloat: 0,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: categories,
      },
    } as ApexOptions,
    series: [
      {
        name: 'Focus Rate',
        data: item.focusRate,
      },
      {
        name: 'Interest Rate',
        data: item.interestRate,
      },
    ],
  }))

  return (
    <div>
      {newChartData.map((chart: Chart) => (
        <div className={cx('chartWrap')} key={chart.subjectName}>
          <h3 className={cx('chartTitle')}>{chart.subjectName}</h3>
          <ApexCharts
            options={chart.options}
            series={chart.series}
            type="area"
            width="740"
          />
        </div>
      ))}
    </div>
  )
}

export default Chart
