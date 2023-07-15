const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval1;
let minutes1 = 0;
let seconds1 = 0;
let milliseconds1 = 0;
let isPaused1 = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    console.log('Iniciou!')
    interval1 = setInterval(() => {

        if(!isPaused1) {

            milliseconds1 += 10;

            if(milliseconds1 === 1000) {
                seconds1++;
                milliseconds1 = 0;
            }

            if(seconds1 === 60) {
                minutes1++;
                seconds1 = 0;
            }

            minutesEl.textContent = formatTime(minutes1);
            secondsEl.textContent = formatTime(seconds1);
            millisecondsEl.textContent = formatMilliseconds(milliseconds1)
        }
    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {

    isPaused1 = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {

    isPaused1 = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {

    clearInterval(interval1);
    minutes1 = 0;
    seconds1 = 0;
    milliseconds1 = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    isPaused1 = false;
    scrambler()
}

function formatTime(time) {

    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {

    return time < 100 ? `0${time}`.padStart(3, "0") : time;
}