$('.atomic-button').on('click', function() {
    $('nav').toggleClass('active');
    $('html').toggleClass('scroll');
})
 
$('button').on('click', function () {
         $('body,html').animate({
            scrollTop: $('.onas').offset().top
         }, 1000)
});

/* $(window).scroll(function () {
    document.querySelector("header").style.background = '#fff';

    if ($(window).scrollTop() === 0) {
        document.querySelector("header").style.background = '';
    } 
}); */
