test = d3.select('.sex')
test = d3.select('.sex').size()
test = d3.select('.sex').node()

d3.select('.breed').text('unknown')
d3.select('.name').text('Claudia')

// change the 3rd row in the breed column to Domestic Longhair
d3.select('tr:nth-child(3) .breed').text('Domestic Longhair'); 
// change all rows in the rating column to 5
d3.selectAll('.rate').text('5')
// remove the entire 5th row
d3.selectAll('tr:nth-child(5)').remove()
// replace the breed of the 3rd row with html text
d3.select('tr:nth-child(3) .breed').html('<b>Maybe</b>').append('span').html('Surprise!')

d3.select('tr:nth-child(3) .breed').html('<b>Maybe</b>').insert('span', ":first-child").html('So ')