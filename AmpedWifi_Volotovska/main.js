var left = document.getElementById('left');

function onScroll() {
	if (window.scrollY > 100) {
		left.className = 'leftHalf fixed';
	} else {
		left.className = 'leftHalf';
	}
}

window.addEventListener('scroll', onScroll);