/**
* 分页js
**/
(function($){
	var ms = {
		init:function(obj,args){
			return (function(){
				ms.fillHtml(obj,args);
				ms.bindEvent(obj,args);
			})();
		},
		//填充html
		fillHtml:function(obj,args){
			return (function(){
				obj.empty();
				//当前页
				obj.append('第<b class="current">'+args.current+'</b>/<b class="sumPage">'+args.pageCount+'</b>页');
				//上一页
				if(args.current > 1){
					//首页
					obj.append('<a href="javascript:;" class="firstPage"></a>');
					//上一页
					obj.append('<a href="javascript:;" class="prevPage"></a>');
				}else{
					//首页
					obj.remove('.firstPage');
					obj.append('<span class="disabled first"></span>');
					//上一页
					obj.remove('.prevPage');
					obj.append('<span class="disabled lastPage"></span>');
				}
				//下一页
				if(args.current < args.pageCount){
					//下一页
					obj.append('<a href="javascript:;" class="nextPage"></a>');
					//尾页
					obj.append('<a href="javascript:;" class="endPage"></a>');
				}else{
					//下一页
					obj.remove('.nextPage');
					obj.append('<span class="disabled underPage"></span>');
					//尾页
					obj.remove('.endPage');
					obj.append('<span class="disabled end"></span>');
				}
				var arr=[5,10,15];
				var str="";
				$.each(arr,function(i,v){
					if(args.pageSize==v){
						str+="<option selected>"+v+"</option>";
					}else{
						str+="<option>"+v+"</option>";
					}
				})
				obj.append('<div class="page_go"><label>共'+args.pageCount+'页</label>  每页<select></select>条   到第<input type="txet" class="goOn"/>页<a href="javascript:;" class="queNumber true"></a></div>');
				$(".page_go select").append(str);
			})();
		},
		//绑定事件
		bindEvent:function(obj,args){
			return (function(){
				//首页
				obj.on("click","a.firstPage",function(){
					var current = parseInt(1);
					ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount,"pageSize":args.pageSize});
					if(typeof(args.backFn)=="function"){
						args.backFn(current);
					}
				});
				//上一页
				obj.on("click","a.prevPage",function(){
					var current = parseInt(obj.children("b.current").text());
					ms.fillHtml(obj,{"current":current-1,"pageCount":args.pageCount,"pageSize":args.pageSize});
					if(typeof(args.backFn)=="function"){
						args.backFn(current-1);
					}
				});
				//下一页
				obj.on("click","a.nextPage",function(){
					var current = parseInt(obj.children("b.current").text());
					ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount,"pageSize":args.pageSize});
					if(typeof(args.backFn)=="function"){
						args.backFn(current+1);
					}
				});
				//尾页
				obj.on("click","a.endPage",function(){
					var current = parseInt(args.pageCount);
					ms.fillHtml(obj,{"current":args.pageCount,"pageCount":args.pageCount,"pageSize":args.pageSize});
					if(typeof(args.backFn)=="function"){
						args.backFn(args.pageCount);
					}
				});
				//确定
				obj.on("click","a.queNumber",function(){
					if(obj.find(".goOn").val()!="" && !isNaN( obj.find(".goOn").val() ) ){
						var current = parseInt(obj.find(".goOn").val());
						if(current>args.pageCount){
							alert("请输入正确的页码");
							obj.find(".goOn").val("");
							return;
						}
					}else{
						alert("请输入页码");
						obj.find(".goOn").val("");
						return;
					}
					
					ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount,"pageSize":args.pageSize});
					if(typeof(args.backFn)=="function"){
						args.backFn(current);
					}
					
				});
			})();
		}
	}
	$.fn.createPage = function(options){
		var args = $.extend({
			pageCount : 10,
			current : 1,
			pageSize:10,
			backFn : function(){}
		},options);
		ms.init(this,args);
	}
})(jQuery);
