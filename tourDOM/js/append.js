/* appendChild, innerHTML, innerText */
//inner HTML
console.log(document.getElementsByClassName("a")[0].innerHTML);

//inner text
console.log(document.getElementsByClassName("a")[0].innerText);

// set element using append child
const mainContainer = document.getElementById("main-container");

const foodSection = document.createElement("section");
mainContainer.appendChild(foodSection);

const h1 = document.createElement("h1");
h1.innerText = "Food List";
foodSection.appendChild(h1);

const ul = document.createElement("ul");
foodSection.appendChild(ul);

const li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Borhani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Salad";
ul.appendChild(li3);

// set element directly
const dressSection = document.createElement("section");
mainContainer.appendChild(dressSection);
dressSection.innerHTML = `   
<h1>Dress List</h1>
<ul>
    <li>Shirt</li>
    <li>T-Shirt</li>
    <li>Pant</li>
</ul>`;
