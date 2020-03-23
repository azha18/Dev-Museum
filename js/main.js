$(document).ready(function(){

	$(".dm-menuber-close-btn").click(function(){
		$(".dm-side-menu-wrraper").removeClass("side-nav-active").addClass("side-nav-hide");
	})	

	$(".menuBar").click(function(){
		$(".dm-side-menu-wrraper").removeClass("side-nav-hide").addClass("side-nav-active");
	})

});	