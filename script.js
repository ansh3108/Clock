
let is24HourFormat = true;
const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");
const switcherButton = document.getElementById("switcher");
const themeToggle = document.getElementById("theme-toggle");

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    let period = "";

    if (!is24HourFormat) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}${period}`;
    dateElement.textContent = now.toDateString();
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    switcherButton.textContent = is24HourFormat
        ? "Switch to 12-Hour Format"
        : "Switch to 24-Hour Format";
    updateClock();
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light");
    body.classList.toggle("dark");
}

themeToggle.addEventListener("click", toggleTheme);
switcherButton.addEventListener("click", toggleFormat);

setInterval(updateClock, 1000);
updateClock();
