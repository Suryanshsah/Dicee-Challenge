var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNum1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNum2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNum2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
