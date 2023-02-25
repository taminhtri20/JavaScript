let btnRef = document.querySelectorAll(".button-option");
let winnningPattern = [ [0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6] ];
let xTurn = true;
let count = 0;
// Click X/O 
btnRef.forEach((element) => {
    element.addEventListener("click", () =>{
        if (xTurn){
            xTurn = false;
            element.innerText = "X";
        } else {
            xTurn = true;
            element.innerText = "O";
        }
        count += 1;
        if(count === 9){
            alert("Draw")
            gameOver();     
        }if(count > 4){
        winChecker();
    }
    });
 });   
// Win logic
const winChecker = () => {
    for(let i of winnningPattern){
        let [element1, element2, element3] = [btnRef[i[0]].innerText,btnRef[i[1]].innerText,btnRef[i[2]].innerText];
        // let element1 = btnRef[i[0]].innerText;
        // let element2 = btnRef[i[0]].innerText;
        // let element3 = btnRef[i[0]].innerText;
        if(element1 != "" && element2 != "" && element3 != "" ){
            if(element1 == element2 && element2 == element3){
                winFunction(element1);
            }
        }
    }
} 
const winFunction = (letter) => {
    if (letter  == "X"){
        alert("X wins");
        gameOver();
    }else{
        alert("O wins");
        gameOver();
    }
} 
//  Restart
function resetgame(){
    if(!confirm("Do you want restart")){
        return;
    }
    for(const element of btnRef){
        element.innerText = "";
    }
    count = 0;
}
// Game over
const gameOver = () => {
    for(const element of btnRef){
        element.innerText = "";
    }
    count = 0;
}