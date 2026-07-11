google.charts.load('current', {'packages':['corechart']})
google.charts.setOnLoadCallback(drawBothCharts)

function drawBothCharts() {
  drawChart1()
  drawChart2()
}

function drawChart1() {
  const data = new google.visualization.DataTable()
  data.addColumn('number', 'X')
  data.addColumn('number', 'Right Line')

  data.addRows([
    [0,   0],
    [4,   4], 
  ])

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
  }

  const chart = new google.visualization.ComboChart(document.getElementById('dis1'))

  chart.draw(data, options)
  if (window.MathJax) {
    MathJax.typesetPromise()
  }
}
function drawChart2() {
  const data = new google.visualization.DataTable()
  data.addColumn('number', 'X')
  data.addColumn('number', 'Right Line')

  data.addRows([
    [0,   1],
    [4,   1], 
  ])

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
  }

  const chart = new google.visualization.ComboChart(document.getElementById('dis2'))

  chart.draw(data, options)
  if (window.MathJax) {
    MathJax.typesetPromise()
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const form1 = document.getElementById('quiz-form-1')
  form1.addEventListener('submit', (e) => {
        e.preventDefault()
        const answer1 = parseFloat(document.getElementById('q1').value)
        const result1 = document.getElementById('result-1')

        if (answer1 === 4) {
            result1.textContent = "Correct!"
            result1.className = "result-message correct"
        } else {
            result1.textContent = "Wrong. Try again"
            result1.className = "result-message wrong"
        }
      })
})