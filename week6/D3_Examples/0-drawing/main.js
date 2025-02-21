let svg = d3.select("#vis").append('svg').attr('width', 600)
            .attr('height', 400).style('background', 'lightyellow');

// draw a circle with radius 100
/**
 * Without specifying location, the center of the circle is (0, 0) - top left corner
 */
svg.append('circle').attr('r', 100).attr('cx', 100).attr('cy', 100).attr('fill', 'darkblue');

svg.append('rect').attr('x', 300).attr('y', 200).attr('width', 200).attr('height', 100).attr('fill', 'red');

svg.append('line').attr('x1', 400).attr('y1', 100).attr('x2', 500).attr('y2', 200).attr('stroke', 'black').attr('stroke-width', 2);