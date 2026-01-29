let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;   // true = O , false = X
let count = 0;     // kitne box fill ho chuke hain

// Winning patterns
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

// Box click event
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    count++;

    checkWinner();
  });
});

// Winner & Draw check
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      alert(`Winner is ${pos1} 🎉`);
      disableBoxes();
      return;
    }
  }

  // DRAW LOGIC
  if (count === 9) {
    alert("Game Draw 😐");
  }
};

// Disable all boxes
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Reset game
resetBtn.addEventListener("click", () => {
  turnO = true;
  count = 0;

  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
});
