const sections = document.querySelectorAll("section");
for (let section of sections) {
  section.style.border = "2px solid green";
  section.style.borderRadius = "8px";
  section.style.padding = "10px";
  section.style.marginBottom = "5px";
}

const container = document.getElementById("dom-container");
container.style.backgroundColor = "yellowGreen";

container.classList.add("font");
container.classList.remove("font");

// node list
console.log(container.firstChild);
console.log(container.childNodes);
console.log(container.childNodes[3]);
console.log(container.childNodes[3].childNodes);
console.log(container.childNodes[3].childNodes[4].previousSibling);
console.log(container.childNodes[3].childNodes[5].nextSibling);
