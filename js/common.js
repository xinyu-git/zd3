/*wlo:Cflower*/
var dialog; if(!dialog) dialog={};
dialog={
	//关闭
	closeDiv:function(){
		$(".chatBody").stop(true,true).animate({
			"top":"-100%",
			"opacity":"0"
		},"fast",function(){
			$(".chatBody").remove().hide();
		});
	},
	//
	maskLayer:function(){
		$(".chatBody").remove();
		var chatLayer="<div class='chatBody'></div>";
		$("body").append(chatLayer);
	},
	//显示提示信息框
	showInfo:function(alertHtml){  //　　　　　　　　　　　├→
		//$("body").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
		dialog.maskLayer();
		$(".chatBody").append(alertHtml);
		$(".chatBody").show();
	},
	//输入框
	alertChat:function(){//msgTitle：提示标题,msg：提示内容,func：为“确定”按钮动作处理函数,flag：双按钮标识，”d“为双按钮（”确定“和”取消“,“取消”时的按钮动作是关闭窗口），”s“为单按钮（只有”确定“）
		dialog.showInfo("<div class='chatWrap'>"
			+"<a href='javascript:;' class='close'>关闭</a>"
			+" <textarea class='chatArea'></textarea>"
			+" <div class='send'><a href='javascript:;'>发送</</div>"
			+"</div>");
	}	
};
//点击聊天区域不关闭弹窗
$(document).on("click",".chatWrap",function(ev){
		var oEvent=ev || event;
		oEvent.stopPropagation();
});
//点击页面关闭弹窗
$(document).on("click",function(){
	dialog.closeDiv();
});
//点击页面关闭按钮关闭弹窗
$(document).on("click",".chatBody .close",dialog.closeDiv);
$(window).on("load resize scroll",function(){
	refreshRem();
	//if($("#alertInfo").is(":visible")){
	//	dialog.alertInfoPo();
	//}
});

function refreshRem(){
	var width=$(window).width();
	// 按照640比例可以直接用设计图尺寸除100
	if(width>640) width=640;
	if(width<320) width=320;
	var rem=width/640*100;
	$("html").css("font-size",rem);
}	


jQuery.divselect = function(divselectid,inputselectid){
	var inputselect = $(inputselectid);
	$(divselectid+" i").click(function(){
		 var selC=$(this).siblings(".selC");
		 if(selC.css("display")=="none"){
			selC.show();
		 }else{
			selC.hide();  
		 }
	});
	$(divselectid+" .selC a").click(function(){
		 var ZoneId=$(this).attr("value");
		 var ZoneTex=$(this).html();
		 $(this).addClass("selectedV").siblings().removeClass("selectedV");
		 $(this).parent().siblings(".sel-ed").val(ZoneId);
		 $(this).parent().siblings("i").html(ZoneTex);
		 $(this).parent().hide();
	});
};