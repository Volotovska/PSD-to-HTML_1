var progressBar = document.getElementById('progressBar');
progressBar.addEventListener('click', myFunc);
function myFunc(){
	var initial_width = progressBar.offsetWidth;

	var added = 10; 

	var new_width = parseInt(initial_width) + added;

	progressBar.style.width = new_width + 'px';
}