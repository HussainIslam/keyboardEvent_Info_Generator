var info = document.querySelector("#keyboardInfo");
var key = document.querySelector("#key");
var keycode = document.querySelector("#keycode");
var code = document.querySelector("#code");
var altkey = document.querySelector("#altkey");
var ctrlkey = document.querySelector("#ctrlkey");
var shiftkey = document.querySelector("#shiftkey");
var metakey = document.querySelector("#metakey");

window.addEventListener("keydown", keyInfo);

function keyInfo(event){
    //console.log(event);
    event.preventDefault();
    key.innerText = "\"" +event.key +"\"";
    keycode.innerText = event.keyCode;
    code.innerText = event.code;
    altkey.innerText = event.altKey;
    ctrlkey.innerText = event.ctrlKey;
    shiftkey.innerText = event.shiftKey;
    metakey.innerText = event.metaKey;
}