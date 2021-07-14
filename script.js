// Get a single node
// let el = document.getElementById('username');

//Get all inputs
// let inputs = document.getElementsByTagName('input');
// let inError = document.getElementsByClassName('error');

// console.log(inputs.length); //2
// console.log(inError.length); //1

//Get all inputs
let firstButton = document.querySelector('button');
let inError = document.querySelectorAll('input.error');

console.log(firstButton); //single button node
console.log(inError); //Node list of inputs with class 'error'

// Traversing the DOM
let listItems = document.querySelector('ul').children;
console.log(listItems.length); //2

// using parent, nextElementSibling, and previousElementSibling
// let selectedItem = document.querySelector('li.selected');
// let first = selectedItem.previousElementSibling;
// let last = selectedItem.nextElementSibling;
// let list = selectedItem.parentElement;
// let header = selectedItem.parentElement.parentElement;
// let section = selectedItem.parentElement.parentElement.nextElementSibling;

// console.log("selectedItem");
// console.log(selectedItem);
// console.log("first");
// console.log(first);
// console.log("last");
// console.log(last);
// console.log("list");
// console.log(list);
// console.log("header");
// console.log(header);
// console.log("section");
// console.log(section);

// Editing a NODE
//Get all inputs
// let myDiv = document.querySelector('div');
// let myA = document.querySelector('a');

// console.log("The innerHTML of 'A': ");
// console.log(myA.innerHTML);
// console.log("InnerHTML of the Div: ");
// console.log(myDiv.innerHTML);

// myA.innerHTML = '<h2>This is HUGE</h2>';
// myA.innerText = `Your User Name: ${username.value}`;



// ----- TODO LIST BASICS --
// let newLi = document.createElement('li');
// newLi.innerHTML = 'Item 2';
// let todoList = document.getElementById('todoList');
// todoList.appendChild(newLi);

// let button = document.getElementById('add');

// function addItem() {
//     let newItem = document.createElement('li');
//     newItem.innerHTML = 'New ToDo'
//     todoList.appendChild(newItem);
//     username.value = '';
// }
// button.addEventListener('click', addItem);

// DOM EVENTS
let el = document.getElementById('myEl');
el.addEventListener('click', function(event) {
    alert('clicked!');
})

//Combine with DOM editing
el.addEventListener('mouseover', function(event) {
    el.innerHTML('over');
})

el.addEventListener("mouseover", function(event) {
    el.innerHTML = "Mouseover";
});

el.addEventListener('mouseout', function(event) {
    el.innerHTML = "Mouseout";
});

document.querySelector('.outer').addEventListener("click", function(e))
    // e represents the even element that has been clicked
consle.log('Target (originally occored): ');