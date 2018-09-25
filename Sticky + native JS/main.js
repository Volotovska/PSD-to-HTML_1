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
var progressBar = document.getElementById('progressBar');

var range_swith_icon2 = document.getElementById('range_swith_icon2');
var draggable = document.getElementById('draggable');
range_swith_icon2.addEventListener('input', moveDraggableFunc);
var initial_left_draggable = window.getComputedStyle(draggable,null).getPropertyValue("left");
var max_draggable = 250;

function moveDraggableFunc(){
    var tracking = range_swith_icon2.value;

    var perc = tracking * 100 / max_draggable;

    draggable.style.left = perc + '%';
    progressBar.style.width = perc + '%';
}

// function mousedownFunc(event) {
//     console.log('mousedown');

//     var initialX = event.pageX;
//     var initial_left = window.getComputedStyle(draggable,null).getPropertyValue("left");
//     var initial_width = window.getComputedStyle(progressBar,null).getPropertyValue("width");

//     moveAt(event);

//     function moveAt(event) {
//       var movedX = event.pageX;
//       // console.log(movedX);
//       if(movedX < 754 && movedX > 607)
//       var dif = initialX-movedX;
//       draggable.style.left = parseInt(initial_left) - dif + 'px';
//       progressBar.style.width = parseInt(initial_width) - dif + 'px';
//     }

//     document.addEventListener('mousemove', onmouseMove);
//     function onmouseMove(event) {
//         console.log('mousemove');
//         moveAt(event);
//     }

//     document.addEventListener('mouseup', onmouseUp);

//     function onmouseUp() {
//         console.log('mouseup');
//         document.removeEventListener('mousemove', onmouseMove);
//         document.removeEventListener('mouseup', onmouseUp);
//     }
// };

var counter = 1;

var triangleUp1 = document.getElementById('triangleUp1');
var triangleDown1 = document.getElementById('triangleDown1');
var triangleUp2 = document.getElementById('triangleUp2');
var triangleDown2 = document.getElementById('triangleDown2');
var triangleUp3 = document.getElementById('triangleUp3');
var triangleDown3 = document.getElementById('triangleDown3');

var month = document.getElementById('month').innerHTML;;
var year2half2 = document.getElementById('year2half2').innerHTML;;
var year2half1 = document.getElementById('year2half1').innerHTML;;

triangleUp1.addEventListener('click', addDayFunc);

function addDayFunc(){
    var day = document.getElementById('day').innerHTML;
    var initial = parseInt(day);
    if(initial >= 1 && initial < 31){
        document.getElementById('day').innerHTML = initial+counter;
    }
}

triangleDown1.addEventListener('click', substractDayFunc);

function substractDayFunc(){
    var day = document.getElementById('day').innerHTML;
    var initial = parseInt(day);
    if(initial > 1 && initial <= 31){
        document.getElementById('day').innerHTML = initial-counter;
    }
}

triangleUp2.addEventListener('click', addMonthFunc);

function addMonthFunc(){
    var month = document.getElementById('month').innerHTML;
    var initial = parseInt(month);
    if(initial >= 1 && initial < 12){
        document.getElementById('month').innerHTML = initial+counter;
    }
}

triangleDown2.addEventListener('click', substractMonthFunc);

function substractMonthFunc(){
    var month = document.getElementById('month').innerHTML;
    var initial = parseInt(month);
    if(initial > 1 && initial <= 12){
        document.getElementById('month').innerHTML = initial-counter;
    }
}

triangleUp3.addEventListener('click', addYearFunc);

function addYearFunc(){
    var year2half2 = document.getElementById('year2half2').innerHTML;
    var initial_year2half2 = parseInt(year2half2);
    var year2half1 =  document.getElementById('year2half1').innerHTML;
    var initial_year2half1 = parseInt(year2half1);
    var year1half = document.getElementById('year1half').innerHTML;
    var initial_year1half = parseInt(year1half);
    var triger;
    if(year2half2 >= 0 && year2half2 < 9){
        document.getElementById('year2half2').innerHTML = initial_year2half2+counter;
        triger = 1;
        console.log(triger);
    }
    else if(year2half2 == 9 && year2half1 != 9){
        document.getElementById('year2half1').innerHTML = initial_year2half1+counter;
        document.getElementById('year2half2').innerHTML = 0;
        triger = 0;
        console.log(triger);
    }
    else if(year2half2 == 9 && year2half1 == 9){
        document.getElementById('year2half1').innerHTML = 0;
        document.getElementById('year2half2').innerHTML = 0;
        document.getElementById('year1half').innerHTML = initial_year1half + counter;
    }
};

triangleDown3.addEventListener('click', substractYearFunc);

function substractYearFunc(){
    var year2half2 = document.getElementById('year2half2').innerHTML;
    var initial_year2half2 = parseInt(year2half2);
    var year2half1 =  document.getElementById('year2half1').innerHTML;
    var initial_year2half1 = parseInt(year2half1);
    var year1half = document.getElementById('year1half').innerHTML;
    var initial_year1half = parseInt(year1half);
    var triger;
    if(year2half2 > 0 && year2half2 <= 9){
        document.getElementById('year2half2').innerHTML = initial_year2half2-counter;
        triger = 1;
        console.log(triger);
    }
    else if(year2half2 == 0 && year2half1 != 0){
        document.getElementById('year2half1').innerHTML = initial_year2half1-counter;
        document.getElementById('year2half2').innerHTML = 9;
        triger = 0;
        console.log(triger);
    }
    else if(year2half2 == 0 && year2half1 == 0){
        document.getElementById('year2half1').innerHTML = 9;
        document.getElementById('year2half2').innerHTML = 9;
        document.getElementById('year1half').innerHTML = initial_year1half - counter;
    }
};

var triangleLeft = document.getElementById('triangleLeft');
var triangleRight = document.getElementById('triangleRight');
var handle = document.getElementById('handle');

triangleLeft.addEventListener('click', moveLeftFunc);

function moveLeftFunc(){
    var initial_left = window.getComputedStyle(handle,null).getPropertyValue("left");
    var added = 31;
    if(parseInt(initial_left) > 148){
        var new_left = parseInt(initial_left) - added;
        handle.style.left = new_left + 'px';
    }
}

triangleRight.addEventListener('click', moveRightFunc);

function moveRightFunc(){
    var initial_left = window.getComputedStyle(handle,null).getPropertyValue("left");
    var added = 31;
    if(parseInt(initial_left) < 500){
        var new_left = parseInt(initial_left) + added;
        handle.style.left = new_left + 'px';
    }
}
var range_swith_icon = document.getElementById('range_swith_icon');
var switch_icon = document.getElementById('switch_icon');
range_swith_icon.addEventListener('input', moveSwitchIconFunc);
var initial_left = window.getComputedStyle(switch_icon,null).getPropertyValue("left");
var max = 255;

function moveSwitchIconFunc(){
    var tracking = range_swith_icon.value;

    var perc = tracking * 100 / max;

    switch_icon.style.left = perc + '%';
}

var dot_white = document.getElementById("dot_white");

dot_white.addEventListener('click', moveDotWhiteFunc);

function moveDotWhiteFunc(){
    if(dot_white.style.marginLeft == '17px'){
        dot_white.style.marginLeft = '0px'
    }
    else {
    dot_white.style.marginLeft = '17px';
    }
};

var dot_yellow = document.getElementById("dot_yellow");

dot_yellow.addEventListener('click', moveDotYellowFunc);

function moveDotYellowFunc(){
    if(dot_yellow.style.marginLeft == '17px'){
        dot_yellow.style.marginLeft = '0px'
    }
    else {
    dot_yellow.style.marginLeft = '17px';
    }
};

var draggable2 = document.getElementById('draggable2');
var progressBar2 = document.getElementById('progressBar2');

var range_swith_icon3 = document.getElementById('range_swith_icon3');
var draggable2 = document.getElementById('draggable2');
range_swith_icon3.addEventListener('input', moveDraggableFunc2);
var initial_left_draggable2 = window.getComputedStyle(draggable2,null).getPropertyValue("left");
var max_draggable2 = 250;

function moveDraggableFunc2(){
    var tracking = range_swith_icon3.value;

    var perc = tracking * 100 / max_draggable2;

    draggable2.style.left = perc + '%';
    progressBar2.style.width = perc + '%';
}



var divShown = document.getElementsByClassName('notShown')[0];
var menuLi1 = document.getElementsByClassName('menuLi')[0];
menuLi1.addEventListener('contextmenu', contextMenuFunc);

function contextMenuFunc(e){
    e.preventDefault();
    divShown.classList.toggle('shown');
};

var star_yellow = document.querySelectorAll(".star_yellow");

star_yellow.forEach(function(item, index){
    star_yellow[index].onclick = function toggleClassFunc(){
        this.classList.toggle('star_black');
        this.classList.toggle('star_yellow');
    }
});

var star_black = document.querySelectorAll(".star_black");

star_black.forEach(function(item, index){
    star_black[index].onclick = function toggleClassFunc(){
        this.classList.toggle('star_yellow');
        this.classList.toggle('star_black');
    }
});

