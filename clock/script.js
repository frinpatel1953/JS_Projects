const secondhand = document.querySelector('.second');
const minutehand = document.querySelector('.minute');
const hourshand = document.querySelector('.hour');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    minutehand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minute / 60) * 30) + 90;
    hourshand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
