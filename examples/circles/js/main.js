(function (window) {
    'use strict';

    var svg = d3.select(".circle-no-text");

    var data = [100, 40, 40, 58, 83, 89, 189, 56,934];
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .style('fill', 'steelblue')
        .attr('cy', 60)
        .attr('cx', function (d, i) {return i * 50 + 30;})
        .attr('r',  function (d) {
            return Math.sqrt(d);
        });

    
    var svg2 = d3.select(".circle-with-text");

    var gEl = svg2.selectAll('g').data(data)
        .enter()
        .append('g')
        .attr('transform', function (d, i) { return "translate(" + (i * 50 + 30) +", 60)"})
    var circles = gEl.append('circle')
            .attr('r',  function (d) {
                return Math.sqrt(d);
            })
            .attr('stroke', 'steelblue')
            .attr('fill', 'steelblue');

    var getFontSize = function (d) {
        var fontSize = 30;
        var max = d3.max(data);
        var realSize = d * fontSize / max;
        return realSize < 10 ? 10 : realSize;
    }
    var el = gEl.append('text')
        .text(function (d) {return d;})
        .attr('font-size', function (d) {
            return getFontSize(d);
        })
        .attr('dx', function () {
            return -10;
        })
        .attr('dy', function (d) {
            var fontSize = getFontSize(d);
            return (Math.sqrt(d) - fontSize)/2;
        });


    /*
    如果需要验证exit函数的效果，则可以取消注释
    var circles = svg.selectAll('circle')
                    .data([100, 900, 1000])
                    .attr('cy', 60)
                    .attr('cx', function (d, i) {return i * 70 + 30;})
                    .attr('r',  function (d) {
                        return Math.sqrt(d);
                    });

     circles.exit().remove();
    */
    
})(window);
