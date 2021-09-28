const swiper = new Swiper('.swiper', {
    // Optional parameters  

    loop: true,
    direction: 'horizontal',
    // loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prew-arrow',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

$(".navbar__burger").on("click", function () {
    $(".navbar__burger_line").toggleClass('_active');
})

$(".que-block5 .plus .fa").on("click", function () {
    $(".navbar__burger_line").toggleClass('_active');
})
// collapse

$(".que-block").on("click", function () {
    if ($(".p-down").css("display") == "none") {
        $(".p-down").slideDown(600);
        $(this).find(".plus").find(".fa").removeClass('fa-plus').addClass('fa-minus')
    }
    else {
        $(".p-down").slideUp(600);
        $(this).find(".plus").find(".fa").removeClass('fa-minus').addClass('fa-plus')
    }
});



$(".que-block2").on("click", function () {
    if ($(".p-down2").css("display") == "none") {
        $(".p-down2").slideDown(600);
        $(this).find(".plus").find(".fa").removeClass('fa-plus').addClass('fa-minus')
    }
    else {
        $(".p-down2").slideUp(600);
        $(this).find(".plus").find(".fa").removeClass('fa-minus').addClass('fa-plus')
    }
});



$(".que-block3").on("click", function () {
    if ($(".p-down3").css("display") == "none") {
        $(".p-down3").slideDown(600);
        $(this).find(".plus").find(".fa").removeClass('fa-plus').addClass('fa-minus')

    }
    else {
        $(".p-down3").slideUp(600);
        $(this).find(".plus").find(".fa").removeClass('fa-minus').addClass('fa-plus')
    }
});



$(".que-block4").on("click", function () {
    if ($(".p-down4").css("display") == "none") {
        $(".p-down4").slideDown(600);
        $(this).find(".plus").find(".fa").removeClass('fa-plus').addClass('fa-minus')

    }
    else {
        $(".p-down4").slideUp(600);
        $(this).find(".plus").find(".fa").removeClass('fa-minus').addClass('fa-plus')

    }
});



$(".que-block5").on("click", function () {
    if ($(".p-down5").css("display") == "none") {
        $(".p-down5").slideDown(600);
        $(this).find(".plus").find(".fa").removeClass('fa-plus').addClass('fa-minus')
    }
    else {
        $(".p-down5").slideUp(600);
        $(this).find(".plus").find(".fa").removeClass('fa-minus').addClass('fa-plus')
    }
});

$(".navbar-toggler").on("click", function () {
    $(this).find(".navbar-toggler-icon").removeStyle('')
})
