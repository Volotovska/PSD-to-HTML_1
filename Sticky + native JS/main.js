var dots1 = document.getElementById('dots1');

var loadingBar3 = document.getElementById("loadingBar3");
var dots1 = document.getElementById("dots1");
var dots2 =document.getElementById("dots2");

dots1.addEventListener('click', movingDotFunc1);
function movingDotFunc1(){
	var initial_width = loadingBar3.offsetWidth;
	var initial_left_bar = window.getComputedStyle(loadingBar3,null).getPropertyValue("left");
	var initial_left_dot = window.getComputedStyle(dots1,null).getPropertyValue("left");
	var initial_left_dot2 = window.getComputedStyle(dots2,null).getPropertyValue("left");
	var added = 60;

    if(parseInt(initial_left_dot) > 352){
        var new_width = (parseInt(initial_width) + added);
        console.log(new_width);
        var new_left_bar = parseInt(initial_left_bar) - added;
        var new_left_dot = parseInt(initial_left_dot) - added;
        loadingBar3.style.width = new_width + 'px';
        loadingBar3.style.left = new_left_bar + 'px';
        dots1.style.left = new_left_dot + 'px';
    }
    else if(parseInt(initial_left_dot) == 352 && parseInt(initial_left_dot2) == 488){
    	loadingBar3.style.width = '76px';
		loadingBar3.style.left = '418px';
		dots1.style.left = '412px';
		dots2.style.left = '488px';
    }
    else if(parseInt(initial_left_dot) == 352 && parseInt(initial_left_dot2) == 548){
    	loadingBar3.style.width = '136px';
		loadingBar3.style.left = '418px';
		dots1.style.left = '412px';
		dots2.style.left = '548px';
    }
}

dots2.addEventListener('click', movingDotFunc2);
function movingDotFunc2(){
	var initial_width = loadingBar3.offsetWidth;
	var initial_left_dot = window.getComputedStyle(dots2,null).getPropertyValue("left");
	var initial_left_dot1 = window.getComputedStyle(dots1,null).getPropertyValue("left");
	var added = 60;

    if(parseInt(initial_left_dot) < 548){
        var new_width = (parseInt(initial_width) + added);
        var new_left_dot = parseInt(initial_left_dot) + added;
        loadingBar3.style.width = new_width + 'px';
        dots2.style.left = new_left_dot + 'px';
    }
    else if(parseInt(initial_left_dot) == 548 && parseInt(initial_left_dot1) == 412){
    	loadingBar3.style.width = '76px';
		loadingBar3.style.left = '418px';
		dots1.style.left = '412px';
		dots2.style.left = '488px';
    }
    else if(parseInt(initial_left_dot) == 548 && parseInt(initial_left_dot1) == 352){
    	loadingBar3.style.width = '136px';
		loadingBar3.style.left = '358px';
		dots1.style.left = '352px';
		dots2.style.left = '488px';
    }
}

var fig1_1 = document.getElementById('fig1_1');
fig1_1.addEventListener('mouseenter', addInfoFunc);
var div = document.createElement('div');

function addInfoFunc(){	
	fig1_1.appendChild(div);
	div.style.position = 'absolute';
	div.style.height = '100px';
	div.style.width = '100px';
	div.style.backgroundColor = "white";
	div.style.zIndex = "1";
	div.innerHTML = "some information";
	div.style.top = "270px";
	div.style.left = "117px";
};

fig1_1.addEventListener('mouseleave', removeInfoFunc);
function removeInfoFunc(){
	fig1_1.removeChild(div);
};

var text;
var input = document.getElementById('input1');
var result = document.getElementById('result');

input.addEventListener('change', onChange);

function onChange(){
	text= input.value;
   result.innerHTML = "Do you want to submit?: " + text;
};

var fig6 = document.getElementById('fig6');
fig6.addEventListener('click', submitFunc);

function submitFunc(){
	result.style.display = "none";
	console.log(text);
}

var draggable = document.getElementById('draggable');
draggable.addEventListener('mousedown', mousedownFunc)

function mousedownFunc(event) {

	var initialX = event.pageX;
	var initial_left = window.getComputedStyle(draggable,null).getPropertyValue("left");

	moveAt(event);

    function moveAt(event) {
      var movedX = event.pageX;
      var dif = initialX-movedX;
      draggable.style.left = parseInt(initial_left) - dif + 'px';
  	}

  	document.onmousemove = function(event) {
    	moveAt(event);
  	}

  	draggable.onmouseup = function() {
    	onmousemove = null;
    	onmouseup = null;
    }
};

