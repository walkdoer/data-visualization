(function(window, d3) {

    'use strict';

    var width = 600,
        height = 400;

    var fill = d3.scale.category10();
    var nodes = d3.range(100).map(function(i) {
        return {
            index: i
        };
    });

    var force = d3.layout.force()
        .nodes(nodes).size([width, height])
        .on('tick', tick)
        .start();

    var svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height);

    var node = svg.selectAll('.node')
        .data(nodes)
        .enter()
        .append('circle').attr('class', 'node')
        .attr('cx', function(d) {
            return d.x;
        })
        .attr('cy', function(d) {
            return d.y;
        })
        .attr('r', 8)
        .style('fill', function(d, i) {
            // i & 3 => 0,1,2,3
            return fill(i & 3);
        })
        .style("stroke", function(d, i) {
            return d3.rgb(fill(i & 3)).darker(2);
        })
        .call(force.drag)
        .on("mousedown", function() {
            d3.event.stopPropagation();
        });

    function tick(e) {
        // Push different nodes in different directions for clustering.
        var k = 6 * e.alpha;
        nodes.forEach(function(o, i) {
            o.y += i & 1 ? k : -k;
            o.x += i & 2 ? k : -k;
        });

        node.attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });
    }

})(window, window.d3);
