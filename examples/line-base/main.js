
Highcharts.chart('container', {

    title: {
        text: 'Line Base Title'
    },

    subtitle: {
        text: 'Simple Example'
    },

    yAxis: {
        title: {
            text: 'Y title'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        }
    },

    series: [{
        name: 'chart 1',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'chart 2',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});