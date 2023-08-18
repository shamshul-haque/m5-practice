// fun-1
const oppenheimer = document.getElementById("oppenheimer");
const img = document.createElement("img");
oppenheimer.appendChild(img);
img.setAttribute("src", "./images/oppenheimer.png");
img.className = "logo";

// fun-2
const dance = document.getElementById("dance");
dance.addEventListener("click", function () {
  const img1 = document.createElement("img");
  img1.setAttribute("src", "./images/dancing.gif");
  oppenheimer.appendChild(img1);
  img1.style.margin = "auto";
  const audio = document.createElement("audio");
  audio.setAttribute("src", "./images/music.mp3");
  audio.autoplay = true;
  oppenheimer.appendChild(audio);
  dance.style.display = "none";
  img.style.display = "none";
});

// fun-3
const addList = document.getElementById("add-list");
const li = document.createElement("li");
addList.appendChild(li);
li.innerHTML = `
<li>Apple 🍎</li>
<li>Banana 🍌 </li>
<li>Grapes 🍇</li>`;
li.style.listStyle = "none";

// fun-4
const viewEye = document.getElementById("view-eye");
const hideEye = document.getElementById("hide-eye");
const password = document.getElementById("password");
viewEye.addEventListener("click", function () {
  this.setAttribute("hidden", "true");
  password.setAttribute("type", "password");
  hideEye.removeAttribute("hidden");
});
hideEye.addEventListener("click", function () {
  password.setAttribute("type", "text");
  this.setAttribute("hidden", "true");
  viewEye.removeAttribute("hidden");
});
