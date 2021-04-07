var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo?
var cron;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function stop() {
    clearInterval(cron);
    time = timer();

    return time;
}

function timer() {
    ss++;

    if (ss == 59) {
        ss = 0;
        mm++;

        if (mm == 59) {
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    document.getElementById('counter').innerText = format;

    return format;
}