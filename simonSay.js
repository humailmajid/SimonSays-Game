let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "blue"];
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started")
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
  
}
function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
  
}

function levelUp() {
    userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
//   console.log(randIdx);
//   console.log(randColor);
//   console.log(randBtn);
  gameFlash(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  
}
function checkAns(idx){
   if(userSeq[idx]===gameSeq[idx]){
     if (userSeq.length===gameSeq.length) {
        setTimeout(levelUp, 1000);
     }
   }
   else{
    h2.innerHTML=`Game over!Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red"
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor="white"  
    }, 150);

    restGame();
   }
}
function btnPress() {
    
  let btn = this;
  userFlash(btn);
   userColor=btn.getAttribute("id")
   userSeq.push(userColor)
   console.log(userSeq)
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function restGame(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}