// var myName = "Naman";
// var yourName = prompt("What is your name?");
// console("hello! My Name is "+myName+" Welcome "+yourName);
// var tweet = prompt("compose your tweet");
// // alert("you have written "+tweet.length+" characters, you have "+(10-tweet.length)+" characters left");
// var ntweet = tweet.slice(0,10);
// alert(ntweet);

// console.log("Hello");

var countEl = document.getElementById("count-el");
var welcomeEl = document.getElementById("welcome-el");
var saveEl = document.getElementById("save-el");


var ct = 0;
function increment(){
    ct++;
    countEl.textContent = ct;
}

function save(){
    var ctStr = ct + " - ";
    saveEl.textContent += ctStr;
    countEl.textContent = 0;
    ct = 0;
}

var name = "Naman Suhane";
var greeting = "Welcome ";
welcomeEl.innerText = greeting + name;