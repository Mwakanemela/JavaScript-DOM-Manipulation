const title = document.getElementById('title');
const titleDiv = document.getElementById('titleDiv');

const blackBox = document.getElementById('black')
const redBox = document.getElementById('red')
const greenBox = document.getElementById('green')

let message = "My name is: Kayange Mwakanemela"

// console.log(title)

title.innerText = message

// console.log(title.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.color = 'blue'
titleDiv.style.backgroundColor = 'gray'
// console.log(titleDiv.style.color)

blackBox.onclick = () => {
  console.log(`Black box clicked`)
}

redBox.onclick = () => {
  console.log(`Red box clicked`)
}

greenBox.onclick = () => {
  console.log(`Green box clicked`)
}