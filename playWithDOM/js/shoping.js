let total = 0;
let discount = 0;
let grandTotal = 0;
function handleClickBtn(target) {
  const itemName = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;

  const selectedItem = document.getElementById("selected-items");
  selectedItem.appendChild(li);

  const itemPrice = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(itemPrice);
  document.getElementById("total").innerText = total;
  document.getElementById("grand-total").innerText = total;

  document
    .getElementById("coupon-code")
    .addEventListener("keyup", function (e) {
      const text = e.target.value;
      const applyBtn = document.getElementById("apply");
      if (text === "DIC25") {
        applyBtn.removeAttribute("disabled");
      } else {
        applyBtn.setAttribute("disabled", true);
      }
      applyBtn.addEventListener("click", function () {
        discount = (25 / 100) * total;
        document.getElementById("discount").innerText = discount;
        document.getElementById("coupon-code").value = "";
        grandTotal = total - discount;
        document.getElementById("grand-total").innerText = grandTotal;
      });
    });
}
