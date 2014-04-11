(function (window) {
    'use strict';
    var d3 = window.d3,
        dataArr = [12, 23, 45, 45, 56, 3, 10];
    d3.select('.chart')
      .selectAll('div')
      .data(dataArr)
      .enter().append('div')
      .style('width', function (d) { return d*10 + 'px'; })
      .text(function (d) { return d; });
})(window);
