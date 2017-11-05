$(document).ready(function(){

	$('#submit-button button').click(function(){
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
				$('#questions #submit-button').css("display","none");
				$('.pop-up#back').delay(1500).fadeIn(5)
				$('.pop-up#front').delay(1500).animate({left: '50%'},250);
			}
		}
	})

	$('.pop-up').click(function(event){
		if(event.target.id == "back" || event.target.id == "cross" || event.target.id == "no-thanks-text"){
			$('.pop-up').css("display","none")
		} else if(event.target.id == "button"){
			alert('SUBSCRIBED!');
			$('.pop-up').css("display","none")
		}
	})

	$('.price button').click(function(event){
		alert("session booked!")
	})
});


						// .filter(i => i.val()==0)
						// .filter(function(i){
						// 	if(i == email){
						// 		return i.val().indexOf('@');
						// 	}
						// 	return i
						// })






