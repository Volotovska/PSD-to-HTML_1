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


$('#dotProgressBar').mousedown(function(event) { 
    const startPageX = event.pageX;


    moveAt(event);

    console.log(event.pageX);

    function moveAt(event) {
        console.log(1);
        $("#dotProgressBar").css('transform', `translateX(${event.pageX - startPageX}px)`);
    }

    // function move(event) {
    //     moveAt(event);
    // }

    // $(document).mousemove(move);

    // function up(event) {
    //     moveAt(event);

    //     $(document).off('mousemove', move);
    //     $(document).off('mouseup', up);
    // };

    // $(document).mouseup(up);

    $(document).on('mousemove', moveAt);

    $(document).mouseup(function() {
        $(document).off('mousemove', moveAt);
        $(document).off('mouseup');
    });

});
