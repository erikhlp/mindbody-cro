window.addEventListener('load', function () {
    var z = document.createElement('p'); 
    z.innerHTML = document.querySelector('[data-cy]').innerText;
    z.classList.add('new-product-title')
    document.querySelector(".MuiGrid-grid-sm-7").insertBefore(z, document.querySelector(".MuiGrid-grid-sm-7 div"));
})
    