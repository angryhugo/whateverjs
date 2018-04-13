$(function() {
    var myChart = echarts.init(document.getElementById('test'));
    var idx = 1;
    var option = {
        timeline: {
            data: ['2013-02', '2013-03', '2013-04', '2013-05', {
                    name: '2013-06',
                    symbol: 'emptyStar6',
                    symbolSize: 8
                },
                '2013-07', '2013-08', '2013-09', '2013-10', '2013-11', {
                    name: '2013-12-01',
                    symbol: 'star6',
                    symbolSize: 8
                }
            ],
            label: {
                formatter: function(s) {
                    return s.slice(0, 7);
                }
            }
        },
        options: [{
            title: {
                text: '+'
                // subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                data: ['Chrome', 'Firefox', 'Safari']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1700
                            }
                        }
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                name: '+',
                type: 'pie',
                center: ['50%', '45%'],
                radius: '50%',
                data: [{
                    value: 1 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 1 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 1 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 2 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 2 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 2 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 3 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 3 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 3 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 4 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 4 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 4 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 5 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 5 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 5 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 6 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 6 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 6 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 7 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 7 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 7 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 8 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 8 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 8 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 9 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 9 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 9 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 10 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 10 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 10 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }, {
            series: [{
                name: '+',
                type: 'pie',
                data: [{
                    value: 11 * 128 + 80,
                    name: 'Chrome'
                }, {
                    value: 11 * 64 + 160,
                    name: 'Firefox'
                }, {
                    value: 11 * 32 + 320,
                    name: 'Safari'
                }]
            }]
        }]
    };
    myChart.setOption(option);
});
