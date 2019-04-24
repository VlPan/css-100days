// set the dimensions and margins of the graph
var margin = {top: 20, right: 0, bottom: 0, left: 0},
    width = 250 - margin.left - margin.right,
    height = 100 - margin.top - margin.bottom;


var x = d3.scaleBand().range([0, width])        .paddingInner(1.3)
.paddingOuter(0.3);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.day); })
    .y(function(d) { return y(d.views); });

  var valueline2 = d3.line()
    .x(function(d) { return x(d.day); })
    .y(function(d) { return y(d.views); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(".center").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + 50)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data

  var views = [
    {day: 'MON', views: 100}, 
    {day: 'TUE', views: 89}, 
    {day: 'WED', views: 267}, 
    {day: 'THU', views: 420},
    {day: 'FRI', views: 130},
    {day: 'SAT', views: 250}, 
    {day: 'SUN', views: 500}
];
 var purchases = [{day: 'MON', views: 72}, {day: 'TUE', views: 42}, {day: 'WED', views: 117}, {day: 'THU', views: 211} ,{day: 'FRI', views: 88} ,{day: 'SAT', views: 120}, {day: 'SUN', views: 411}];

  // format the data
  views.forEach(function(d) {
      d.day = d.day;
      d.views = +d.views;
  });

  // Scale the range of the data
  x.domain(views.map(d => d.day));
  y.domain([0, d3.max(views, function(d) { return d.views; })]);

  // Add the valueline path.
  svg.append("path")
      .data([views])
      .attr("class", "line-views")
      .attr("d", valueline);

    svg.append("path")
      .data([purchases])
      .attr("class", "line-purchases")
      .attr("d", valueline2);
      
  // Add the scatterplot
  svg.selectAll("dot")
      .data(views)
    .enter().append("circle")
    .attr("class", "dot-views")
      .attr("r", 5)
      .attr("cx", function(d) { return x(d.day); })
      .attr("cy", function(d) { return y(d.views); });

    svg.selectAll("dot")
      .data(purchases)
    .enter().append("circle")
      .attr("r", 5)
      .attr("class", "dot-purchases")
      .attr("cx", function(d) { return x(d.day); })
      .attr("cy", function(d) { return y(d.views); });

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

