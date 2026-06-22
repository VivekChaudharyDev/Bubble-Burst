let timer = 60;
let score = 0;

function increaseScore() {
    score += 10;
    document.querySelector('#score').innerText = score;
}

function getNewHit() {
    let hit = Math.floor(Math.random() * 10);
    document.querySelector('#hit').innerText = hit;
}

function makeBubble() {
    let clutter = '';
    for (let i = 1; i <= 161; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer() {
    let timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').innerText = timer;
        }
        else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

makeBubble();
runTimer();
getNewHit();