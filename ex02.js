let list = document.getElementById('list');

// let coffeeItem = list.firstElementChild.nextElementSibling
let coffeeItem = list.children[1];
coffeeItem.innerHTML = 'Fair Trade Coffee';


// added Cheez Wiz to list in HTML
let cheezWiz = document.createElement("li")
cheezWiz.innerHTML = "Cheez Wiz";
list.appendChild(cheezWiz);

let newList = ["protien powder", "muscle milk", "power bar"];

list.innerHTML = "";
newList.map(function(listItem) {
    let newItem = document.createElement('li');
    newItem.innerHTML = listName;
    list.appendChild(newItem);
});

let muscleMilk = list.firstElementChild.nextElementSibling
muscleMilk.clissList += 'important';