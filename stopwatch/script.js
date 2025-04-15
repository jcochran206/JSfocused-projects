/* globals */
let timerID; 
let lastTimerStartTime = 0;

/* Get elements for the stop watch ie start stop reset*/
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

/* listeners for events on the dom */
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
/* functions for time and enable buttons pause and reset back to initial start  */
function startTimer(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;

    lastTimerStartTime = Date.now();

    timerID = requestAnimationFrame(updateTimer);
}

function stopTimer(){
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;

    cancelAnimationFrame(timerID);
}

function resetTimer(){
    resetBtn.disabled = true;
    timer.textContext = "00:00:000";

}

function updateTimer(){
    const milElapsed = Date.now() - lastTimerStartTime;
}