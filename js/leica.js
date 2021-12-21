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
                var target=$(this);
                var index=target.index();

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
        $(".product_box").stop().animate({marginLeft:-280},500, function(){
            $(".product_box li:first").appendTo(".product_box");
            $(".product_box").css({marginLeft:0});
        });
    });
    $(".next").click(function(){
        $(".product_box").stop().animate({marginLeft:280},500, function(){
            $(".product_box li:last").prependTo(".product_box");
            $(".product_box").css({marginLeft:0});
        });
    });
});    

