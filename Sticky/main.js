
var dif = 10;

$('#progressBar').click(function(){
    var initial_width = $("#progressBar").css('width');
    var added = 10px;
    var new_width = initial_width + added;
    $("#progressBar").css('width', 'new_width');
    console.log(new_width);
});
