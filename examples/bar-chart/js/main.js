(function (window) {
    'use strict';
    var d3 = window.d3,
        width = 560,
        barHeight = 20,
        dataArr = [12, 23, 45, 45, 56, 3, 10];

    var x = d3.scale.linear()
            .domain([0, d3.max(dataArr)])
            .range([0, width]);
    d3.select('.chart')
      .selectAll('div')
      .data(dataArr)
      .enter().append('div')
      .style('width', function (d) { return x(d) + 'px'; })
      .text(function (d) { return d; });

    var chart = d3.select('.chart-svg')
      .attr("width", width)
      .attr("height", barHeight * dataArr.length);

    var bar = chart.selectAll('g')
        .data(dataArr)
        .enter().append('g')
        .attr('transform', function (d, i) {
            return 'translate(0,' + i * barHeight + ')';
        });

    bar.append('rect').attr('width', x).attr('height', barHeight - 1);

    bar.append('text').attr('x', function (d) { return x(d) - 3; })
                      .attr('y', barHeight / 2)
                      .attr('dy', '.35em')
                      .text(function (d) {return d;});

})(window);
