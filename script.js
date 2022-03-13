
const start = document.querySelector("#start");
const scroll = document.querySelector("#scroll");
const pi = document.querySelector("#pi");
let doted, timeOuts;
const t = 5;

function startCalc(a, b) {
    let c = a/b;
    let d = Math.floor(c);
    let e = a%b;
    
    if (e<7) {
        pi.innerText += d;
        if (!doted) {
            pi.innerText += ".";
            doted = true;
        }
        e *= 10;
        
        timeOuts = setTimeout(function() {
            startCalc(e, 7)
        }, t);
    } else {
        timeOuts = setTimeout(function() {
            startCalc(e, 7)
        }, t);
    }
}

start.addEventListener("click", e => {
    const state = e.target.innerText === "START";
    if (state) {
        e.target.innerText = "STOP";
        pi.innerText = ""
        clearTimeout(timeOuts);
        doted = false;
        startCalc(22, 7);
    } else {
        e.target.innerText = "START";
        clearTimeout(timeOuts);
    }
});

var interval;
scroll.addEventListener("click", e => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        e.target.innerText = "START SCROLL";
        return;
    }
    interval = setInterval(() => {
        window.scrollTo(0,document.body.scrollHeight)
    }, t);
    e.target.innerText = "STOP SCROLL";
});