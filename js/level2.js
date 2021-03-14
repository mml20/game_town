let coin = 0;
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let que = ["Номер телефона пожарной службы", "Номер телефона скорой медицинской помощи", "Единый номер всех служб", "Номер телефона газовой службы", "Номер телефона милиции"];
let ans = ['101', '103', '112', '104', '102'];
let id = randomInteger(0, que.length-1);
window.onload = function(){
    document.getElementById("text").innerHTML = que[id];
}
function back(){
    if ( document.getElementById("inpu").value == ans[id]){
        localStorage.coin = parseInt(localStorage.coin) + 10;
    }else{
        localStorage.coin = parseInt(localStorage.coin) - 2;
    }
    document.location.href = "https://mml20.github.io/game_town.github.io/screens/menu.html";
};
