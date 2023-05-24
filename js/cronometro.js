// selecionando os elementos noo DOM

const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = true;

function startTimer() {

    interval = setInterval(() => {

        if(!isPaused) {

            milliseconds += 10;

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds)
            
        }
    }, 10)

}

function pauseTimer() {

    isPaused = true;
}

function resumeTimer() {

    isPaused = false;
}

function resetTimer() {

    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "00";

    isPaused = false;
}

function formatTime(time) {

    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {

    return time < 100 ? `0${time}`.padStart(3, "0") : time;
}



let contagem = 0;

document.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {
        
        contagem = 0;
        resetTimer();
        scrambler();
    }
})

document.addEventListener('keyup', function(e) {

 
    let codigoTecla = e.which || e.keyCode || 0;
    let space = codigoTecla == 32;

    if (contagem === 2) {
        
        resetTimer();
        scrambler();
        isPaused = true;
        contagem = 0;

        } else if (space && isPaused === true) {

            startTimer();
            isPaused = false;
            contagem += 1;
            
        } else {

                pauseTimer();
                contagem += 1;
                isPaused = true;

    }

  });