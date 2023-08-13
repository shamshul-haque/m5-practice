document
  .getElementById("dlt-confirm")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById("btn-dlt");
    if (text === "delete") {
      deleteButton.removeAttribute("disabled");
    } else {
      deleteButton.setAttribute("disabled", true);
    }
  });

document.getElementById("btn-dlt").addEventListener("click", function () {
  const secretTitle = document.getElementById("title");
  secretTitle.style.display = "none";
  const inputField = document.getElementById("dlt-confirm");
  inputField.value = "";
});
