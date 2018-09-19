$('#dots1').click(function(){
    var initial_width = $("#loadingBar3").css('width');
    var initial_left_bar = $("#loadingBar3").css('left');
    var initial_left_dot = $("#dots1").css('left');
    var initial_left_dot2 = $("#dots2").css('left');
    var added = 60;
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
    else if(parseInt(initial_left_dot) == 352 && parseInt(initial_left_dot2) == 488){
        $("#loadingBar3").css('width', 76);
        $("#loadingBar3").css('left', 418);
        $("#dots1").css('left', 412);
        $("#dots2").css('left', 488);
    }
    else if(parseInt(initial_left_dot) == 352 && parseInt(initial_left_dot2) == 548){
        $("#loadingBar3").css('width', 136);
        $("#loadingBar3").css('left', 418);
        $("#dots1").css('left', 412);
        $("#dots2").css('left', 548);
    }
});

$('#dots2').click(function(){
    var initial_width = $("#loadingBar3").css('width');
    console.log(initial_width);
    var initial_left_dot = $("#dots2").css('left');
    var initial_left_dot1 = $("#dots1").css('left');
    var added = 60;
    if(parseInt(initial_left_dot) < 548){
        var new_width = parseInt(initial_width) + added;
        var new_left_dot = parseInt(initial_left_dot) + added;
        $("#loadingBar3").css('width', new_width);
        $("#dots2").css('left', new_left_dot);
    }
    else if(parseInt(initial_left_dot) == 548 && parseInt(initial_left_dot1) == 412){
        $("#loadingBar3").css('width', 76);
        $("#loadingBar3").css('left', 418);
        $("#dots1").css('left', 412);
        $("#dots2").css('left', 488);
    }
    else if(parseInt(initial_left_dot) == 548 && parseInt(initial_left_dot1) == 352){
        $("#loadingBar3").css('width', 136);
        $("#loadingBar3").css('left', 358);
        $("#dots1").css('left', 352);
        $("#dots2").css('left', 488);
    }
});


$( "#fig1_1" ).mouseenter(function() {

        $("<div>inf</div>").css({
            width: "100px",
            height: "100px",
            position: 'absolute',
            "background-color": "white",
            "z-index": 1,
        }).html('some information')
        .attr('id', "newDiv")
        .appendTo("#fig1");
});

$( "#fig1_1" ).mouseleave(function() {
    $("#newDiv").remove();
});

var text;

$('input').change(function(event){
   text = $(this).val();
   $('#result').html("Do you want to submit?: " + text);
});

$(".fig6").click(function(){
    $('#result').css('display', 'none');
    // console.log(text);
});

$( function() {
    $( "#draggable" ).draggable({
        axis: "x",
        containment: "parent",
        drag: function(event, ui) {
            $('#progressBar').css('width', 93+parseInt($( "#draggable" ).css('left')) - 685);
        }
    });
});

var counter = 1;

$('#triangleUp1').click(function(){
    var initial = parseInt($('#day').html());
    if(initial >= 1 && initial < 31){
        $('#day').html(initial+counter);
    }
});

$('#triangleDown1').click(function(){
    var initial = parseInt($('#day').html());
    if(initial > 1 && initial <= 31){
        $('#day').html(initial-counter);
    }
});

$('#triangleUp2').click(function(){
    var initial = parseInt($('#month').html());
    if(initial >= 1 && initial < 12){
        $('#month').html(initial+counter);
    }
});

$('#triangleDown2').click(function(){
    var initial = parseInt($('#month').html());
    if(initial > 1 && initial <= 12){
        $('#month').html(initial-counter);
    }
});

$('#triangleUp3').click(function(){
    var year2half2 = parseInt($('#year2half2').html());
    var year2half1 =  parseInt($('#year2half1').html());
    var year1half = parseInt($('#year1half').html());
    var triger;
    if(year2half2 >= 0 && year2half2 < 9){
        $('#year2half2').html(year2half2+counter);
        triger = 1;
        console.log(triger);
    }
    else if(year2half2 == 9 && year2half1 != 9){
        $('#year2half1').html(year2half1+counter);
        $('#year2half2').html(0);
        triger = 0;
        console.log(triger);
    }
    else if(year2half2 == 9 && year2half1 == 9){
        $('#year2half2').html(0);
        $('#year2half1').html(0);
        $('#year1half').html(year1half+counter);
    }
});

$('#triangleDown3').click(function(){
    var year2half2 = parseInt($('#year2half2').html());
    var year2half1 =  parseInt($('#year2half1').html());
    var year1half = parseInt($('#year1half').html());
    var triger;
    if(year2half2 > 0 && year2half2 <= 9){
        $('#year2half2').html(year2half2-counter);
        triger = 1;
        console.log(triger);
    }
        else if(year2half2 == 0 && year2half1 != 0){
        $('#year2half1').html(year2half1-counter);
        $('#year2half2').html(9);
        triger = 0;
        console.log(triger);
    }
    else if(year2half2 == 0 && year2half1 == 0){
        $('#year2half2').html(9);
        $('#year2half1').html(9);
        $('#year1half').html(year1half-counter);
    }
});


$('#triangleLeft').click(function(){
    var initial_left = $("#handle").css('left');
    var added = 31;
    if(parseInt(initial_left) > 148){
        var new_left = parseInt(initial_left) - added;
        console.log(initial_left);
        $("#handle").css('left', new_left);
    }
});

$('#triangleRight').click(function(){
    var initial_left = $("#handle").css('left');
    var added = 31;
    if(parseInt(initial_left) < 500){
        var new_left = parseInt(initial_left) + added;
        console.log(initial_left);
        $("#handle").css('left', new_left);
    }
});

$( function() {
    $( "#switch_icon" ).draggable({
        axis: "x",
        containment: "parent",
    })
});

$( function() {
    $( "#draggable2" ).draggable({
        axis: "x",
        containment: "parent",
        drag: function(event, ui) {
            $('#progressBar2').css('width', 38+parseInt($( "#draggable2" ).css('left')) - 812);
        }
    });
});

$( function() {
    $( "#dot_white" ).draggable({
        axis: "x",
        containment: "parent",
    })
});

$( function() {
    $( "#dot_yellow" ).draggable({
        axis: "x",
        containment: "parent",
    })
});

var div = $( "div.notShown" );
$('.menuLi:first').contextmenu(function(e) {
    e.preventDefault();
    div.toggleClass( "shown" );
});

$( ".star_yellow" ).each(function(index) {
    $(this).on("click", function() {
        $(this).toggleClass( "star_black" );
    });
});

$( ".star_black" ).each(function(index) {
    $(this).on("click", function() {
        $(this).toggleClass( "star_yellow" );
    });
});
