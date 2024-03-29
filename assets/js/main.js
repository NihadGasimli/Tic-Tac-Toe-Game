let allBoxs = document.querySelectorAll(".box");
const turnText = document.querySelector(".turnText");
const newGameBtn = document.querySelector(".newGameBtn");
var arrayOfX = [];
var arrayOfO = [];
var turnCounter = 0;
var turn;

function click(turn) {
    for (let i = 1; i <= allBoxs.length; i++) {
        allBoxs[i - 1].onclick = function () {
            switch (i) {
                case 1:
                    if (!arrayOfX.includes(1) && !arrayOfO.includes(1)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(1);
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(1);
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="firstBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 2:
                    if (!arrayOfX.includes(2) && !arrayOfO.includes(2)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(2)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(2)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="secondBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 3:
                    if (!arrayOfX.includes(3) && !arrayOfO.includes(3)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(3)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(3)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="thirdBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 4:
                    if (!arrayOfX.includes(4) && !arrayOfO.includes(4)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(4)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(4)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="fourBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 5:
                    if (!arrayOfX.includes(5) && !arrayOfO.includes(5)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(5)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(5)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="fiveBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 6:
                    if (!arrayOfX.includes(6) && !arrayOfO.includes(6)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(6)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(6)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="sixBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 7:
                    if (!arrayOfX.includes(7) && !arrayOfO.includes(7)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(7)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(7)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="sevenBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 8:
                    if (!arrayOfX.includes(8) && !arrayOfO.includes(8)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(8)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(8)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="eightBoxText">${turn}</h1>
                        `
                    }
                    break;
                case 9:
                    if (!arrayOfX.includes(9) && !arrayOfO.includes(9)) {
                        if (turnCounter % 2) {
                            turn = "O";
                            turnText.innerHTML = "Turn of X";
                            arrayOfO.push(9)
                        }
                        else {
                            turn = "X";
                            turnText.innerHTML = "Turn of O";
                            arrayOfX.push(9)
                        }
                        turnCounter++;
                        allBoxs[i - 1].innerHTML = `
                        <h1 class="nineBoxText">${turn}</h1>
                        `
                    }
                    break;
                default:
            }
            setTimeout(function () {
                checkWin(arrayOfX);
                checkWin(arrayOfO);
            }, 100)
        }
    }

}

click(turn);


function hoverBox() {
    var z = turnText.innerHTML;
    for (let i = 1; i <= allBoxs.length; i++) {
        allBoxs[i - 1].onmouseenter = function () {
            if (!arrayOfO.includes(i) && !arrayOfX.includes(i)) {
                allBoxs[i - 1].style.backgroundColor = "#3C4250"
                allBoxs[i - 1].innerHTML = z[z.length - 1];
            }
        }
        allBoxs[i - 1].onmouseleave = function () {
            allBoxs[i - 1].style.backgroundColor = "#78BEC5"
            if (!arrayOfO.includes(i) && !arrayOfX.includes(i)) {
                allBoxs[i - 1].innerHTML = "";
            }
        }

    }
};

setInterval(hoverBox, 1);

function checkWin(playerArray) {

    var drawGame = false;
    const winCombinations = [
        [1, 2, 3], [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [7, 8, 9], [9, 6, 3], [1, 5, 9], [3, 5, 7],
        [4, 5, 6], [7, 8, 9]
    ];


    for (let i of winCombinations) {
        let isWinner = true;
        for (let pos of i) {
            if (!playerArray.includes(pos)) {
                isWinner = false;
                break;
            }
        }

        if (isWinner) {
            document.querySelector("#game").style.cursor = "default";
            if (playerArray === arrayOfX) {
                document.querySelector(".popUpSec").style.display = "flex"
                document.querySelector(".popUp").style.display = "flex"
                document.querySelector(".popUpText").innerHTML = "X Winner!";
            }
            else if (playerArray === arrayOfO) {
                document.querySelector(".popUpSec").style.display = "flex"
                document.querySelector(".popUp").style.display = "flex"
                document.querySelector(".popUpText").innerHTML = "O Winner!";
            }
            drawGame = true;
            return;
        }
    }

    if (turnCounter === 9 && !drawGame && playerArray !== arrayOfO && playerArray !== arrayOfX) {
        document.querySelector(".popUpSec").style.display = "flex"
        document.querySelector(".popUp").style.display = "flex"
        document.querySelector(".popUpText").innerHTML = "You drew the game!"
        return;
    }
}

function restart() {
    document.querySelector("#game").style.cursor = "pointer";
    allowClicked = true;
    turnText.innerHTML = "Turn of X";
    arrayOfX = [];
    arrayOfO = [];
    turnCounter = 0;
    for (let i in allBoxs) {
        allBoxs[i].innerHTML = "";
    }
}

newGameBtn.addEventListener("click", function () {
    document.querySelector(".popUp").classList.add("popUpClose");
    setTimeout(function () {
        document.querySelector(".popUp").style.display = "none";
        document.querySelector(".popUp").classList.remove("popUpClose");
        document.querySelector(".popUpSec").style.display = "none"
        restart();
    }, 800);
})