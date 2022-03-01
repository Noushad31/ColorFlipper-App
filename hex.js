// variables declarations
const btn = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

// Define Hexadecimal code letters array #ff1112
let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
  // for loop is used to add all the hex letters
  //  every time the getRandomNumber function is invoked will generate new number
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexCode[getRandomNumber()];
  }

  //   after getting the hexcolor will be assign it to the background color
  document.body.style.backgroundColor = hexColor;
  //   document.body.innerText = colors[randomeColor];
  colorCode.textContent = hexColor;
});

// to get random number

function getRandomNumber() {
  return Math.floor(Math.random() * hexCode.length);
}
