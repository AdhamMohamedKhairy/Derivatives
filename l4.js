document.addEventListener('DOMContentLoaded', () => {
  const form1 = document.getElementById('quiz-form-1')
  form1.addEventListener('submit', (e) => {
        e.preventDefault()
        const answer1 = parseFloat(document.getElementById('q1').value)
        const result1 = document.getElementById('result-1')

        if (answer1 === 6) {
            result1.textContent = "Correct!";
            result1.className = "result-message correct";
        } else {
            result1.textContent = "Wrong. Try again";
            result1.className = "result-message wrong";
        }
      })
});