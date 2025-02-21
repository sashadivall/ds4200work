let numbers = [4, 10, 18, 23, 42];
colors = d3.schemeCategory10; // https://github.com/d3/d3-scale-chromatic

svg = d3.select('body')
  .append('svg')
    .attr('width', 500)
    .attr('height', 500);

let cicle = svg.selectAll('circle')
              .data(numbers)
              .enter()
              .append('circle')
              .attr('r', 5)
              .attr('cy', 100)
              .attr('cx', (d, i) => d * 5)
              .attr("fill", (d, i) => colors[i]);
let text = svg.selectAll("text")
              .data(numbers)
              .enter()
              .append("text")
              .text(d => d)
              .attr("x", (d, i) => d * 5)
              .attr("y", (d, i) => 80)
              .style("text-anchor", "middle")
