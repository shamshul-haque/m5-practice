// event handling
// option-1 is directly in html

// option-2 (We will use it mostly)
function makeRed() {
  document.body.style.background = "red";
}

// option-3
const makeBlueButton = document.getElementById("make-blue");
function makeBlue() {
  document.body.style.background = "blue";
}
makeBlueButton.onclick = makeBlue;

// option-4
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.onclick = function makeGreen() {
  document.body.style.background = "green";
};

// option-5
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.background = "pink";
}

// option-6
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.addEventListener("click", function makePurple() {
  document.body.style.background = "purple";
});

// option-7 (We will use it sometimes)
document.getElementById("make-orange").addEventListener("click", function () {
  document.body.style.background = "orange";
});
