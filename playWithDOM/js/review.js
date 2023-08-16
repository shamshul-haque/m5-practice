document.querySelector("#submit-btn").addEventListener("click", function () {
  const textArea = document.querySelector("#text-area");
  const areaValue = textArea.value;
  const commentContainer = document.querySelector("#review");
  const p = document.createElement("p");
  p.innerText = areaValue;
  commentContainer.appendChild(p);
  p.style.margin = "5px 0";
  textArea.value = "";
});

document
  .querySelector("#text-area")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const textArea = document.querySelector("#text-area");
      const areaValue = textArea.value;
      const commentContainer = document.querySelector("#review");
      const p = document.createElement("p");
      p.innerText = areaValue;
      commentContainer.appendChild(p);
      p.style.margin = "5px 0";
      textArea.value = "";
    }
  });
