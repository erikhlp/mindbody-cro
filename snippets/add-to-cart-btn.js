document.querySelector("[data-cy='add-to-cart']").parentElement.parentElement.parentElement.insertAdjacentElement('afterbegin', document.querySelector("[data-cy='add-to-cart']"));
	
document.querySelector("[data-cy='add-to-cart']").nextElementSibling.nextElementSibling.classList.add('hidden');

document.querySelector("[data-cy='add-to-cart']").nextElementSibling.classList.add('container');