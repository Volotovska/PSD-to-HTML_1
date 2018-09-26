<html>
<head>
	<link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css"></style>
	<script src="https://code.jquery.com/jquery-2.0.2.min.js"></script>
	<script src="https://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
<style>
.ui-slider {
    background: #FF9999; 
    margin: 10%;
    width: 200px;
    height: 20;
}
</style>
</head>
<body>
<div id="slider"></div>
<script type="text/javascript">
$(function(){
         
    $('#slider').slider({
                value: 35
            });
});
</script>
</body>
</html>
