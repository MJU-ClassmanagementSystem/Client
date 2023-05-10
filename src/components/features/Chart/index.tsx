import { useEffect, useState } from 'react'
import ApexCharts from 'react-apexcharts'

interface ChartData {
  subjectName: string
  options: {
    dataLabels: {
      enabled: boolean
    }
    stroke: {
      curve: string
    }
    chart: {
      type: 'area'
      width: number
    }
    xaxis: {
      categories: string[]
    }
    yaxis: {
      max: number
    }
  }
  series: {
    name: string
    data: number[]
  }[]
}

const Data = [
  {
    subjectName: '수학',
    focusRate: [35.0, 30.5, 13.0, 14.0, 15.0],
    interestRate: [12.0, 64.5, 36.0, 28.0, 84.0],
  },
  {
    subjectName: '과학',
    focusRate: [35.0, 30.5, 13.0, 14.0, 15.0],
    interestRate: [6.0, 34.5, 64.0, 36.0, 64.0],
  },
  {
    subjectName: '영어',
    focusRate: [76.0, 74.5, 45.0, 63.0, 15.0],
    interestRate: [76.0, 45.5, 15.0, 14.0, 63.0],
  },
]

const Chart = () => {
  const [chartsData, setChartsData] = useState<ChartData[]>([])

  useEffect(() => {
    const data = Data
    const newChartData = data.map((item) => ({
      subjectName: item.subjectName,
      options: {
        chart: {
          type: 'area',
          width: 730,
        },
        yaxis: {
          max: 100,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: ['월', '화', '수', '목', '금'],
        },
      },
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
    setChartsData(newChartData)
  }, [])

  // const state = {
  //   series: [
  //     {
  //       name: 'Focus Rate',
  //       data: [31, 40, 28, 51, 42, 109, 100],
  //     },
  //     {
  //       name: 'Interest Rate',
  //       data: [11, 32, 45, 32, 34, 52, 41],
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       height: 350,
  //       // type: 'area' as const,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: 'smooth',
  //     },
  //     xaxis: {
  //       categories: ['월', '화', '수', '목', '금'],
  //     },
  //   } as ApexOptions,
  // }

  return (
    <div>
      {chartsData.map((chart: ChartData) => (
        <div key={chart.subjectName}>
          <h3>{chart.subjectName}</h3>
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
