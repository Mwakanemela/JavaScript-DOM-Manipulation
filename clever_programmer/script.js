const title = document.getElementById('title');
const titleDiv = document.getElementById('titleDiv');
let message = "My name is: Kayange Mwakanemela"
console.log(title)
title.innerText = message
console.log(title.innerText)
titleDiv.innerHTML = `<p>${message}</p>`