console.log("hello from outer js!");
console.dir(document);
console.log(document);

// get element by tag name
const liCollection = document.getElementsByTagName("li");
console.log(liCollection);
// for (let li of liCollection) {
//   console.log(li);
// }

// get element by id
const idGet = document.getElementById("title");
console.log(idGet);

// get element by id
const classGet = document.getElementsByClassName("important");
console.log(classGet);
// for (let items of classGet) {
//   console.log(items);
// }

//get element by query selector
const selectorGet1 = document.querySelector("#desc");
console.log(selectorGet1);

//get element by query selector all
const selectorGet = document.querySelectorAll(".important");
console.log(selectorGet);
// for (let li of selectorGet) {
//   console.log(li.innerText);
// }

// get attribute
const test = document.getElementById("title");
console.log(test.getAttribute("class"));

// set attribute
console.log(test.setAttribute("title", "testing"));
