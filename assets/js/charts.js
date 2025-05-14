var options = {
    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
    }, {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8]
    }],
    chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 100,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 10,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
            dataLabels: {
                total: {
                    enabled: true,
                    style: {
                        fontSize: '13px',
                        fontWeight: 900
                    }
                }
            }
        },
    },
    axis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
        ],
    },
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();






var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        type: 'donut',
        with: 100,
        height: 300
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 20
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

//second_block_charts



var options = {
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2011',
          y: 1292,
          goals: [
            {
              name: 'Expected',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2012',
          y: 4432,
          goals: [
            {
              name: 'Expected',
              value: 5400,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2013',
          y: 5423,
          goals: [
            {
              name: 'Expected',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2014',
          y: 6653,
          goals: [
            {
              name: 'Expected',
              value: 6500,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2015',
          y: 8133,
          goals: [
            {
              name: 'Expected',
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2016',
          y: 7132,
          goals: [
            {
              name: 'Expected',
              value: 7500,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2017',
          y: 7332,
          goals: [
            {
              name: 'Expected',
              value: 8700,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2018',
          y: 6553,
          goals: [
            {
              name: 'Expected',
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#c3"), options);
  chart.render();


var options = {
    series: [
    {
      name: 'الأحذية',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-09').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime()
          ]
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-03').getTime()
          ],
        }
      ]
    },
    {
      name: 'الاكسسوارات',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-16').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-10').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-22').getTime()
          ]
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime()
          ]
        }
      ]
    },
    {
      name: 'الألبسة النسائية',
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-07').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
      ]
    }
  ],
    chart: {
    height: 450,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%'
    }
  },
  xaxis: {
    type: 'datetime'
  },
  stroke: {
    width: 1
  },
  fill: {
    type: 'solid',
    opacity: 0.6
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  }
  };

  var chart = new ApexCharts(document.querySelector("#c4"), options);
  chart.render();


// THirdChart 


var options = {
  series: [{
  name: 'TEAM A',
  type: 'area',
  data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
}, {
  name: 'TEAM B',
  type: 'line',
  data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  curve: 'smooth'
},
fill: {
  type:'solid',
  opacity: [0.35, 1],
},
labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
markers: {
  size: 0
},
yaxis: [
  {
    title: {
      text: 'Series A',
    },
  },
  {
    opposite: true,
    title: {
      text: 'Series B',
    },
  },
],
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if(typeof y !== "undefined") {
        return  y.toFixed(0) + " points";
      }
      return y;
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#c5"), options);
chart.render();



      
var options = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Points',
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#c6"), options);
chart.render();


// Four chart



var options = {
  series: [
  {
    name: 'معدل الغاء الطلبات',
    data: [
      {
        x: 'Jan',
        y: [-2, 4]
      },
      {
        x: 'Feb',
        y: [-1, 6]
      },
      {
        x: 'Mar',
        y: [3, 10]
      },
      {
        x: 'Apr',
        y: [8, 16]
      },
      {
        x: 'May',
        y: [13, 22]
      },
      {
        x: 'Jun',
        y: [18, 26]
      },
      {
        x: 'Jul',
        y: [21, 29]
      },
      {
        x: 'Aug',
        y: [21, 28]
      },
      {
        x: 'Sep',
        y: [17, 24]
      },
      {
        x: 'Oct',
        y: [11, 18]
      },
      {
        x: 'Nov',
        y: [6, 12]
      },
      {
        x: 'Dec',
        y: [1, 7]
      }
    ]
  }
],
  chart: {
  height: 350,
  type: 'rangeArea'
},
stroke: {
  curve: 'monotoneCubic'
},
title: {
  text: 'معدل الغاء الطلبات '
},
markers: {
  hover: {
    sizeOffset: 5
  }
},
dataLabels: {
  enabled: false
},
yaxis: {
  labels: {
    formatter: (val) => {
      return val + '%'
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#c7"), options);
chart.render();


var options = {
  series: [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
  height: 350,
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

},
title: {
  text: 'Monthly Inflation in Argentina, 2002',
  floating: true,
  offsetY: 330,
  align: 'center',
  style: {
    color: '#444'
  }
}
};

var chart = new ApexCharts(document.querySelector("#c8"), options);
chart.render();





// five chart

var options = {
  series: [85],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '80%',
    }
  },
},
labels: ['Traget'],
};

var chart = new ApexCharts(document.querySelector("#c9"), options);
chart.render();


      
var options = {
  series: [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}],
  chart: {
  height: 350,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Radar Chart - Multi Series'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
yaxis: {
  stepSize: 20
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

var chart = new ApexCharts(document.querySelector("#c10"), options);
chart.render();

