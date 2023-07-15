// selecionando os elementos noo DOM

const minutesEle = document.querySelector("#minutes");
const secondsEle = document.querySelector("#seconds");
const millisecondsEle = document.querySelector("#milliseconds");

/* const botao = document.querySelector("[data-botao]"); */

/* botao.addEventListener("click", botaoClick);

function botaoClick() {

    startTimer();
} */


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

            minutesEle.textContent = formatTime(minutes);
            secondsEle.textContent = formatTime(seconds);
            millisecondsEle.textContent = formatMilliseconds(milliseconds)
            
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

    minutesEle.textContent = "00";
    secondsEle.textContent = "00";
    millisecondsEle.textContent = "000";

    isPaused = false;
}

function formatTime(time) {

    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {

    return time < 100 ? `0${time}`.padStart(3, "0") : time;
}


function cronometro() {

    let contagem = 0;

    document.addEventListener("keydown", function(e) {

        startBtn.style.display = "none";
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "none";
        resetBtn.style.display = "none";

        if (e.key === "Enter") {
            
            contagem = 0;
            resetTimer();
            scrambler();
        }

        startBtn.style.display = "none";
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "none";
        resetBtn.style.display = "none";
    })

    document.addEventListener('keyup', function(e) {

        startBtn.style.display = "none";
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "none";
        resetBtn.style.display = "none";

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

        startBtn.style.display = "none";
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "none";
        resetBtn.style.display = "none";

      });
}

cronometro();