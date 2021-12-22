var currentScrollTop=0;
$(document).ready(function(){
            scrollController();
            $(window).scroll(function(){
                scrollController();
                });
            });
            function scrollController(){
            currentScrollTop = $(window).scrollTop();
                if(currentScrollTop > 900) { 
                    $("header").addClass("active");
                    $(".nav_link").css("color", "#333");
                    }else{
                    $("header").removeClass("active");
                    $(".nav_link").css("color", "#eee");
                        }
                    }


 $(function(){
            var slidemenu = $("#slide_menu ul li");
            var contents = $("#slider .s_photo1 ul li");

            slidemenu.click(function(){
                var index=$(this).index();

                var photo  = contents.eq(index);
                contents.not(photo).fadeOut("fast");
                photo.fadeIn();
            });
        });



                            

        var i=0;
        function slide(){
            i++;
         if(i>$('.slide li:last').index()){
                i=0;
            }
            $('.slide li').fadeOut();
            $('.slide li').eq(i).stop().fadeIn('slow');
            $('.slide li').eq(i-1).stop().fadeOut();
        
        };
        setInterval(slide,3000);

        
$(function(){
    
    $(".prev").click(function(){
        $(".product_box li:last").prependTo(".product_box");
        $(".product_box").css({marginLeft:-300});

        $(".product_box").stop().animate({marginLeft:0},500);
        
    });
    $(".next").click(function(){
        $(".product_box").stop().animate({marginLeft:-300},500, function(){
            $(".product_box li:first").appendTo(".product_box");
            $(".product_box").css({marginLeft:0});
        });
    });
});    



$(function(){
    $(window).scroll(function(){
        var ws=$(this).scrollTop();
        // 아래쪽에서
        if(ws>2600){
            $('.schedule_photo:first-child').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>2650){
            $('.schedule_photo:nth-child(2)').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>2700){
            $('.schedule_photo:nth-child(3)').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>2750){
            $('.schedule_photo:nth-child(4)').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>2800){
            $('.schedule_photo:nth-child(5)').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>2850){
            $('.schedule_photo:nth-child(6)').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>2900){
            $('.schedule_photo:nth-child(7)').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>2950){
            $('.schedule_photo:last-child').css("transform","translateY(0px)").css("opacity","1");
        }
        if(ws>3000){
            $('.schedule_photo:nth-child(2)').css("transform","translateY(0px)").css("opacity","1");
        }
    });
});