const number = document.getElementById('number')
const button = document.getElementById('button')
const judge =  document.getElementById('judge')

let n = 1
let win = 0

button.addEventListener(
  'click',
  () => {
    if (Math.random() * 10 > 7) {
      win = 0
      judge.innerText  = "lose..."
      number.innerText = n = 1;
      button.setAttribute('id', 'button')
    } else {
      number.innerText = n = n * 2;
      win++
      judge.innerText = `${win}x Win!`

      buttonChange(win);
    }
  })

  function buttonChange(win) {
    if (win >= 10) return
    button.setAttribute('id','')
    button.setAttribute('class', `button${win}`)
  }