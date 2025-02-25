//Define data
let data = [
  { name: 'Rainne'    , rating: 8 },
  { name: 'Buddy'    , rating: 7 },
  { name: 'Paddy'   , rating: 3 },
  { name: 'Sticky', rating: 9 },
  { name: 'Midnight'  , rating: 5 },
  { name: 'Leo'  , rating: 6 }
];


const width = 600, height = 400;
const margin = {
  top: 30,
  bottom: 50,
  right: 30,
  left: 50
};

let svg = d3.select('body').append('svg')
            .attr('width', width).attr('height', height)
            .style('background', 'lightyellow');

const yscale = d3.scaleLinear()
                .domain([0,10])
                .range([height - margin.bottom, margin.top]);

const xscale = d3.scaleBand()
                  .domain(data.map(d => d.name))
                  .range([margin.left, width - margin.right])
                  .padding(0.5); // modifying this value changes the width of the bars

const yaxis = svg.append('g')
                  .call(d3.axisLeft().scale(yscale))
                  .attr('transform', `translate(${margin.left}, 0)`);

const xaxis = svg.append('g')
                  .call(d3.axisBottom().scale(xscale))
                  .attr('transform', `translate(0, ${height - margin.bottom})`);


svg.append('text')
    .attr('x', width / 2)
    .attr('y', height - 15)
    .text('Name')

svg.append('text')
  .attr('x', 0 - height / 2)
  .attr('y', 25)
  .text('Rating')
  .attr('transform', 'rotate(-90)')

const bar = svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('x', d => xscale(d.name))
                .attr('y', d => yscale(d.rating))
                .attr('width', xscale.bandwidth())
                .attr('height', d => height - margin.bottom - yscale(d.rating))
                .style('fill', "cornflowerblue")
          
