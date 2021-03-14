let coin_text = document.getElementById("coin_text");
coin_text.innerHTML = parseInt(localStorage.coin) + "$";
function level(lvl){
    document.location.href = "../screens/level"+lvl+".html";
}