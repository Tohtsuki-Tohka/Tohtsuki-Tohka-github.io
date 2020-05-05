$(function(){
 /* $("a[href^=#]:not([href=#])").click(function() {
   
    var target = $($(this).attr("href")).offset().top;

    $("html,body").animate({scrollTop: target},5000);
    return false;
 });*/



 $('a[href^="#"]').click(function() {
 var speed = 1500; // スクロールスピード(ミリ秒)
 var href= $(this).attr("href");
 var target = $(href == "#" || href == "" ? 'html' : href);
 var position = target.offset().top;
 $('body,html').animate({scrollTop:position}, speed, 'swing');
 return false;
 });



});
