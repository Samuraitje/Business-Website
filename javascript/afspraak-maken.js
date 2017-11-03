$(document).ready(function(){

	$('button').click(function(){
		let name = $('#name');
		let phone = $('#phone');
		let email = $('#email');
		let type = $('#type');
		let calendar = $('#calendar');
		let array1 = [name,phone,email,type,calendar]

		let array_filtered = array1
						.filter(i => i.val()==0)
						.filter(function(i){
							if(i == email){
								return i.val().indexOf('@');
							}
							return i
						})
		
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

		console.log($('#calendar').hasClass('form-lasttwo'))

	})





});


// $(document).ready(function(){

// 	$('button').click(function(){
// 		let name = $('#name');
// 		let phone = $('#phone');
// 		let email = $('#email');
// 		let type = $('#type');
// 		let calendar = $('#calendar');
// 		let object1 = {
// 			'name': name.val(),
// 			'phone': phone.val(),
// 			'email': email.val(),
// 			'type': type.val(),
// 			'calendar': calendar.val()
// 		}
// 		let array1 = []
// 		for(var key in object1){
// 			if (object1[key].length == 0){
// 				array1.push(key)
// 			}
// 			if(key=='email' && object1[key].indexOf('@') == -1 && $.inArray(key,array1) == -1){
// 					array1.push(key)	
// 			}
// 		}
// 		console.log(array1.length)
// 		if (array1.length == 0){
// 			let name = $('#name').val();
// 			if($('form').css("display") != "none"){
// 				$('form').css("display", "none")
// 				$('#questions h3').html(`Thanks ${name}!`);
// 				$('#questions h4').css("display","block");
// 				$('#form-validation').css("display","none");
// 			}
// 		} 
// 		else{
// 			let validationSentence = 'Please fill in the highlighted boxes correctly:<br>'
// 			array1.forEach(function(i){
// 				validationSentence = validationSentence + '- your ' + i + '<br>'
// 			})
// 			$('#form-validation').html(validationSentence)
// 		}

// 	})





// });











