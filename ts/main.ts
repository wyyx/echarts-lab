import { testStr } from './test'
import { EChartOption } from 'echarts'

console.log('TCL: testStr', testStr)

const mainEl = document.getElementById('main') as HTMLDivElement

// initialize echarts instance with prepared DOM
var myChart = echarts.init(mainEl)

// draw chart
myChart.setOption({
  title: {
    text: 'ECharts entry example',
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
} as EChartOption)
