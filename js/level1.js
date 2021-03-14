function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let coin = 0;
for (let i = 0; i < 10; i++) {
    let mash = document.createElement("img");
    let map1 = document.getElementById("map");
    let id_msh = randomInteger(0,1);
    mash.src = "../img/lvl1_m"+id_msh+".png";
    mash.style.marginLeft = randomInteger(-35, 30)+"%";
    mash.style.marginTop = randomInteger(5, 35)+"%";
    mash.id="mash";
    mash.onclick = function(){
        if ( id_msh == 1){
            coin = coin + 1;
            mash.src = "";
            console.log(coin);
        }else{
            coin = coin - 2;
            mash.src = "";
        }
    }
    document.getElementById("map").append(mash);
 }
 function back(){
    localStorage.coin = parseInt(localStorage.coin) + coin;
    document.location.href = "../screens/menu.html";
};