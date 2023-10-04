const boxes=Array.from(document.querySelectorAll(".diagonal"));

const X_text="X";
const O_text="O";
let currentPlayer=X_text;
let check=Array(9).fill(null);

const startGame=()=>{
  boxes.forEach((box)=>{
    box.addEventListener('click',boxclicked)
  });
}

function boxclicked(e){
  let boxId=e.target.id;
  if(check[boxId]===null){
    check[boxId]=currentPlayer;
    e.target.innerText=currentPlayer;
    currentPlayer= currentPlayer===X_text ? O_text:X_text;
  }
}

startGame();