const title = document.getElementById('title');
const titleDiv = document.getElementById('titleDiv');

const blackBox = document.getElementById('black')
const redBox = document.getElementById('red')
const greenBox = document.getElementById('green')
const clearButton = document.getElementById('clear')

const colorDiv = document.querySelectorAll('.colorDiv')

const timesClicked = {"red": 0, "green": 0, "black": 0}
colorDiv.forEach(color => {
  // console.log(color.value)
  color.onclick = () => {
    timesClicked[color.value] += 1
      color.innerText = timesClicked[color.value]
    // console.log(color.value)
  }
})

clearButton.onclick = () => {
  clearAll()
}
function clearAll() {
  colorDiv.forEach(color => {
    color.innerText = ''
    timesClicked[color.value] = 0
  })
}
// for(const value in colorDiv) {
//   console.log(colorDiv[value].value)
// }
// console.log(colorDiv[0].value)

let message = "My name is: Kayange Mwakanemela"

// console.log(title)

title.innerText = message

// console.log(title.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.color = 'blue'
titleDiv.style.backgroundColor = 'gray'
// console.log(titleDiv.style.color)

// blackBox.onclick = () => {
//   console.log(`Black box clicked`)
// }

// redBox.onclick = () => {
//   console.log(`Red box clicked`)
// }

// greenBox.onclick = () => {
//   console.log(`Green box clicked`)
// }