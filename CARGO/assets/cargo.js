
$(document).ready(function () {
    $('.progres').animate(
        { number: '50' },
        {
            duration: 7000,
            step: function (now, fx) {
                if (fx.prop == 'number') {
                    $(this).html(Math.round(now * 1) / 1 + '+');
                }
            }
        }
    );
    $('.progresfirst').animate(
        { number: '300' },
        {
            duration: 7000,
            step: function (now, fx) {
                if (fx.prop == 'number') {
                    $(this).html(Math.round(now * 1) / 1 + '+');
                }
            }
        }
    );
    $('.progresnext').animate(
        { number: '108' },
        {
            duration: 7000,
            step: function (now, fx) {
                if (fx.prop == 'number') {
                    $(this).html(Math.round(now * 1) / 1 + '+');
                }
            }
        }
    );
    $('.progreslast').animate(
        { number: '1500' },
        {
            duration: 7000,
            step: function (now, fx) {
                if (fx.prop == 'number') {
                    $(this).html(Math.round(now * 1) / 1 + '+');
                }
            }
        }
    );



    function checkPosition() {
        if (window.matchMedia('(max-width: 600px)').matches) {

            var media = $('.freight');
            var media1 = $('.stage');
            var media2 = $('.flexflex');

            $(media).addClass("owl-carousel owl-theme");
            $(media1).addClass("owl-carousel owl-theme");
            $(media2).addClass("owl-carousel owl-theme");

            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                autoplay: true,
                autoWidth: false,
                items: 1,
                dotsdata: false,
            })
        } else {

        }
    }
    checkPosition();


    $('.owl23').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        items: 1,
        dotsdata: true,


        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            1024: {
                items: 3,
                loop: false
            }
        }
    })

    $(document).on("click", '.fabars', function () {
        var navMenu = $(".cargomedia");
        navMenu.css('display', 'block');
        navMenu.css('width', '270px');
        navMenu.css('right', '0px');
        navMenu.css('z-index', '1');
        navMenu.css('transition', 'all 1s ease-in-out');
        navMenu.css('visibility', 'visible');
    });


    //animate top function
    function animateToTop(className, second) {
        $('html, body').animate({
            scrollTop: $(className).offset().top
        }, second);
    }



    $(".linkone").click(function () {
        animateToTop(".overlay", 2000)
    });
    $(".linktwo").click(function () {
        animateToTop(".back", 1000)
    });
    $(".linkthree").click(function () {
        animateToTop(".aboutus", 1000)
    });
    $(".linkfour").click(function () {
        animateToTop(".whyus", 2000)
    });
    $(".linkfive").click(function () {
        animateToTop(".client", 3000)
    });
    $(".linksix").click(function () {
        animateToTop(".article", 3000)
    });
    $(".linkseven").click(function () {
        animateToTop(".touch", 3000)
    });

    $(".activeteam").click(function () {
        animateToTop(".staff", 3000)
    });
    $(".priceteam").click(function () {
        animateToTop(".pricingnext", 1000)
    });
    $(".faqteam").click(function () {
        animateToTop(".frequently", 3000)
    });

    $(".mainmenu .nav-link").click(function () {
        var self = $(this);
        self.siblings("a.nav-link").removeClass("firstactive");
        self.addClass("firstactive");
    });


    if (window.matchMedia('(max-width: 600px)').matches) {
        $(document).mouseup(function (e) {
            var cargomedia = $(".cargomedia");

            if (!cargomedia.is(e.target) && cargomedia.has(e.target).length === 0) {
                cargomedia.hide();
            }
        });
        $(".mainmenu .nav-link").click(function () {
            var self = $(this);
            self.siblings("a.nav-link").removeClass("active");
            self.addClass("active");
        });
        $(window).scroll(function(){
            if ($(this).scrollTop() > 0) {
            } else {
                $(".cargo").css('height', '300px');
                $(".cargo").css('line-height', '100px');
                $(".cargo").css('transition', 'all 0.5s ease-in-out');
                $(".cargo").css('margin-top', '-300px');
            }
        });


    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".cargo").css('margin-top', '-50px');
            $(".cargo").css('height', '67px');
            $(".cargo").css('line-height', '50px');
            $(".cargo").css('transition', 'all 0.2s ease-in-out');
            $(".submenu").css('margin-top', '-32px');
        } else {
            $(".cargo").css('height', '100px');
            $(".cargo").css('line-height', '80px');
            $(".cargo").css('transition', 'all 0.5s ease-in-out');
            $(".submenu").css('margin-top', 'inherit');
            $(".cargo").css('margin-top', '-3px');
        }
    });

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
})

