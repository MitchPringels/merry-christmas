
var x = document.getElementById("myAudio");
var y = document.getElementById("myAudio2");
var stop = document.getElementById("stop");

function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
    y.pause();
}

function playAudio2() {
    y.play();
}
