import { Box, Card, CardHeader } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

import React from 'react'
import useChart from '@/hooks/useChart'

const dates = [
  '1/1/2003',
  '2/1/2003',
  '03/01/2003',
  '04/01/2003',
  '05/01/2003',
  '06/01/2003',
  '07/01/2003',
  '08/01/2003',
  '09/01/2003',
  '10/01/2003',
  // '11/01/2003',
  // '12/01/2003',
]

// // Example usage:
// const initialDate = new Date('2023-01-01')
// const endDate = new Date('2023-01-10')
// const initialValue = 25
// const finalValue = 10
//
// const result = generateDecimalArray(initialDate, endDate, initialValue, finalValue)
// console.log(result)

export default function UserGoalChart({ chartData, dates }: any) {
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: '16%' } },
    fill: { type: chartData.map((i: any) => i.fill) },
    labels: dates,
    xaxis: {
      atype: 'datetime',
      formatter: (value: string) => value + '##',
      // categories: dates,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(2)} kg`
          }
          return y
        },
      },
    },
  })

  return (
    <>
      <Card>
        <CardHeader title={'Your Weight Journey'} subheader={'Track all your weight change'} />

        <Box sx={{ p: 3, pb: 1, pt: 0 }} dir='ltr'>
          <ReactApexChart type='line' series={chartData} options={chartOptions} height={350} />
        </Box>
      </Card>
    </>
  )
}
