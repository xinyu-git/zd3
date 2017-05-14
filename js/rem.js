/**
 * Created by dxh on 2016/7/26.
 */
$(document).ready(function(e){
    var Width=$(window).width();
    var fontSize;
    if(!(Width<640)){
        fontSize="100px";
    }else{
        fontSize=Width/640*100+'px';
    };
    $('html').css('font-size',fontSize);
    $(window).resize(function(e){
        Width=$(window).width();
        fontSize;
        if(!(Width<640)){
            fontSize="100px";
        }else{
            fontSize=Width/640*100+'px';
        };
    });
    $('html').css('font-size',fontSize);
});