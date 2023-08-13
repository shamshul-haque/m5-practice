document.getElementById("body").addEventListener("click", function () {
  console.log("body");
});

document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("section");
  });

document.getElementById("items").addEventListener("click", function () {
  console.log("ul");
});

document.getElementById("item-3").addEventListener("click", function (event) {
  console.log("li1");
  //   event.stopPropagation(); //all will stop
  event.stopImmediatePropagation(); //immediate one will stop
});
document.getElementById("item-3").addEventListener("click", function (event) {
  console.log("li2");
});
document.getElementById("item-3").addEventListener("click", function (event) {
  console.log("li3");
});
document.getElementById("item-3").addEventListener("click", function (event) {
  console.log("li4");
});
