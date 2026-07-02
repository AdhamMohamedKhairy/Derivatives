document.addEventListener('DOMContentLoaded', () => {
  const form1 = document.getElementById('quiz-form-1') 
  form1.addEventListener('submit', (e) => {
    e.preventDefault() 
    const answer1 = parseFloat(document.getElementById('q1').value) 
    const result1 = document.getElementById('result-1') 

    if (answer1 === 18) {
        result1.textContent = "Correct!" 
        result1.className = "result-message correct" 
    } else {
        result1.textContent = "Wrong. Try again" 
        result1.className = "result-message wrong" 
    }
  }) 
  const form2 = document.getElementById('quiz-form-2') 
  form2.addEventListener('submit', (e) => {
    e.preventDefault() 
    const answer2 = document.getElementById('q2').value.trim() 
    const result2 = document.getElementById('result-2') 

    if (answer2 === "3602.44" || answer2 === "3602.45" || answer2 === "3602.43") { 
        result2.textContent = "Correct!" 
        result2.className = "result-message correct" 
    } else {
        result2.textContent = "Wrong. Try again" 
        result2.className = "result-message wrong" 
    }
  })  
}) 