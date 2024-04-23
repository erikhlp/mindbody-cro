// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (100000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
// document.getElementById("demo").innerHTML = days + "  " + hours + "  "
// + minutes + "  " + seconds + "  ";
document.getElementById("demo").innerHTML = `<div class='countDown'>
    <div class="timer"><div class="unit">${days}</div><p class="sub">dias</p></div>
    <div class="timer"><div class="unit">${hours}</div><p class="sub">horas</p></div>
    <div class="timer"><div class="unit">${minutes}</div><p class="sub">min</p></div>
    <div class="timer"><div class="unit">${seconds}</div><p class="sub">seg</p></div>
    </div>`

// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);