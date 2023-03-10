const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
  let iterations = 0
  const interval = setInterval(() => {
    let text = event.target.innerText.split("")
    text = text.map(letter => letters[Math.floor(Math.random() * 26)])
    text =text.join("")
    event.target.innerText = text

    if(iterations > 9) {
      event.target.innerText = 'HYPERPLEXED'
      clearInterval(interval)
    }

    iterations += 1
  }, 30)

}