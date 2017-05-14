$(function(){
	showDiv('.pop')
});


//点击关闭
function closePop()
{
	var oDiv = $(".pop");
	var oBlackOverlay = $(".black_overlay");
	
	oBlackOverlay.bind("click",function(e){
	var target = $(e.target);
	if(target.closest(".pop").length == 0){
		oDiv.hide();
		oBlackOverlay.hide();
	} 
	})
};


//弹出居中
function showDiv(obj) {
	center(obj);
	$(window).scroll(function() {
		center(obj);
	});
	$(window).resize(function() {
		center(obj);
	});
}

function center(obj) {
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(obj).height();
	var popupWidth = $(obj).width();
	$(obj).css({
		"position": "absolute",
		"top": (windowHeight - popupHeight) / 2 + $(document).scrollTop(),
		"left": (windowWidth - popupWidth) / 2
	});
}



//广告滚动条
function ScrollImgLeft(){
	var speed=20
	var scroll_begin = document.getElementById("scroll_begin");
	var scroll_end = document.getElementById("scroll_end");
	var scroll_div = document.getElementById("scroll_div");
	scroll_end.innerHTML=scroll_begin.innerHTML
	
	function Marquee(){
		if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0)
		scroll_div.scrollLeft-=scroll_begin.offsetWidth
		else
		scroll_div.scrollLeft++
	}
	var MyMar=setInterval(Marquee,speed)
	scroll_div.onmouseover=function() {clearInterval(MyMar)}
	scroll_div.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
}


$(function()
{	
	//导航
	$('.nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
	});
	//导航
	$('.right_links a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
	});
});





//点击显示隐藏
function showHide(Ele,iTaget){
		$(Ele).show();
		$(iTaget).show();
	}

//点击显示隐藏
function hide(Ele,iTaget){
		$(Ele).hide();
		$(iTaget).hide();
	}
//竖向tabs
function tabH(){
	var $aLi = $(".tabH li");
	var $aDiv = $(".dright");
	var $wrap = $(".wrap");
	
	$aLi.click(function()
	{
	for (var i =0;i<$aLi.length;i++) 
	{
		var $this = $(this);
		var $t = $this.index();
		//alert($t);
		if ($t == 0) {
			$wrap.removeClass().addClass('wrap');
		}
		if ($t == 1) {
			$wrap.removeClass().addClass('wrap1');
		}
		if ($t == 2) {
			$wrap.removeClass().addClass('wrap');
		}
		$(this).addClass("tabH_active").siblings().removeClass("tabH_active");	
		$aDiv.removeClass("tabH_show").eq($t).addClass("tabH_show");
		}
	});
};
//横向tab
function tabW(){
	var $aLi = $("#tabW_2 ul li");
	var $aUl = $("#tabW_2_c .u_2 ul");
	$aLi.click(function()
{
	for (var i =0;i<$aLi.length;i++) 
	{
		var $this = $(this);
		var $t = $this.index();
		$(this).addClass("active").siblings().removeClass("active");	
		$aUl.removeClass("tabW_show").eq($t).addClass("tabW_show");
		}
	});
};


//上下自动滚动
function aotoTop(id){
	var box = document.getElementById(id),
		can = true;
	box.innerHTML += box.innerHTML;
	box.onmouseover = function() {
		can = false
	};
	box.onmouseout = function() {
		can = true
	};
	new function() {
		var stop = box.scrollTop % 50 == 0 && !can;
		if (!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
		setTimeout(arguments.callee, box.scrollTop % 100 ? 10 : 500);
	};
};

//智能设定高度
function dleftHerght(ELement){
	var Height = document.body.clientHeight;
	$(ELement).css({'*height':Height,'_height':Height,'height':Height});
	alert(Height)
};

inpuerNumber()
function inpuerNumber(){
	$(".input_number").val(10);
	var $number =$(".input_number").val();
	var $up = $(".number .up");
	var $lw = $(".number .lw");
	$up.click(function(){
		var $number =$(".input_number").val();
		$number++;
		$(".input_number").val($number);
		var hhd = $("#hhd").html();
		if($number==1){
			$("#hhd").html(hhd*$number);
		}else{
			$("#hhd").html((hhd/($number-1))*$number);
		}
	});
	
	$lw.click(function(){
		var $number =$(".input_number").val();
		if($number>1){
			$number--;
			$(".input_number").val($number);
			var hhd = $("#hhd").html();
			$("#hhd").html((hhd/($number+1))*$number);
			if($number==2){
			}else{
			}
		}
	});
	
};

function buyonkeyup(obj){
	if(obj.value.length==1){
		obj.value=obj.value.replace(/[^1-9]/g,'');
	}else{
		obj.value=obj.value.replace(/\D/g,'');
	}
	if(obj.value==""){
		obj.value = 1;
	}
	if(obj.value>99){
		obj.value=99;
		$('#hhd').html(basicmoney*99);
	}else{
		$('#hhd').html(basicmoney*obj.value);
	}
}

function buyonafterpaste(obj){
	if(obj.value.length==1){
		obj.value=obj.value.replace(/[^1-9]/g,'');
	}else{
		obj.value=obj.value.replace(/\D/g,'');
	} 
	if(obj.value==""){
		obj.value = 1;
	}
	if(obj.value>99){
		obj.value=99;
		$('#hhd').html(basicmoney*99);
	}else{
		$('#hhd').html(basicmoney*obj.value);
	}
}