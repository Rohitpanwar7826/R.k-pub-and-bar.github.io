let nm=prompt("Enter your name ");
document.getElementById("demo").innerHTML=nm;

window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, 5000);
};

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["Bar..", "Bar.. in", "Bar.. indore", "Bar.. Since @1999"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Bar..", "Bar..", "Bar.. in", " Bar.. in indore", "Bar.. Since @1999"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});