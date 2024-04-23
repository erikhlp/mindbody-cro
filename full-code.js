console.log(document.querySelector('Mindbody - SMDev'));

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// ## Apply this to your Extension or CRO Script Platform ##

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

window.addEventListener('load', function () {
	var title = document.createElement('p'); // is a node
	title.innerHTML = document.querySelector('[data-cy]').innerText;
	title.classList.add('new-product-title')
	document.querySelector(".MuiGrid-grid-sm-7").insertBefore(title, document.querySelector(".MuiGrid-grid-sm-7 div"));
	// console.log(z)
	
	
	var banner = document.createElement('div');
	// title.classList.add('container');
	banner.innerHTML = `
	<div class="banner">
            <div class="top">
                    <p class="title">TERMINA EM:</p>
                    <div id="demo"></div>
            </div>
            <div class="bottom">
                <div class="promo" style="background-image: url('https://i.ibb.co/T4Lf4g4/discount.png');">
                    <!-- Add discount value as a variable -->
                    <div class="discount">14%</div>
                </div>
                <div class="promo" style="background-image: url('https://i.ibb.co/K2mFs7g/stock.png');">
                </div>
                <div class="promo" style="background-image: url('https://i.ibb.co/SJ8mCtF/Gamer-1.png');">
                </div>
            </div>
    </div>
	`
	document.querySelector(".MuiGrid-grid-sm-5").insertBefore(banner, document.querySelector(".MuiGrid-grid-sm-5 h1"))
	
	document.querySelector("[data-cy='add-to-cart']").parentElement.parentElement.parentElement.insertAdjacentElement('afterbegin', document.querySelector("[data-cy='add-to-cart']"));
	
document.querySelector("[data-cy='add-to-cart']").nextElementSibling.nextElementSibling.classList.add('hidden');

document.querySelector("[data-cy='add-to-cart']").nextElementSibling.classList.add('container');

})


