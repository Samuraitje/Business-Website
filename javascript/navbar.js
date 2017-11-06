$(document).ready(function(){

	$(window).resize(function(){
		sidebarChange();
	});
	$(window).scroll(function(){
		sidebarChange();
	});  

	function sidebarChange(){
		let scrollTop = 0
		scrollTop = $(window).scrollTop();
		$('.counter').html(scrollTop);
	    if (scrollTop >= 50 || $('body').width() < 1223 ) {
		    $('#navbar').addClass('scrolled-nav');
		    $('nav li a').addClass('scrolled-list');
		    $("#logo").css({"width":"243","height":"20","padding": "15.2px","padding-left": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s, opacity .8s"});
		    $("#cao").css({"width":"30","height":"30","padding": "10px","padding-right": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s, opacity .8s"});
	   		$('.slide-nav-btn').css("top","20px")
	   	} else if (scrollTop < 50) {
		    $('#navbar').removeClass('scrolled-nav');
		   	$('#logo').css({"width":"425","height":"33.33","padding": "33.33px","padding-left": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s"});
		    $("#cao").css({"width":"60","height":"60","padding": "20px","padding-right": "0","transition": "height .8s, width .8s","-webkit-transition": "height .8s, width .8s, opacity .8s"});
		    $('nav li a').removeClass('scrolled-list');
		    $('.slide-nav-btn').css("top","60px")
	  } 
	};

	$('.slide-nav-btn').click(function(){
 		 $('.slide-nav').toggleClass('active')
 		 $('.slide-nav-btn').toggleClass('active-btn')
})
});

