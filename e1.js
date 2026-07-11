document.addEventListener('DOMContentLoaded', () => {
  const form2 = document.getElementById('quiz-form-2') 
  form2.addEventListener('submit', (e) => {
    e.preventDefault() 
    const answer2 = document.getElementById('q2').value.trim() 
    const result2 = document.getElementById('result-2') 

    if (answer2 === "1/3") { // six seeeeeveeeeeeeeeen
        result2.textContent = "Correct!" 
        result2.className = "result-message correct" 
    } 
    else {
        result2.textContent = "Wrong. Try again" 
        result2.className = "result-message wrong" 
    }
  })  
}) 