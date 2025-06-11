let rock = document.getElementById("rock");
console.log(rock);

let paper = document.getElementById("paper");
console.log(paper);

let scissors = document.getElementById("scissors");
console.log(scissors);

const choices = ["rock", "paper", "scissors"];
console.log(choices);

let computerChoice = document.querySelector(".computerchoice");

function compPicks() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// rock.addEventListener("click", () => {
//   console.log("Rock btn clicked");
// });

// paper.addEventListener("click", () => {
//   console.log("Paper btn click");
// });

// scissors.addEventListener("click", () => {
//   console.log("scissors btn click");
// });

const btns = document.querySelectorAll(".btns");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".selected")?.classList.remove("selected");
    console.log(btn.id);
    btn.classList.add("selected");

    let computerChoice = compPicks();
    console.log(computerChoice);

    // alert(`You chose: ${btn.id} and Computer Chose: ${computerChoice}`);

    if (
      (btn.id === "rock" && computerChoice === "scissors") ||
      (btn.id === "paper" && computerChoice === "rock") ||
      (btn.id === "scissors" && computerChoice === "paper")
    ) {
      //   alert("You Win!");
      document.querySelector(".computerchoice").textContent = computerChoice;
      document.getElementById("Result").textContent = "You Win!";
    } else if (
      (computerChoice === "rock" && btn.id === "scissors") ||
      (computerChoice === "paper" && btn.id === "rock") ||
      (computerChoice === "scissors" && btn.id === "paper")
    ) {
      //   alert("Computer Wins!");
      document.querySelector(".computerchoice").textContent = computerChoice;
      document.getElementById("Result").textContent = "Computer Wins!";
    } else if (btn.id === computerChoice) {
      //   alert("It's a Tie!");
      document.querySelector(".computerchoice").textContent = computerChoice;
      document.getElementById("Result").textContent = "It's a Tie!";
    } else {
      //   alert("Invalid Choice");
      document.querySelector(".computerchoice").textContent = computerChoice;
    }
  });
});
