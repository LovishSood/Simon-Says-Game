let gameSeq = [];
let userSeq = [];
let btns=["red","blue","green","yellow"]
let started = false;
let level = 0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    }
})

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },150)
}
function  userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },150)
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`; 

    let randomIdx=Math.floor(Math.random()*3);
    randCol=btns[randomIdx];
    let randbtn=document.querySelector(`.${randCol}`)
    gameSeq.push(randCol);
    console.log(gameSeq)
    
    btnflash(randbtn);
}

function checkans(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(gameSeq.length==userSeq.length){
           setTimeout(levelup,1000)
        }
       
    }else{
        h2.innerHTML=`game over <b>your score is${level}</b><br>press any key to start`
        reset();
    }
}

function btnPress(){
    console.log(this)
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq)
    
    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}