let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true; //playerX, playerO
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");
let count =0;

//2d array
const winpattern = [
    [0,1,2]
    ,[3,4,5]
    ,[6,7,8]
    ,[0,3,6]
    ,[1,4,7]
    ,[2,5,8]
    ,[0,4,8]
    ,[2,4,6]
];


const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        
        if(turnO){//playerO{
            box.innerText = "O";
            turnO = false;
        }
        else //palyerX
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        if (checkWinner()) {
            return; // Exit if there's a winner
        }
        if (count === 9) {
            gameDraw();
        }
        });
});

const gamedraw = () => {
    msg.innerText = `game was draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => 
{
    for (let box of boxes)
    {
        box.disabled = true;

    }
}

const enableBoxes = () => 
    {
        for (let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
    
        }
    }

const showWinner = (winner) => {
msg.innerText = `congatulation, you winner is  ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}

const checkWinner = (winner) => {
 for( let pattern of winpattern){
    //console.log(pattern[0],pattern[1],pattern[2]);
    //console.log(
         //boxes[pattern[0]].innerText
       // ,boxes[pattern[1]].innerText
        //,boxes[pattern[2]].innerText);
 

 let pos1val =  boxes[pattern[0]].innerText;
 let pos2val =  boxes[pattern[1]].innerText;
 let pos3val =  boxes[pattern[2]].innerText;
 
 if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val == pos2val && pos2val == pos3val){
        console.log("winner" , pos1val);
        showWinner(pos1val);
        return 0;
    }
  }
 }
};

newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

