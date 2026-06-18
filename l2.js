google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Left Curve');
  data.addColumn('number', 'Right Line');
  data.addColumn('number', 'Hole Border');
  data.addColumn('number', 'Hole Center');

  data.addRows([
    [0,   0,       null, null, null],
    [0.4, 0.16,    null, null, null],
    [0.8, 0.64,    null, null, null],
    [1.2, 1.44,    null, null, null],
    [1.6, 2.56,    null, null, null],
    [2,   4,       null, null, null],

    [2,   null,    null, 4,    4], 

    [2,   null,    null, 6,    6],  

    [2,   null,    6,    null, null],   
    [4,   null,    8,    null, null]
  ]);

  const options = {
    backgroundColor: 'transparent', 
    hAxis: { 
      textStyle: { color: '#d1cdc8' },
      gridlines: { color: 'rgb(71, 73, 71)' }
    },
    vAxis: { 
      textStyle: { color: '#d1cdc8' },
      gridlines: { color: 'rgb(71, 73, 71)' }
    },
    legend: 'none', 
    lineWidth: 3,
    curveType: 'none',
    chartArea: { left: 60, top: 30, width: '85%', height: '80%' },

    seriesType: 'line', 
    series: {
      0: { color: '#d1cdc8' }, 
      1: { color: '#d1cdc8' }, 
      2: { type: 'scatter', color: '#d1cdc8', pointSize: 10 }, 
      3: { type: 'scatter', color: 'rgb(71, 73, 71)', pointSize: 4 }
    }
  };

  const chart = new google.visualization.ComboChart(document.getElementById('dis'));

  chart.draw(data, options);
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}