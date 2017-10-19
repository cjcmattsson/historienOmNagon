
// KODEN NEDAN STÄNGER AC MÖJLIGHETEN ATT SCROLLA MED MUS/TOUCHPAD
window.onwheel = function(){ return false; }

$(document).ready(function() {
    $(".scroll-down").click(function(event){
        $('html, body, .wondering_5').animate({scrollTop: '+=200px'}, 3000);
        // $('.wondering_5').addClass('wondering_5-animate'), $('.splash').addClass('splash-animate');

    });
});

$(document).ready(function() {
    $(".scroll-up").click(function(event){
        $('html, body').animate({scrollTop: '-=400px'}, 3000);
    });
});
