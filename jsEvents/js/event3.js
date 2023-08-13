// more events
document.getElementById("btn-more").addEventListener("mouseenter", function () {
  console.log("object1");
});

document.getElementById("btn-more").addEventListener("mousemove", function () {
  console.log("object2");
});

document.getElementById("text-field").addEventListener("focus", function () {
  console.log("object3");
});

document.getElementById("text-field").addEventListener("blur", function () {
  console.log("object4");
});

document.getElementById("text-field").addEventListener("click", function () {
  console.log("object5");
});

document
  .getElementById("text-field")
  .addEventListener("keydown", function (events) {
    console.log(events.target.value);
  });

document
  .getElementById("text-field")
  .addEventListener("keypress", function (events) {
    console.log(events.target.value);
  });

document
  .getElementById("text-field")
  .addEventListener("keyup", function (events) {
    console.log(events.target.value);
  });
