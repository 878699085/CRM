$(function(){
	//分页
	//var pageCount = $("#pages").val();
	//if(Number(pageCount)>100){
		//pageCount=100;
	//}
	//var current =$("#pagenum").val();
	$(".pageNumber").createPage({
        pageCount:Number(10),//总页数
        current:Number(1),//当前页
        pageSize:Number(10),
        backFn:function(p){
        	//p是跳转后的页码  （回调函数）
            $("#pageNum").val(p);
        }
	});
	
	$(".import").click(function(){
		$(".batch_import,.layout").show();
	})
	
	$(".custom_dis").click(function(){
		$(".cus_field,.layout").show();
	})
	
	$(".close").click(function(){
		$(".batch_import,.cus_field,.layout").hide();
	})
	
})
