const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');


let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

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
    const now = new Date().getTime()
    const distance = countdownValue - now
    console.log('distance :', distance);

    // define time
    const days = Math.floor( distance / day)
    const hours = Math.floor((distance % day) / hour)
    const minutes = Math.floor((distance % hour) / minute)
    const seconds = Math.floor((distance % minute) / second)
    console.log(days,'days:', hours, 'hours:', minutes, 'minutes:', seconds,'seconds:');

    // Populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`
    timeElements[0].textContent = `${days}`
    timeElements[1].textContent = `${hours}`
    timeElements[2].textContent = `${minutes}`
    timeElements[3].textContent = `${seconds}`


    // Hide Input
    inputContainer.hidden = true

    // Show Countdown
    countdownEl.hidden = false
}

// function to take values from form input
function updateCountdown(event) {
    event.preventDefault();
    const form = event.target;
    countdownTitle = form[0].value;
    const selectedDate = form[1].value;
    const [year, month, day] = selectedDate.split('-');
    countdownDate = `${month}/${day}/${year}`;
    console.log(countdownTitle, countdownDate)
    // Get Number Version of Current Date
    countdownValue = new Date(countdownDate).getTime()
    console.log('countdown value:', countdownValue)
    startCountdown();
  }
  
  
  

// Event Listener
countdownForm.addEventListener('submit', updateCountdown)


