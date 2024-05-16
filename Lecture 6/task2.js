/*The page consists of two halves: a stopwatch and a timer. 
The functionality is appropriate, you can receive data for the timer simply by text input,
 or you can use buttons like “+1m.”. Accurate down to seconds.*/


window.onload = function () {


    // Stopwatch

    const displayStopwatch = document.querySelector("#stopwatch__time"),
        startStopwatch = document.querySelector("#stopwatch__start"),
        stopStopwatch = document.querySelector("#stopwatch__stop"),
        resetStopwatch = document.querySelector("#stopwatch__reset");

    let minutes = 0;
    let seconds = 0;
    let hours = 0;
    let startTime = 0;
    let elapsedTime = 0;
    let paused = true;
    let intervalId;

    startStopwatch.addEventListener('click', () => {
        if (paused) {
            paused = false;
            startTime = Date.now() - elapsedTime;
            intervalId = setInterval(updateTime, 1000);
            startStopwatch.disabled = true;
            stopStopwatch.disabled = false;
        }
    })
    stopStopwatch.addEventListener('click', () => {
        if (!paused) {
            paused = true;
            elapsedTime = Date.now() - startTime;
            clearInterval(intervalId);
            startStopwatch.disabled = false;
            stopStopwatch.disabled = true;
        }

    })
    resetStopwatch.addEventListener('click', () => {
        paused = true;
        clearInterval(intervalId);
        startTime = 0;
        elapsedTime = 0;
        minutes = 0;
        seconds = 0;
        hours = 0;
        displayStopwatch.textContent = "00:00:00";
        startStopwatch.disabled = false;
        stopStopwatch.disabled = true;

    })
    function updateTime() {
        elapsedTime = Date.now() - startTime;

        seconds = Math.floor((elapsedTime / 1000) % 60);
        minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

        seconds = pad(seconds);
        minutes = pad(minutes);
        hours = pad(hours);

        displayStopwatch.textContent = `${hours}:${minutes}:${seconds}`;

        function pad(unit) {
            return (("0") + unit).length > 2 ? unit : "0" + unit;
        }
    }


    //Timer 

    let timerInterval;
    let timerRunning = false;
    let remainingTime = 0;

    const displayTimer = document.querySelector("#timer__time"),
        startTimer = document.querySelector("#timer__start"),
        stopTimer = document.querySelector("#timer__stop"),
        resetTimer = document.querySelector("#timer__reset");

    function formatTime(timeInSeconds) {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }


    startTimer.addEventListener('click', () => {
        if (!timerRunning) {
            const timerInput = document.querySelector('#timer__input').value.trim();
            const timeParts = timerInput.split(':');
            const hours = parseInt(timeParts[0]) || 0;
            const minutes = parseInt(timeParts[1]) || 0;
            const seconds = parseInt(timeParts[2]) || 0;
            remainingTime = hours * 3600 + minutes * 60 + seconds;

            if (remainingTime <= 0 || isNaN(remainingTime)) {
                alert('Invalid input. Please enter a valid time.');
                return;
            }

            timerInterval = setInterval(() => {
                if (remainingTime <= 0) {
                    clearInterval(timerInterval);
                    timerRunning = false;
                    startTimer.disabled = false;
                    stopTimer.disabled = true;
                } else {
                    remainingTime--;
                    displayTimer.innerText = formatTime(remainingTime);
                }
            }, 1000);

            timerRunning = true;
            startTimer.disabled = true;
            stopTimer.disabled = false;
        }

    });


    stopTimer.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerRunning = false;
        startTimer.disabled = false;
        stopTimer.disabled = true;
    });

    resetTimer.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerRunning = false;
        remainingTime = 0;
        document.querySelector('#timer__input').value = '';
        displayTimer.innerText = '00:00:00';
        startTimer.disabled = false;
        stopTimer.disabled = true;
    });


}

