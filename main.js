const boxes=Array.from(document.querySelectorAll(".diagonal"));
const restart=document.querySelector("#btn")
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
    if(currentPlayer===X_text){
      currentPlayer=O_text;
    }
    else{
      currentPlayer=X_text;
    }
  }
}

function Restart(){
  check.fill(null);
  boxes.forEach((box)=>{
    box.innerText='';
  })
}
restart.addEventListener('click',Restart);

startGame();