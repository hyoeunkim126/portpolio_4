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
        var i=0;
        function slide(){
            i++;
            if(i>$('.slide li:last').index()){
                i=0;
            }
            $('.slide li').eq(i).stop().fadeIn('slow');
            $('.slide li').eq(i-1).stop().fadeOut();

        };
        setInterval(slide,3000);
        
        var slidemenu = $("#slide_menu ul li");
        var contents = $("#slider .s_photo1 ul li");
        $(function(){
            slidemenu.click(function(){
                var target=$(this);
                var index=target.index();

                var photo  = contents.eq(index);
                photo.fadeIn(2000);
            });
        });