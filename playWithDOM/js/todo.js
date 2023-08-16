/* let count = 0;
document.querySelector("#task-btn").addEventListener("click", function () {
  //   complete clear all button task
  document.querySelector("#clear-btn").addEventListener("click", function (e) {
    // console.log(e.target.parentElement.parentElement.children[0].children[1]);
    e.target.parentElement.parentElement.children[0].children[1].style.display =
      "none";

    //   disable the clear all button
    e.target.style.display = "none";
  });
}); */

let count = 1;
document.getElementById("task-btn").addEventListener("click", function () {
  const inputFiled = document.getElementById("input-value");
  const inputValue = inputFiled.value;
  inputFiled.value = "";

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th>${count++}</th>
    <td>${inputValue}</td>
    <td>
        <button class="done-btn btn btn-success btn-xs">Done</button>
        <button class="delete-btn btn btn-error btn-xs">Delete</button>
    </td>
  `;

  const tableContent = document.getElementById("content-container");
  tableContent.appendChild(tr);

  const doneBtn = document.getElementsByClassName("done-btn");
  for (let btn of doneBtn) {
    btn.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.textDecoration = "line-through";
    });
  }

  const deleteBtn = document.getElementsByClassName("delete-btn");
  for (let btn of deleteBtn) {
    btn.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.display = "none";
    });
  }

  document.getElementById("clear-btn").addEventListener("click", function (e) {
    e.target.parentNode.parentNode.children[0].children[1].style.display =
      "none";
    e.target.style.display = "none";
  });
});
