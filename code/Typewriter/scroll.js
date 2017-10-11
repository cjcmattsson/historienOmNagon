
// KODEN NEDAN STÄNGER AC MÖJLIGHETEN ATT SCROLLA MED MUS/TOUCHPAD
// window.onwheel = function(){ return false; }

$(document).ready(function() {
    $(".scroll-down").click(function(event){
        $('html, body').animate({scrollTop: '+=400px'}, 3000);
    });
});

$(document).ready(function() {
    $(".scroll-up").click(function(event){
        $('html, body').animate({scrollTop: '-=400px'}, 3000);
    });
});
