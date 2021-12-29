
$(document).ready(function(){
    $('.sub_slide_wrap h1,h3').css("transform","translateY(0px)").css("opacity","1");
    
});

$(function(){
    $(window).scroll(function(){
        var ws=$(this).scrollTop();
        if(ws>1150){
            $(".spec_info1 .box1").fadeIn();
        }
        if(ws>1170){
            $(".spec_info1 .box2").fadeIn();
        }
        if(ws>1190){
            $(".spec_info1 .box3").fadeIn();
        }
        if(ws>1210){
            $(".spec_info1 .box4").fadeIn();
        }
        if(ws>1230){
            $(".spec_info1 .box5").fadeIn();
        }
        if(ws>1250){
            $(".spec_info1 .box6").fadeIn();
        }

    });
});

