const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;


// Set Date to Today's date
const today = new Date().toLocaleDateString().split('T')[0];
console.log(today)
dateEl.setAttribute('min', today);

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
  }
  
  
  

// Event Listener
countdownForm.addEventListener('submit', updateCountdown)


