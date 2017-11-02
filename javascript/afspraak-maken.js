$(document).ready(function(){
	$('button').click(function(){
		let name = $('#name').val();
		if($('form').css("display") != "none"){
			$('form').css("display", "none")
			$('#questions h3').html(`Thanks ${name}!`)
			$('#questions h4').css("display","block")
	}
});

})





