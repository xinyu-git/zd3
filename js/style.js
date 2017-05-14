/*wlo:Cflower*/

var Tips; if (!Tips) Tips = {};
Tips.show=function(ev){
	//var ev = event || window.event;
	var oEvent=ev || event;
	oEvent.stopPropagation();
    dialog.alertLog("请登录","dialog.alertMsg(\"提示\",\"签到失败！\",\"dialog.closeDiv()\",\"s\")");
}

$(function(){
	$(".tab a").click(function(event){
		event.preventDefault();
		var _index=$(this).index();
		$(this).addClass("curr").siblings().removeClass("curr");	
		$(this).parent().siblings("dt").find(".event").hide().eq(_index).show();
	}).eq(0).trigger("click");

	
	//关闭
	$(document).on("click","#alertInfo .close",dialog.closeDiv);
	//登录实例
    $(".canyu_btn1").click(function(ev){
       // event.preventDefault();
       var oEvent=ev || event;
        oEvent.stopPropagation();
        dialog.alertLog("请登录","dialog.alertMsg(\"提示\",\"签到失败！\",\"dialog.closeDiv()\",\"s\")");
    });
	$(document).on("click","#alertInfo",function(ev){
		var oEvent=ev || event;
		oEvent.stopPropagation();
	});
	$(document).on("click",function(){
		dialog.closeDiv();
	});
	
/*---------------------------------------------------------------------------------------------------------------------*/
/*------以下是相关弹出窗口实例，仅供参考-------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------*/

	//错误提示实例
	$(".signIn a").click(function(event){
		event.preventDefault();
		dialog.alertMsg("提示","签到失败！","dialog.closeDiv()","s");
	})
	
	

	//动态
	$(".userDy").click(function(event){
		event.preventDefault();
		dialog.showInfo("<div class='userInfo'>"
				+" <h4><span>个人动态</span></h4>"
				+" <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
				+"  <thead><tr>"
				+"   <th class='w1'>时间</th>"
				+"   <th>奖励</th>"
				+"   <th>任务</th>"
				+"  </tr><tr>"
				+"   <td>&nbsp;</td>"
				+"   <td>&nbsp;</td>"
				+"   <td>&nbsp;</td>"
				+"  </tr></thead>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+" </table>"
				+"</div>")
	})	
	
	
	
/*---------------------------------------------------------------------------------------------------------------------*/
})
