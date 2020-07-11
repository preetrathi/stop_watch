var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0
    } else if (sec >= 59) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
};
function stop() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
};
function reset() {
    var min = 0;
    var sec = 0;
    var msec = 0;

    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
};