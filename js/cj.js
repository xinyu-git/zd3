// JavaScript Document


var index=0,           //当前亮区位置
prevIndex=10,          //前一位置
Speed=300,           //初始速度
Time,            //定义对象
arr_length = 10; //GetSide(3,3),         //初始化数组
EndIndex=1,           //决定在哪一格变慢
cycle=0,           //转动圈数   
EndCycle=3,           //计算圈数
flagG=false,           //结束转动标志
random_num=4,      //中奖数,这里是后台传来的中奖数1--8之间（包括1和8），每次抽奖改变这个数
quick=0,           //加速
arr_prize=["猎豹载具（3大）","500000银币","赛睿键盘","1000000银币","1000金币","PAH-1载具（3天）","预警系统*1","VIP*3天","修理箱*5","10000金币"];      //对应的奖品详情
   
function StartGame(){//如果条件满足
   $(".win_list dd").removeClass("active"); //取消选中
   $("body").append("<div class='cjIng'></div>");
   //random_num = parseInt($("#txtnum").val());//
   //random_num =12;//这里是传来的中奖数1--12之间（包括1和12）
   //index=1; //再来一次,从1开始
   cycle=0;
   flagG=false;
   //EndIndex=Math.floor(Math.random()*12);
   if(random_num>5) {
      EndIndex = random_num - 5; //前5格开始变慢
   } else {
      EndIndex = random_num + 10 - 5; //前5格开始变慢
   }
   //EndCycle=Math.floor(Math.random()*3);
   Time = setInterval(Star,Speed);
   
}
function Star(num){
    //跑马灯变速
    if(flagG==false){
      //走五格开始加速
      if(quick==5){
         clearInterval(Time);
         Speed=50;
         Time=setInterval(Star,Speed);
      }
      //跑N圈减速
      if(cycle==EndCycle+1 && index-1==EndIndex){
         clearInterval(Time);
         Speed=300;
         flagG=true;         //触发结束
         Time=setInterval(Star,Speed);
      }
    }
   
    if(index>arr_length){
        index=1;
        cycle++;
    }
   
   //结束转动并选中号码
   if(flagG==true && index==parseInt(random_num)){ 
      quick=0;
      clearInterval(Time);
	  $(".cjIng").remove();
	  showInfo("<div class='tsInfo'>"
				+" <h4>恭喜获得</h4>"
				+" <div class='p'>"+arr_prize[random_num-1]+"</div>"
				+" <div class='infoBtn'><a class='click-btn' href='javascript:;'>确 定</a></div>"
				+"</div>");
   }
   $(".win_dd"+index).addClass('active'); //设置当前选中样式
   if(index>1){
       prevIndex=index-1;
   }else{
       prevIndex=arr_length;
   }
   $(".win_dd"+prevIndex).removeClass('active'); //取消上次选择样式 
   index++;
   quick++;
}
//显示提示信息框
function showInfo(alertHtml){
    maskLayer();
    var _winH=$(window).height();             //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┐
    var _scrollTop=$(document).scrollTop();   //　　　　　　　　　　　├→注意这2断代码的先后顺序
    $("#alertInfo").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
    var _thisDomWidth=$("#alertInfo").width()+parseInt($("#alertInfo").css("border-left-width"))*2;
    var _thisDomHeight=$("#alertInfo").height()+parseInt($("#alertInfo").css("border-left-width"))*2;
    var topD=parseInt(_scrollTop+(_winH-_thisDomHeight)/2);
    var mL=parseInt(_thisDomWidth/2);
    if(_thisDomHeight>=_winH){
        topD=_scrollTop;
        if(_scrollTop+_thisDomHeight>=$(document).height()){
            topD=$(document).height()-_thisDomHeight;
        }
    };
    $("#alertInfo").css({
        "margin-left":"-"+mL+"px"
    }).stop(true,true).animate({
        "top":topD+"px",
    "margin-left":"-"+mL+"px",
        "opacity":"1"
    },"fast");
    //console.log("点击弹层时窗口的高度："+_winH);
}
//遮罩
function maskLayer(){
  $("#maskLayer,#alertInfo").remove();
    var maskLayer="<div id='maskLayer'></div>";
    var alertInfo="<div id='alertInfo'><span class='close'>关闭</span></div>";
    $("body").append(maskLayer,alertInfo);
    $("#maskLayer").height($(document).height()).show();
}

//关闭
function closeDiv(){
    $("#alertInfo").stop(true,true).animate({
        "top":"-100%",
        "opacity":"0"
    },"fast",function(){
        $("#maskLayer,#alertInfo").remove().hide();
    });
}
//关闭
  $(document).on("click","#alertInfo .close",closeDiv);