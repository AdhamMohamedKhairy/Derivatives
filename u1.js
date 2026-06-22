document.addEventListener('DOMContentLoaded', () => {
  
  if (typeof google !== 'undefined') {
    google.charts.load('current', {'packages':['corechart']})  
    google.charts.setOnLoadCallback(drawChart)  
  } else {
    console.error("Google Charts failed to load (check network or ad-blocker).") 
  }

  function drawChart() {
    const chartElement = document.getElementById('dis') 
    if (!chartElement) return 

    const data = new google.visualization.DataTable()  
    data.addColumn('number', 'X')  
    data.addColumn('number', 'Line 2x+2')  
    data.addColumn('number', 'Solid Point')  
    data.addColumn('number', 'Hole Border')  
    data.addColumn('number', 'Hole Center') 

  data.addRows([
    [-2,  -2,   null,        null,        null       ],
    [0,   2,    null,        null,        null       ], 
    [0,   null, 0,           2,           2          ], 
    [0,   2,    null,        null,        null       ], 
    [4,   10,   null,        null,        null       ]
  ]) 

  const options = {
    backgroundColor: 'transparent', 
    hAxis: { 
      textStyle: { color: '#d1cdc8' },
      gridlines: { 
        color: 'rgb(71, 73, 71)',
        count: 7 // Places a gridline precisely at integers: -2, -1, 0, 1, 2, 3, 4
      },
      baselineColor: 'transparent',
      viewWindow: { min: -2, max: 4 }
    },
    vAxis: { 
      textStyle: { color: '#d1cdc8' },
      gridlines: { 
        color: 'rgb(71, 73, 71)',
        count: 9 // Places a gridline precisely every 2 units: -4, -2, 0, 2, 4, 6, 8, 10, 12
      },
      baselineColor: 'transparent',
      viewWindow: { min: -4, max: 12 }
    },
    legend: 'none', 
    lineWidth: 3,
    curveType: 'none',
    chartArea: { left: 60, top: 30, width: '85%', height: '80%' },
    seriesType: 'line', 
    series: {
      0: { color: '#d1cdc8' }, 
      1: { type: 'scatter', color: '#d1cdc8', pointSize: 10 }, 
      2: { type: 'scatter', color: '#d1cdc8', pointSize: 10 }, 
      3: { type: 'scatter', color: 'rgb(71, 73, 71)', pointSize: 6 } 
    }
  } 

    const chart = new google.visualization.ComboChart(chartElement)  
    chart.draw(data, options)  

    if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
      MathJax.typesetPromise()  
    }
  }


  const uform = document.getElementById('quiz-form') 
  if (uform) {
    uform.addEventListener('submit', (e) => {
      e.preventDefault() 
      evalu1() 
    }) 
  }

  function evalu1() {
    let score = 0 
    let wrongAns = [] 
    
    const u1AnsKey = {
        u1_q1: 'C', 
        u1_q2: 'B', 
        u1_q3: 'A',
        u1_q4: 'A', 
        u1_q5: 'C', 
        u1_q6: 'B', 
        u1_q7: 'A', 
        u1_q8: 'B', 
        u1_q9: 'D', 
        u1_q10: 'B' 
    }  

    for (let i = 1; i <= 10; i++) {
      const selected = uform.querySelector(`input[name="u1_q${i}"]:checked`) 
      if (selected && selected.value === u1AnsKey[`u1_q${i}`]) {
        score++ 
      } else {
        wrongAns.push(`Q${i}`) 
      }
    }
    
    const result = document.getElementById("result-u") 
    if (result) {
      let res = `Score: ${score}/10` 

      if (wrongAns.length > 0) {
        res += `, womp womp, skill issue, you answered ${wrongAns.join(', ')} wrong :D` 
      } else {
        res += `, W! Perfect Score!` 
      }
      
      result.innerHTML = `<p>${res}</p>` 
      result.className = "result-message active" 
      result.scrollIntoView({ behavior: "smooth" }) 
    }
  }
}) 