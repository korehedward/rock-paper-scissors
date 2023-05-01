const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const theResult = document.getElementById("result");
const rockImg = document.getElementById("rock-img");
const paperImg = document.getElementById("paper-img");
const scissorsImg = document.getElementById("scissors-img");
const rockImg2 = document.getElementById("rock-img2");
const paperImg2 = document.getElementById("paper-img2");
const scissorsImg2 = document.getElementById("scissors-img2");
const points = document.querySelector(".points");



function rpsMatch(choice) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var computerResponse = getRandomInt(1, 3);

  if (
    (computerResponse == 1 && choice == 1) ||
    (computerResponse == 2 && choice == 2) ||
    (computerResponse == 3 && choice == 3)
  ) {
    document.getElementById("result").innerHTML = "DRAW";
    document.body.style.backgroundColor = "#6096ba";
  } else if (
    (computerResponse == 1 && choice == 3) ||
    (computerResponse == 2 && choice == 1) ||
    (computerResponse == 3 && choice == 2)
  ) {
    points.innerHTML = 0;
    document.getElementById("result").innerHTML = "YOU LOST";
    document.body.style.backgroundColor = "#D90429";
  } else if (
    (computerResponse == 1 && choice == 2) ||
    (computerResponse == 2 && choice == 3) ||
    (computerResponse == 3 && choice == 1)
  ) {
    points.innerHTML = parseInt(points.innerHTML)+1;
    document.getElementById("result").innerHTML = "YOU WON";
    document.body.style.backgroundColor = "#0ba05a";
  }

  if (computerResponse === 1) {
    rockImg2.style.display = "block";
    paperImg2.style.display = "none";
    scissorsImg2.style.display = "none";
  } else if (computerResponse === 2) {
    rockImg2.style.display = "none";
    paperImg2.style.display = "block";
    scissorsImg2.style.display = "none";
  } else if (computerResponse === 3) {
    rockImg2.style.display = "none";
    paperImg2.style.display = "none";
    scissorsImg2.style.display = "block";
  }
}

buttonRock.addEventListener("click", () => {
  rpsMatch(1);
  rockImg.style.display = "block";
  paperImg.style.display = "none";
  scissorsImg.style.display = "none";
});

buttonPaper.addEventListener("click", () => {
  rpsMatch(2);
  paperImg.style.display = "block";
  rockImg.style.display = "none";
  scissorsImg.style.display = "none";
});

buttonScissors.addEventListener("click", () => {
  rpsMatch(3);
  scissorsImg.style.display = "block";
  rockImg.style.display = "none";
  paperImg.style.display = "none";
});
