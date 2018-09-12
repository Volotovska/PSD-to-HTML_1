$('#progressBar').click(function(){
    var initial_width = $("#progressBar").css('width');
    var added = 10;
    var new_width = parseInt(initial_width) + added;
    $("#progressBar").css('width', new_width);
    console.log(new_width);
});
