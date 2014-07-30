(function(d3) {
    'use strict';


    var svg = d3.select(".circles");

    var data = [100, 40, 40, 58, 83, 89, 189, 56, 934];
    var gEl = svg.selectAll('g').data(data)
        .enter()
        .append('g')
        .attr('transform', function(d, i) {
            return "translate(" + (i * 50 + 30) + ", 60)";
        });
    var circles = gEl.append('circle')
        .attr('r', function(d) {
            return Math.sqrt(d);
        })
        .attr('stroke', 'steelblue')
        .attr('fill', 'steelblue');

    var getFontSize = function(d) {
        var fontSize = 30;
        var max = d3.max(data);
        var realSize = d * fontSize / max;
        return realSize < 10 ? 10 : realSize;
    };
    gEl.append('text')
        .text(function(d) {
            return d;
        })
        .attr('font-size', function(d) {
            return getFontSize(d);
        })
        .attr('dx', function() {
            return -10;
        })
        .attr('dy', function(d) {
            var fontSize = getFontSize(d);
            return (Math.sqrt(d) - fontSize) / 2;
        });

    var nodes = createNodes(circles);
    d3.layout.force()
        .nodes(nodes)
        .size([720, 720])
        .start();



    function createNodes(circles) {
        var nodes = [];
        circles.each(function (a, b) {
            nodes.push({
                x: 100,
                y: 100,
                px: 100,
                py: 100,
                index: 100
            });
        });
    }
})(window.d3);
