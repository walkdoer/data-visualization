(function (window) {
    'use strict';
    var d3 = window.d3,
        dataArr = [12, 23, 45, 45, 56, 3, 10];

    var x = d3.scale.linear()
            .domain([0, d3.max(dataArr)])
            .range([0, 560]);
    d3.select('.chart')
      .selectAll('div')
      .data(dataArr)
      .enter().append('div')
      .style('width', function (d) { return x(d) + 'px'; })
      .text(function (d) { return d; });
})(window);
