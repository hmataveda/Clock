secondNeedle = document.getElementById('second');
minuteNeedle = document.querySelector('#minute');
hourNeedle = document.querySelector('#hour');

var date = new Date();

var currentSecond = date.getSeconds();
var curretMinute = date.getMinutes();
var currentHour = date.getHours();


if (currentHour > 12) {
    currentHour = currentHour - 12;
}
if (currentHour == 5) {
    console.log('ddddddd');
}

var secondsDegree = currentSecond * 6;
var minutesDegree = curretMinute * 6;
var hoursDegree = (currentHour * 30) + (curretMinute / 2)

secondNeedle.style.transform = `rotate(${secondsDegree}deg)`;
minuteNeedle.style.transform = `rotate(${minutesDegree}deg)`;
hourNeedle.style.transform = `rotate(${hoursDegree}deg)`;

setInterval(secondsMove, 1000);
setInterval(minutesMove, 60 * 1000);
setInterval(hourseMove, 12 * 60 * 1000);

function secondsMove() {
    secondsDegree += 6;
    secondNeedle.style.transform = `rotate(${secondsDegree}deg)`;
}

function minutesMove() {
    minutesDegree += 6;
    minuteNeedle.style.transform = `rotate(${minutesDegree}deg)`;
}

function hourseMove() {
    hoursDegree += 6;
    hourNeedle.style.transform = `rotate(${hoursDegree}deg)`;
}