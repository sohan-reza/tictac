"use strict";

const boxes=Array.from(document.querySelectorAll(".diagonal"));

let restart=document.querySelector("#btn");
const box = document.getElementById("main-box");
const playerSelect=document.getElementById("playerSelect");
const singlePlayer=document.getElementById("singlePlayer");
const twoPlayer=document.getElementById("twoPlayer");
const X_text="X";
const O_text="O";
let currentPlayer=X_text;
let check=Array(9).fill(null);

singlePlayer.addEventListener('click',()=>{
  box.classList.toggle('hidden');
  box.classList.add("visible");
  playerSelect.style.display="none";
});

twoPlayer.addEventListener('click',()=>{
  box.classList.toggle('hidden');
  box.classList.add("visible");
  playerSelect.style.display="none";
  startGame();
});

const startGame=()=>{
  boxes.forEach((box)=>{
    box.addEventListener('click', boxclicked)
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
  checkFinished();
}


function checkFinished() {
  let win=false;
 
  const log = console.log;

  //check horizontal
  if ((check[0] !== null && check[1] !== null && check[2] !== null) && (check[0] === check[1] && check[1] === check[2])) {
    box.innerHTML +=`<span id="first-vertical"></span>`;
    win=true;
  }else if((check[3] !== null && check[4] !== null && check[5]!== null) && (check[3]===check[4] && check[4]===check[5])) {
    box.innerHTML +=`<span id="second-vertical"></span>`;
    win=true;
  }else if((check[6] !== null && check[7] !== null && check[8]!== null) && (check[6]===check[7] && check[7]===check[8])) {
    box.innerHTML +=`<span id="third-vertical"></span>`;
    win=true;
  }

  //check vertically
  if((check[0] !== null && check[3] !== null && check[6]!== null) && (check[0]===check[3] && check[3]===check[6])) {
    box.innerHTML +=`<span id="first-horizontal"></span>`;
    win=true;
  }else if((check[1] !== null && check[4] !== null && check[7]!== null) && (check[1]===check[4] && check[4]===check[7])) {
    box.innerHTML +=`<span id="second-horizontal"></span>`;
    win=true;
  }else if((check[2] !== null && check[5] !== null && check[8]!== null) && (check[2]===check[5] && check[5]===check[8])) {
    box.innerHTML +=`<span id="third-horizontal"></span>`;
    win=true;
  }

  //check diagonally
  if((check[0] !== null && check[4] !== null && check[8]!== null) && (check[0]===check[4] && check[4]===check[8])) {
    box.innerHTML +=`<span id="negative-diagonal"></span>`;
    win=true;
  }else if((check[2] !== null && check[4] !== null && check[6]!== null) && (check[2]===check[4] && check[4]===check[6])) {
    box.innerHTML +=`<span id="positive-diagonal"></span>`;
    win=true;
  }

  if(win) {
    alert(`Player ${(currentPlayer === "X") ? "O" : "X"} Won!`);
    location.reload();
  }else{
    if (check.every((value) => value !== null)) {
      alert("Draw");
      location.reload();
    }
  }

}


function Restart(){
  check.fill(null);
  boxes.forEach((box)=>{
    box.innerText='';
  });
}
restart.addEventListener('click',Restart);
