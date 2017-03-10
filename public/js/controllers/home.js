/**
 * Created by Tuffy on 2017/3/1.
 */
'use strict';

var myChart = echarts.init(document.getElementById('echart-home'));
var data = [];

for (var i = 0; i <= 360; i++) {
  var t = i / 180 * Math.PI;
  var r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}

var option = {
  title: {
    text: '极坐标双数值轴'
  },
  legend: {
    data: ['line']
  },
  polar: {
    center: ['50%', '54%']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 0
  },
  radiusAxis: {
    min: 0
  },
  series: [{
    coordinateSystem: 'polar',
    name: 'line',
    type: 'line',
    showSymbol: false,
    data: data
  }],
  animationDuration: 2000
};

myChart.setOption(option);