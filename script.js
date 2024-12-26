let is24HourFormat = true;

function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    let period = "";

    if(!is24HourFormat) {
        period = hours >=12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}${period}`;
}

function toggleFormat() {
    const switcherButton = document.getElementById("switcher");
    is24HourFormat = !is24HourFormat;

    if(is24HourFormat) {
        switcherButton.textContent = "Switch to 12-Hour Format";
    } else {
        switcherButton.textContent = "Switch to 24-Hour Format";
    }

    updateClock();
}

document.getElementById("switcher").addEventListener("click", toggleFormat);

setInterval(updateClock, 1000);

updateClock()