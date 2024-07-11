
//Event Listeners 
/*
syntax element.addEventListener(event, handler) or (event, function)
*/

const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const cppBox = document.querySelector('.cpp');
const toggleContent = document.querySelector('.toggle-content')

function toggle() {
  if(cppBox.classList.contains('hide-content')) {
    cppBox.classList.remove('hide-content');
  }else {
    cppBox.classList.add('hide-content');
  }
}

toggleContent.onclick = () => {
  toggle();
}
const setBackgroundColor = () => {
  cppBox.style.backgroundColor = "green";
}
cppBox.addEventListener("mouseover", setBackgroundColor)

function alertButton() {
  alert("I love Java")
}
btn2.addEventListener("click", alertButton)
// btn2.onclick = () => {
//   alertButton()
// }
// Traversing the DOM
/*

const ul = document.querySelector("ul")
const html = document.documentElement
console.log(html)
console.log(html.parentElement)
console.log(html.parentNode)
// console.log(ul)
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)
// console.log(ul.children)
// console.log(ul.parentElement.parentElement)

*/

//creating elements
/*
const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding element
ul.append(li);
//modify text
li.innerText = "Kotlin"

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerHTML)
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)

//set and remove attributes
li.classList = "active list-items"

console.log(li.classList.contains('active'))
li.classList.remove('active')
console.log(li.classList.contains('active'))

// Remove an Element
li.remove()
// li.setAttribute('id', "main-heading")
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'))
// title.removeAttribute('id')
*/

//styling elements
/*Styling an Element



const title = document.querySelector('#main-heading')
const listItems = document.querySelectorAll(".list-items")
//inline styling only works for a single element(you can't style multiple elements with inline styling)
title.style.color = "white";

for(i in listItems) {
  listItems[i].style.color = "green";
}
*/

//get elements
/*Selecting Elements in the DOM
const title = document.getElementById("main-heading")
const listItems = document.getElementsByClassName('list-items')
const list = document.getElementsByTagName('li')
//with query selector you can get any element either with tag, class or id
//selects only first element that matches the parameter
//use query selector all to select all elements that match the parameter
const container = document.querySelector('.container')

console.log(`getElementById: ${title}`)

console.log(`getElementsByClassName: ${JSON.stringify(listItems)}`)
console.log(`getElementsByTagName: ${JSON.stringify(list)}`)
console.log(container)
*/