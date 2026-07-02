document.addEventListener('DOMContentLoaded', () => {
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
        u1_q1: 'A', 
        u1_q2: 'A', 
        u1_q3: 'A',
        u1_q4: 'A', 
        u1_q5: 'B', 
        u1_q6: 'C', 
        u1_q7: 'B', 
        u1_q8: 'B', 
        u1_q9: 'D', 
        u1_q10: 'C' 
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
        res += `, womp womp, skill issue, you answered ${wrongAns.join(', ')} wrong :D, did u really think that I was dumb enough to make A the answer to everything?` 
      } else {
        res += `, W! Perfect Score!` 
      }
      
      result.innerHTML = `<p>${res}</p>` 
      result.className = "result-message active" 
      result.scrollIntoView({ behavior: "smooth" }) 
    }
  }
}) 