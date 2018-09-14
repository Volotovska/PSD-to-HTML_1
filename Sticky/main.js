
$('#dots1').mouseup(function(){
	var initial_width = $("#loadingBar3").css('width');
	var initial_left_bar = $("#loadingBar3").css('left');
	var initial_left_dot = $("#dots1").css('left');
	var added = 10;
	if(parseInt(initial_left_dot) > 352){
    	var new_width = parseInt(initial_width) + added;
    	console.log(new_width);
    	var new_left_bar = parseInt(initial_left_bar) - added;
    	console.log(new_left_bar);
    	var new_left_dot = parseInt(initial_left_dot) - added;
    	console.log(new_left_dot);
    	$("#loadingBar3").css('width', new_width);
    	$("#loadingBar3").css('left', new_left_bar);
    	$("#dots1").css('left', new_left_dot);
    }
    else if(parseInt(initial_left_dot) == 352){
    	$("#loadingBar3").css('width', 76);
    	$("#loadingBar3").css('left', 418);
    	$("#dots1").css('left', 412);
    	$("#dots2").css('left', 488);
	}
});

$('#dots2').mouseup(function(){
	var initial_width = $("#loadingBar3").css('width');
	console.log(initial_width);
	var initial_left_dot = $("#dots2").css('left');
	var added = 10;
	if(parseInt(initial_left_dot) < 548){
    	var new_width = parseInt(initial_width) + added;
    	var new_left_dot = parseInt(initial_left_dot) + added;
    	$("#loadingBar3").css('width', new_width);
    	$("#dots2").css('left', new_left_dot);
    }
    else if(parseInt(initial_left_dot) == 548){
    	$("#loadingBar3").css('width', 76);
    	$("#loadingBar3").css('left', 418);
    	$("#dots1").css('left', 412);
    	$("#dots2").css('left', 488);
	}
});

$( "#fig1_1" ).contextmenu(function(event) {
	event.preventDefault();
	$('<div />').attr('id','my_div');
	console.log($('my_div'));
	$( "#fig1" ).add( "p" ).css( "background-color", "red" ).html('hello');
});

$('input').change(function(event){
	console.log($(this).val());
});
