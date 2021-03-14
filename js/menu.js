let coin_text = document.getElementById("coin_text");
coin_text.innerHTML = parseInt(localStorage.coin) + "$";
function level(lvl){
    document.location.href = "https://mml20.github.io/game_town.github.io/screens/level"+lvl+".html";
}
