/*Styling an Element

*/

const title = document.querySelector('#main-heading')
const listItems = document.querySelectorAll(".list-items")
//inline styling only works for a single element(you can't style multiple elements with inline styling)
title.style.color = "white";

for(i in listItems) {
  listItems[i].style.color = "green";
}










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