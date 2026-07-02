document.addEventListener('DOMContentLoaded', () => {
  const form2 = document.getElementById('quiz-form-2')
  form2.addEventListener('submit', (e) => {
        e.preventDefault()
        const answer1 = parseFloat(document.getElementById('q2').value)
        const result1 = document.getElementById('result-2')

        if (answer1 === 0) {
            result1.textContent = "Correct!";
            result1.className = "result-message correct";
        } else {
            result1.textContent = "Wrong. Try again";
            result1.className = "result-message wrong";
        }
      })
});