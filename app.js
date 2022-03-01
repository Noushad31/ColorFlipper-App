// variables declarations
const btn = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

// define colors array
let colors = ["green", "pink", "yellow", "blue", "rgb(230,140,154)", "#ffccff"];

btn.addEventListener("click", function () {
  //   to get random number
  //   let randomeColor = Math.floor(Math.random() * colors.length);

  let randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  //   document.body.innerText = colors[randomeColor];
  colorCode.textContent = colors[randomNumber];
});

// to get random number

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
