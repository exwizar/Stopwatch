// TimerElement
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

//Buttons 
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

//ButtonsEvent
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(setTimer, 10)
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

resetButton.addEventListener('click', () => {
    clearInterval(interval)
    hour = 00;
    minute = 00;
    second = 00;
    millisecond = 00;
    hourElement.textContent = "00";
    minuteElement.textContent = "00";
    secondElement.textContent = '00';
    millisecondElement.textContent = '00';
})

//setTimer
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00, 
    interval

let setTimer = function() {
    millisecond++

    //millisecond
    if (millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond;
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond;
    }
    if (millisecond > 99) {
        second++
        secondElement.innerText = '0' + second;
        millisecond = 0;
        millisecondElement.innerText = '0' + millisecond
    }
    
    //second
    if (second < 9) {
        secondElement.innerText = '0' + second;
    }
    if (second > 9) {
        secondElement.innerText = second;
    }
    if (second > 60) {
        minute++
        minuteElement.innerText = '0' + minute;
        second = 0;
        second.innerText = '0' + second
    }

    //minute
    if (minute < 9) {
        minuteElement.innerText = '0' + minute;
    }
    if (minute > 9) {
        minuteElement.innerText = minute;
    }
    if (minute > 60) {
        hour++
        hourElement.innerText = '0' + hour;
        minute = 0;
        minute.innerText = '0' + minute
    }

    //hour
    if (hour > 9) {
        hourElement.innerText = hour;
    }
}   

