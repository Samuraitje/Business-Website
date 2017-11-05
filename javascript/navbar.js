$(document).ready(function(){
		  	var scrollTop = 0;
		  	$(window).scroll(function(){
		    scrollTop = $(window).scrollTop();
		    $('.counter').html(scrollTop);
		    if (scrollTop >= 50) {
		    $('#navbar').addClass('scrolled-nav');
		    $('nav li a').addClass('scrolled-list');
		    $("#logo").css({"width":"243","height":"20","padding": "15.2px","padding-left": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s, opacity .8s"});
		    $("#cao").css({"width":"30","height":"30","padding": "10px","padding-right": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s, opacity .8s"});
		   	} else if (scrollTop < 50) {
		    $('#navbar').removeClass('scrolled-nav');
		   	$('#logo').css({"width":"425","height":"33.33","padding": "33.33px","padding-left": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s"});
		    $("#cao").css({"width":"60","height":"60","padding": "20px","padding-right": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s, opacity .8s"});
		    $('nav li a').removeClass('scrolled-list');
		  } 
	});  
});