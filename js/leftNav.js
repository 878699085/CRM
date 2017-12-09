$(function(){
	$(".sub-menu").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var $this=$(this);
		if($(this).find(".arrow").hasClass("open")){
			$this.find(".arrow").removeClass("open");
			$this.find(".sub").slideUp();
		}else{
			$this.find(".arrow").addClass("open");
			$this.find(".sub").slideDown();
		}
	})
})
