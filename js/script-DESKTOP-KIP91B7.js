var info = document.querySelector("#keyboardInfo");
var key = document.querySelector("#key");
var charcode = document.querySelector("#charcode");
var code = document.querySelector("#code");
var altkey = document.querySelector("#altkey");
var ctrlkey = document.querySelector("#ctrlkey");


window.addEventListener("keyup", keyInfo);

function keyInfo(event){
    console.log(event);
    key.innerText = event.key;

}