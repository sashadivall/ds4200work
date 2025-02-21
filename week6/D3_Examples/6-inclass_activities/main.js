//Define data
let data = [
    { name: 'Rainne', rating: 8 },
    { name: 'Buddy', rating: 7 },
    { name: 'Paddy', rating: 3 },
    { name: 'Sticky', rating: 9 },
    { name: 'Midnight', rating: 5 },
    { name: 'Leo', rating: 6 }
  ];

  
const width = 600, height = 400;
const margin = {
  top: 50, 
  bottom: 50, 
  left: 50, 
  right: 50
};

const svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', 'lightblue');

// Define the scale
/**
 * Top left corner of the canvas is (0, 0), so if you want the lower left corner to be (0, 0), 
 * the range formula extends from height - bottom margin to top margin
 */
const yscale = d3.scaleLinear()
              .domain([0, 10])
              .range([height - margin.bottom, margin.top])
// draw the y-axis
const yaxis = svg.append('g')
              .call(d3.axisLeft().scale(yscale)) // by default, the program will draw the the y-axis all the way on the left side
              .attr('transform', `translate(${margin.left}, 0)`) // use translate to offset the axis by the value of the left margin
/**
 * translate(x_offset, y_offset)
 */

const xscale = d3.scaleBand()
                .domain(data.map(d => d.name)) // names of each animal
                .range([margin.left, width - margin.right])
                .padding(0.5)
const xaxis = svg.append('g')
                .call(d3.axisBottom().scale(xscale))
                .attr('transform', `translate(0, ${height - margin.bottom})`) // since y = 0 is the top, move it down to the bottom margin

// draw the circles
const line = d3.line()
                .x(d => xscale(d.name) + (xscale.bandwidth() / 2))// on the range, you divide the width of reach range by 2 and offset each point with it
                .y(d => yscale(d.rating));

const path = svg.append('path')
                .datum(data)
                .attr('stroke', 'red')
                .attr('stroke-width', 2)
                .attr('d', line)
                .attr('fill', 'none');

const xlabel = svg.append('text')
                .text("Name")
                .attr('x', width / 2)
                .style("text-anchor", "middle")
                .attr('y', height - 15)

const ylabel = svg.append('text')
                .text("Rating")
                .attr("x", -(height / 2) - (margin.bottom / 2))
                .attr("y", (margin.left / 2))
                .attr("transform", "rotate(-90)")

const title = svg.append('text')
                .text("Rating for Each Animal")
                .attr('x', width / 2)
                .style("text-anchor", "middle")
                .attr('y', 15)