$(function() {
    var $graph = $("#graph");

    var randomScalingFactor = function() {
        return Math.round((Math.random() + 0.5) * 100);
    };

    generateGraph();

    // 第一个点
    var $point = $graph.find("circle").eq(0);
    console.log($point.offset().top)

    $("#test").on("click", function() {
        generateGraph();
    });

    function generateGraph() {
        $graph.html("").removeAttr('style');
        Morris.Area({
            element: 'graph',
            data: [
                { date: '07-01', price: randomScalingFactor() },
                { date: '07-02', price: randomScalingFactor() },
                { date: '07-03', price: randomScalingFactor() },
                { date: '07-04', price: randomScalingFactor() },
                { date: '07-05', price: randomScalingFactor() },
                { date: '07-06', price: randomScalingFactor() },
                { date: '07-07', price: randomScalingFactor() },
                { date: '07-08', price: randomScalingFactor() },
                { date: '07-09', price: randomScalingFactor() },
                { date: '07-10', price: randomScalingFactor() },
                { date: '07-11', price: randomScalingFactor() },
                { date: '07-12', price: randomScalingFactor() },
                { date: '07-13', price: randomScalingFactor() },
                { date: '07-14', price: randomScalingFactor() },
                { date: '07-15', price: randomScalingFactor() },
                { date: '07-16', price: randomScalingFactor() },
                { date: '07-17', price: randomScalingFactor() },
                { date: '07-18', price: randomScalingFactor() },
                { date: '07-19', price: randomScalingFactor() },
                { date: '07-20', price: randomScalingFactor() },
                { date: '07-21', price: randomScalingFactor() },
                { date: '07-22', price: randomScalingFactor() },
                { date: '07-23', price: randomScalingFactor() },
                { date: '07-24', price: randomScalingFactor() },
                { date: '07-25', price: randomScalingFactor() },
                { date: '07-26', price: randomScalingFactor() },
                { date: '07-27', price: randomScalingFactor() },
                { date: '07-28', price: randomScalingFactor() },
                { date: '07-29', price: randomScalingFactor() },
                { date: '07-30', price: randomScalingFactor() }
            ],
            xkey: 'date',
            ykeys: ['price'],
            labels: ['¥'],
            // fillOpacity: 0.5,
            lineColors: ['#ea5d96'],
            pointFillColors: ['#fff'],
            pointStrokeColors: ['#ea5d96'],
            goalLineColors: ['#ffa784'],
            gridTextColor: ['#000']
        });
    }

});
