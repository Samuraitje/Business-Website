$(document).ready(function(){

	$('button').click(function(){
		let array1 = [$('#name'),$('#phone'),$('#email'),$('#type'),$('#calendar')]
		let array_filtered = array1
						.filter(i => i.val()==0)
						.filter(i => (i==email) ? i.val().indexOf('@') : i)
	
		if(array_filtered!=0){
			let validationSentence = '<br>Please fill in the highlighted boxes correctly:<br>'
			array_filtered.forEach(function(i){
				validationSentence = validationSentence + '- your ' + i[0].id + '<br>'
				i.addClass("form-not-correct")
				if(i.hasClass("form-lasttwo")){
					i.css("padding","38px 18px")
				} else{
					i.css("padding","18px")
				}
			})
			$('#form-validation').html(validationSentence)
		}else{
			let name = $('#name').val();
			if($('form').css("display") != "none"){
				$('form').css("display", "none")
				$('#questions h3').html(`Thanks ${name}!`);
				$('#questions h4').css("display","block");
				$('#questions img').css("display","block");
				$('#form-validation').css("display","none");
			}
		}
	})


	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
	});

	$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
	});



});


						// .filter(i => i.val()==0)
						// .filter(function(i){
						// 	if(i == email){
						// 		return i.val().indexOf('@');
						// 	}
						// 	return i
						// })






