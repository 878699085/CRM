$(function(){
	//创建时间、最后跟进时间日历调用
	jeDate("startTime");
	jeDate("endTime");
	//dl dt下拉框
	showSelect($(".expert_search dl"),$(".expert_search dl p"));
	showSelect($(".type_choose dl"),$(".type_choose dl p"));
	showSelect($(".per_choose dl"),$(".per_choose dl p"));
	
	
	//是否显示高级查询
	$(".advanced").click(function(){
		$(".expert_search").stop().slideToggle("hide");
		if($(".expert_search").css("display")=="block"){
			$(".advanced").text("隐藏高级查询");
		}else{
			$(".advanced").text("显示高级查询");
		}
	})
	//筛选条件(全选)
	$(".all_choose label b").click(function(){
		if($(this).hasClass("hover")){
			$(this).removeClass("hover");
			$(".all_choose li b").removeClass("hover")
		}else{
			$(this).addClass("hover");
			$(".all_choose li b").addClass("hover")
		}
	})
	$(".all_choose li b").click(function(){
		$(this).toggleClass("hover");
		if($(".all_choose li b.hover").length==$(".all_choose li").length){
			$(".all_choose label b").addClass("hover");
		}else{
			$(".all_choose label b").removeClass("hover");
		}
	})
	
})
//日期控件
function jeDate(DateID){
    $("#"+DateID).jeDate({
        isinitVal:false, //是否初始化时间
        festival:false, //是否显示农历
        ishmsVal:false,
        isTime:false,//是否选择时间
        minDate: '1970-07-31 23:59:59',
        maxDate: '2099-06-16 23:59:59',
        format:"YYYY-MM-DD",
        zIndex:3000,
        choosefun:function(DateID, val) {
        	if(DateID.attr("id") == "dateinfo"){
        		if( ($(".accepting").val() != "请选择" && !$.isEmpty($(".accepting").val())) && !$.isEmpty($(".beforeApplyNo").val()) && !$.isEmpty($(".beforeApplyTime").val()) ){
                 	$("#file_upload9").show();
                 }else{
                	 $("#file_upload9").hide();
                 }
        	}
        },
        okfun : function(elem,val){
        	if($("#dateinfo").val() ==val){
        		if( ($(".accepting").val() != "请选择" && !$.isEmpty($(".accepting").val())) && !$.isEmpty($(".beforeApplyNo").val()) && !$.isEmpty($(".beforeApplyTime").val()) ){
                 	$("#file_upload9").show();
                 }else{
                	 $("#file_upload9").hide();
                 }
        	}
        	
        }
    })
}
//dl dt模拟下拉
//显示下拉列表
function showSelect(name1,name2){
	/*if($("#typeCode").val()!=""){
		$(".business_type dt").attr("val",$("#typeCode").val());
		
		$(".business_type dt").text($("#typeCode").attr("val1"));
	}*/
	name1.click(function(){
		$(this).find("dd").slideToggle();
	})
	name2.click(function(){
		
		var val = $(this).attr("val");
		
		var find_xu=$(this).text(); // 获取dt标签中 文字内容
		$("#typeCode2").val(find_xu);
		var find_val=$(this).attr("val"); // 获取dt标签中 val值
		$("#typeCode1").val(find_val);
		
		/*if(val.indexOf("YWZT01")>-1) {
			$("#infoLevel").val(val);//赋值
		} else if(val.indexOf("YWLX02")>-1){
			$("#likeCode").val(val);//赋值
		} else {
			$("#quality").val(val);//赋值
		}*/
	  	/*var frm = document.getElementById("query-from");
    	frm.submit();
*/    	
	});
	
}