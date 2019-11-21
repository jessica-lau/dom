// Reading information from DOM elements
// 1) Console.log the text of the element with the id of "title"
const printTitle = document.querySelector('#title').innerHTML;
console.log(printTitle);
// 2) Console.log the class of the first span on the page
const printSpan = document.querySelector('span').className;
console.log(printSpan);
// Updating properties of DOM elements
// 1) Turn the text blue in the first element with the "blue" class
const changeColor = document.querySelector('.blue').style.color = 'blue';
console.log(changeColor);
// 2) Change the text of the "#title" element to a greeting of your choice
const changeTitle = document.querySelector('#title').innerHTML = 'I am Jessica';

// Creating new DOM elements
// 1) Create an h4 element with the text of "Powered by Javascript"
// 1b) Add that element to the page after the h1 but before the p tag
// 2) Create a ul with class "todos" and add it to the end of the page
const newHeader = document.createElement('h4');
newHeader.innerText = "Power by Javascript";
console.log(newHeader);
const header1 = document.getElementById('title');
header1.insertAdjacentElement("afterend", newHeader);
const list = document.createElement('ul');
list.setAttribute("class", "todos");
const lastElement = document.querySelector('body');
lastElement.appendChild(list);
// 2b) Looping through this array, add the strings as <li> elements
const toDoList = ["create elements", "update them", "add them to DOM"];
for (let i = 0; i < toDoList.length; i++) {
    const item = document.createElement('li');
    list.appendChild(item);
    const textnode = document.createTextNode(toDoList[i]);
    item.appendChild(textnode);
}


