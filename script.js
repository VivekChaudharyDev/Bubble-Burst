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
            document.querySelector('#pbtm').innerHTML = `
                <div class="game-over-card">
                    <div class="trophy-icon">🏆</div>
                    <h1>Game Over</h1>
                    <p class="final-score-text">You scored</p>
                    <div class="score-badge">${score}</div>
                    <button class="restart-btn" onclick="location.reload()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        Play Again
                    </button>
                </div>
            `;
        }
    }, 1000);
}

document.querySelector('#pbtm').addEventListener('click', function (event) {
    if (event.target.classList.contains('bubble')) {
        let hit = parseInt(document.querySelector('#hit').innerText);
        let clicked = parseInt(event.target.innerText);
        if (hit === clicked) {
            event.target.style.visibility = 'hidden';
            increaseScore();
            getNewHit();
        }
    }
});

makeBubble();
runTimer();
getNewHit();