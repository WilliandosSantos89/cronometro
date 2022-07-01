window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = functio() {
        clearInterval(Interval);
        tens = "0";
        seconds = "0";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    
}