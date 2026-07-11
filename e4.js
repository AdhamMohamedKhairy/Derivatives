document.addEventListener('DOMContentLoaded', () => {
  const correctSound = new Audio('correct.mp3')

  const form1 = document.getElementById('quiz-form-1')

  form1.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer1 = document.getElementById('q1').value.trim() 
    const result1 = document.getElementById('result-1')
    correctSound.currentTime = 0

    if (answer1 === "1/67") {
      result1.textContent = "Correct!" 
      result1.className = "result-message correct" 
      correctSound.play().catch(error => console.log("Audio playback failed:", error))
    } 
    else {
      result1.textContent = "Wrong. Try again" 
      result1.className = "result-message wrong"
    }
  })

  const form2 = document.getElementById('quiz-form-2') 
  form2.addEventListener('submit', (e) => {
    e.preventDefault() 
    const answer2 = parseFloat(document.getElementById('q2').value)  
    const result2 = document.getElementById('result-2') 

    if (answer2 === 11) { 
        result2.textContent = "Correct!" 
        result2.className = "result-message correct" 
    } else {
        result2.textContent = "Wrong. Try again" 
        result2.className = "result-message wrong" 
    }
  }) 
}) 