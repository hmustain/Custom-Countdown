const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');



let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

// define time
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24


// Set Date to Today's date
const today = new Date().toLocaleDateString().split('T')[0];
console.log(today)
dateEl.setAttribute('min', today);

// function for countdown
function startCountdown() {
  activeCountdown = setInterval(() => {
    const now = new Date().getTime()
    const distance = countdownValue - now
    console.log('distance :', distance);

    // define time
    const days = Math.floor(distance / day)
    const hours = Math.floor((distance % day) / hour)
    const minutes = Math.floor((distance % hour) / minute)
    const seconds = Math.floor((distance % minute) / second)
    console.log(days, 'days:', hours, 'hours:', minutes, 'minutes:', seconds, 'seconds:')


    // Hide Input
    inputContainer.hidden = true

    // If Countdown has ended
    if (distance < 0) {
      countdownEl.hidden = true
      clearInterval(activeCountdown)
      completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`
      completeEl.hidden = false
    } else {
      // Show the Countdown in progress
      countdownElTitle.textContent = `${countdownTitle}`
      timeElements[0].textContent = `${days}`
      timeElements[1].textContent = `${hours}`
      timeElements[2].textContent = `${minutes}`
      timeElements[3].textContent = `${seconds}`
      completeEl.hidden = true
      countdownEl.hidden = false
    }
  }, second)
}

let activeCountdown;
// function to take values from form input
function updateCountdown(event) {
event.preventDefault();
// Clear the previous countdown if it's still running
clearInterval(activeCountdown);
const countdownForm = event.target;
countdownTitle = countdownForm[0].value;
const selectedDate = countdownForm[1].value;
const [year, month, day] = selectedDate.split('-');
countdownDate = `${month}/${day}/${year}`;
console.log(countdownTitle, countdownDate)
// Check for Valid Date
if (selectedDate === "") {
alert('Please select a date for the Countdown')
} else {
// Get Number Version of Current Date
countdownValue = new Date(countdownDate).getTime()
console.log('countdown value:', countdownValue)
startCountdown();
}
}

// Reset values
function reset() {
// Hide countdown and show inputs
countdownEl.hidden = true
inputContainer.hidden = false
// stop the countdown
clearInterval(activeCountdown)
// Reset values
countdownForm[0].value = "";
countdownForm[1].value = "";
timeElements.forEach(timeElement => timeElement.textContent = "0");
countdownTitle = "";
countdownDate = "";
return false;
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown)
countdownBtn.addEventListener('click', reset)


