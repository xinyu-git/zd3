var Tips; if (!Tips) Tips = {};
/**
 * 显示输入框
 */
Tips.showChat= function (ev){
	var oEvent=ev || event;
	oEvent.stopPropagation();
	dialog.alertChat();
}
/**
 * 显示 提示框
 */
Tips.showChat1 = function(){
	showHide('','.chatBody');
}

/**
 * 显示 提示框
 */
Tips.showTips = function(msg){
	$("#tips").html(msg);
	showHide('#fade_div','.tishi_pop');
}
/**
 * 隐藏 提示框
 */
Tips.hideTips = function(){
	hide('#fade_div','.tishi_pop');
}
/**
 * 显示 提示框2
 */
Tips.showTips2 = function(){
	showHide('#fade_div','.tishi_pop2');
}
/**
 * 隐藏 提示框2
 */
Tips.hideTips2 = function(){
	hide('#fade_div','.tishi_pop2');
}
/**
 * 显示 提示框3
 */
Tips.showTips3 = function(){
	 showInfo("<div class='tsInfo'>"
				+" <h4>恭喜获得</h4>"
				+" <div class='p'>*****经验</div>"
				+" <div class='infoBtn'><a class='click-btn' href='javascript:;'>确 定</a></div>"
				+"</div>");
	/*showHide('#fade_div','.tishi_pop3');*/
}
/**
 * 隐藏 提示框3
 */
Tips.hideTips3 = function(){
	hide('#fade_div','.tishi_pop3');
}
/**
 * 显示 提示框4
 */
Tips.showTips4 = function(){
	showHide('#fade_div','.tishi_pop4');
}
/**
 * 隐藏 提示框4
 */
Tips.hideTips4 = function(){
	hide('#fade_div','.tishi_pop4');
}
/**
 * 显示 提示框5
 */
Tips.showTips5 = function(){
	showHide('#fade_div','.tishi_pop5');
}
/**
 * 隐藏 提示框4
 */
Tips.hideTips5 = function(){
	hide('#fade_div','.tishi_pop5');
}
/**
 * 显示 登陆框
 */
Tips.showLogin = function(){
	//显示登陆框的时候刷新验证码
	Util.verifyImg();
	showHide('#fade_div','.logClick');
}
/**
 * 隐藏 登陆框
 */
Tips.hideLogin = function (){
	hide('#fade_div','.logClick');
}

/**
 * 显示 登陆框2
 */
Tips.showLoginTwo = function(){
	//显示登陆框的时候刷新验证码
	Util.verifyImg();
	hide('.tishi_pop2','.tishi_pop2')
	showHide('#fade_div','.logClick');
}
Tips.showwindow=function(obj){
	var n=0;
	showHide(obj,obj);
}
Tips.hidewindow=function(){
	hide('.window_wrap','.window_wrap');
}
/**
 * 隐藏 登陆框
 */
Tips.hideLoginTwo = function (){

	hide('#fade_div','.loginbg');
}
/**
 * 显示 确认框
 */
Tips.showConfirm = function (){
	/*$(obj).addClass("curr_confirm").siblings().removeClass("curr_confirm");*/
	showHide('#fade_div','.confirmation_box');
}

/**
 * 隐藏 确认框
 */
Tips.hideConfirm = function (){
	hide('#fade_div','.confirmation_box');
}
/**
 * 显示 日志框
 */
Tips.showLog = function(){
	showHide('#fade_div','.example4');
}

/**
 * 隐藏 日志框
 */
Tips.hideLog = function (){
	hide('#fade_div','.example4');
}
/**
 * 显示 正在处理
 */
Tips.showProcess = function(){
	showHide('#fade_div','.process');
}

/**
 * 隐藏 正在处理
 */
Tips.hideProcess = function (){
	hide('#fade_div','.process');
}
