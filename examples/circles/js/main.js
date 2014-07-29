(function (window) {
    'use strict';

    var svg = d3.select("svg");
    svg.selectAll('circle')
        .data([100, 40, 40, 58, 83, 89, 189, 56,934])
        .enter()
        .append('circle')
        .style('fill', 'steelblue')
        .attr('cy', 60)
        .attr('cx', function (d, i) {return i * 50 + 30;})
        .attr('r',  function (d) {
            return Math.sqrt(d);
        });


    var circles = svg.selectAll('circle')
                    .data([100, 900, 1000])
                    .attr('cy', 60)
                    .attr('cx', function (d, i) {return i * 70 + 30;})
                    .attr('r',  function (d) {
                        return Math.sqrt(d);
                    });

     circles.exit().remove();
    
})(window);
