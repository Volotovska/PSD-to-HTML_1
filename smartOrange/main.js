var buttonLearn = document.getElementById('buttonLearn');

var modal = document.getElementById('modal');

var closeButton = document.getElementsByClassName('closeButton')[0];

buttonLearn.addEventListener('click', showFunc);

function showFunc() {
	modal.classList.add('shown');
}

closeButton.addEventListener('click', hideFunc);

function hideFunc() {
	modal.classList.remove('shown');
}