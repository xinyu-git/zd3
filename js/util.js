var Util; if (!Util) Util = {};
/**
 * 固定的ID的含义
 * 登陆框
 * zH：账号
 * mM：密码
 * dQ：大区
 * yzM：验证码
 * loginTips 显示登陆错误信息
 * 登陆成功
 * nickName：显示登陆成功以后昵称
 * zoneId：显示登陆成功以后大区
 * 
 */
Util.HTTP_URL = "http://hd.wows.kongzhong.com/five";
//Util.HTTP_URL = "http://test.kongzhong.com:8080/hdWowsCore/five";//测试用
/**
 * 验证码地址
 */
Util.VERIFY_URL = "http://hd.wows.kongzhong.com/verifyCode";
//Util.VERIFY_URL = "http://test.kongzhong.com:8080/hdWowsCore/verifyCode";//测试用
/**
 * 登陆类型 
 * 1：登陆
 * 2：刷新
 */
Util.LOGIN_TYPE_LOGIN=1;
Util.LOGIN_TYPE_REFURBISH=2;
/**
 * 退出类型
 * 1 刷新
 * 2 不刷新
 */
Util.LOGOUT_TYPE_REFURBISH=1;
Util.LOGOUT_TYPE_NO_REFURBISH=2;

Util.SUBMITTING = 0;
/**
 * 常量 OP 操作类型
 */
/**
 * 登陆
 */
Util.OP_LOGIN="login";
/**
 * 退出
 */
Util.OP_LOGOUT="logout";
/**
 * 获取日志
 */
Util.OP_LOG="log";
/**
 * 登陆
 * @param {Object} type
 */
Util.login = function(type) {
	if(type==1){
		if(!Util.validate()){
			return false;
		}
	}
	if(Util.SUBMITTING == 1){
		return false;
	}
	Util.SUBMITTING = 1;
	//显示正在处理
	Tips.showProcess();
	$.ajax({
		url : Util.HTTP_URL,
		type : "get",
		dataType : "jsonp",
		data : {
			login:$.trim($("#zH").val()),
			password:hex_md5($.trim($("#mM").val())),
			inputVerifyCode:$.trim($("#yzM").val()),
			zoneId:$.trim($("#dQ").val()),
			type:type,
			op:Util.OP_LOGIN
		},
		jsonp : "jsonpcallback",
		success : function(json) {
			Util.SUBMITTING = 0;
			//隐藏正在处理
			Tips.hideProcess();
			if(json.success){
				//处理登陆成功
				Util.processLoginSuccess(json);
				//处理除给昵称和大区赋值的其他逻辑
				processLoginSuccessOtherInfo(json);
			}else{
				if(!!json.msg){
					Util.showLoginTips(json.msg);
				}
				Util.verifyImg();
			}
			process(json);
		}
	});
}
Util.processLoginSuccess = function(json){
	Tips.hideLogin();
	$("#nickName").html(json.nickName);
	$("#zoneId").html(json.zoneId);
	$("#zH").val("");
	$("#mM").val("");
	$("#yzM").val("");
}
/***
 * 验证登陆信息 
 * 约定：提示信息 ID：loginTips 
 * validate：true 说明需要验证的表单 
 * msg：错误提示信息。
 */
Util.validate = function(){
	var flag = true;
	$("form :input").each(function(){
			if($(this).attr("validate")){
				var val = $(this).val();
				if(val.replace(/^\s*/, "").replace(/\s*$/, "") == ""){
					Util.showLoginTips($(this).attr("msg"));
					flag = false;
					return flag;
				}
			}
		}
	);
	return flag;
}
/**
 * 显示登陆信息提示
 * @param {Object} msg
 */
Util.showLoginTips = function(msg){
	$("#loginTips").html(msg);
}
/**
 * 验证是否登陆,前台验证,根据昵称是否有昵称验证登陆
 */
Util.isLogin = function(){
	var nickName=$.trim($("#nickName").text());
	if(nickName.length>1){
		return true;
	}else{
		return false;
	}
}
/**
 * 验证码方法
 * 验证码图片ID:verify
 */
Util.verifyImg = function(){
	$("#verify").attr("src", Util.VERIFY_URL + "?" + Math.random());
}
/**
 * 退出
 * 1退出 刷新页面 2退出不刷新页面
 */
Util.logout = function(type){
	$.ajax({
		url : Util.HTTP_URL,
		type : "get",
		dataType : "jsonp",
		data : {
			op : Util.OP_LOGOUT
		},
		jsonp : "jsonpcallback",
		success : function(json) {
			Util.processLogout();
			if(parseInt(type)!=2){
				location.reload();
			}
		}
	});
}
/**
 * 清空退出信息
 */
Util.processLogout = function(){
	$("#nickName").html("");
	$("#zoneId").html("");
}
Util.getLog = function(pageNo){
	$.ajax({
		url : Util.HTTP_URL,
		type : "get",
		dataType : "jsonp",
		data : {
			op : Util.OP_LOG,
			pageNo:pageNo
		},
		jsonp : "jsonpcallback",
		success : function(json) {
			var log = json.content;
			var html="";
			for (var i=0; i<log.length; i++) {
				if(parseInt(log[i].itemtype)==4){
					html+="<tr><td>"+log[i].ctime+"</td><td>高级账号"+log[i].amount+"天</td><td>"+log[i].channel+"</td></tr>";
				}else{
					html+="<tr><td>"+log[i].ctime+"</td><td>"+log[i].itemname+"*"+log[i].amount+"</td><td>"+log[i].channel+"</td></tr>";
				}
			}
			if(html == ""){
				html="<tr><td>暂无记录</td></tr>";
			}
			$("#tlist").html(html);
			Tips.showLog();
		}
	});
}
Util.CPage = function(json){
	var pageNo=json.pageNo;
	var totalPage=json.totalPage;
	var p_page = pageNo-1;
	if(p_page<1){
		p_page = 1;
	}
	var n_page = pageNo+1;
	if(n_page>totalPage){
		n_page = totalPage;
	}
	var htmlQ="<li class='page'><a href='javascript:;' onclick='getLog("+(p_page)+")'>page</a></li>";
	var htmlH="<li class='last'><a href='javascript:;' onclick='getLog("+(n_page)+")'>last</a></li>";
	var html="";
	if(totalPage<=5){
		for(var i=1; i<=json.totalPage; i++){
			if(i==json.pageNo){
				html+="<li class='active'><a href='javascript:;' onclick='getLog("+i+")'>"+i+"</a></li>";
			}else{
				html+="<li><a href='javascript:;' onclick='getLog("+i+")'>"+i+"</a></li>";
			}
		}
	}else{
		if(pageNo<=3){
			for(var i=1; i<=5; i++){
				if(i==json.pageNo){
					html+="<li class='active'><a href='javascript:;' onclick='getLog("+i+")'>"+i+"</a></li>";
				}else{
					html+="<li><a href='javascript:;' onclick='getLog("+i+")'>"+i+"</a></li>";
				}
			}
		}else{
			var end = pageNo+2;
			if(end > totalPage){
				end = totalPage;
			}
			for(var i=pageNo-2; i<=end; i++){
				if(i==json.pageNo){
					html+="<li class='active'><a href='javascript:;' onclick='getLog("+i+")'>"+i+"</a></li>";
				}else{
					html+="<li><a href='javascript:;' onclick='getLog("+i+")'>"+i+"</a></li>";
				}
			}
		}
	}
	$("#pager").html(htmlQ+html+htmlH);
}
/***
 * 获取URL路径的页面名称 ,如果路径下没有文件名,则返回index.html
 * 比如：http://wows.kongzhong.com/wows.html,返回wows.html
 */
Util.getPage = function(){
	var page = "";
	var pathname = window.location.pathname;
	if(pathname.indexOf(".") == -1){
		page = "index.html";
	}else{
		page = pathname.substring(pathname.lastIndexOf("/")+1); 
	}
	return page;
}