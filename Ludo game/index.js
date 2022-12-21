var randomNumber1 = Math.floor(Math.random()*6) + 1;// 1-6
var randomDiceImg1 = "img/dice" + randomNumber1 + ".png"; //img/dice1.png - img/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImg1); 


var randomNumber2 = Math.floor(Math.random()*6) + 1;//1-6
var rendomDiceImg2 = "img/dice" + randomNumber2 + ".png";//img/dice1.png - img/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",rendomDiceImg2);

//Heading Drawing
var winner = document.querySelectorAll("h1")[0];
var ans;
if(randomNumber1>randomNumber2){
    ans = "🚩Player1 is Winner!";
}else if(randomNumber1<randomNumber2){
    ans = "Player2 is Winner!🚩";
}else{
    ans = "Draw!";
}

winner.innerHTML = ans;