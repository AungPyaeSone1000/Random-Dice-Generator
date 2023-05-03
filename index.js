let randomNumber1 = RandomNumGenerator(1,6);

let img1 = document.getElementsByClassName("img1")[0];
img1.src = "images/dice"+randomNumber1+".png";

let randomNumber2 = RandomNumGenerator(1,6);

let img2 = document.getElementsByClassName("img2")[0];
img2.src = "images/dice"+randomNumber2+".png";

if (randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 won!!";
}
else if (randomNumber2 > randomNumber1){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 won!!";
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "It's draw";
}


function RandomNumGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function refreshPage (){
    document.body.style.opacity = 0;
  setTimeout(function() {
    location.reload();
  }, 500);
}

function restart(){
    document.getElementsByTagName("h1")[0].innerHTML = "Press the Play button";
    img1.src = "images/dice6.png";
    img2.src = "images/dice6.png";

}
