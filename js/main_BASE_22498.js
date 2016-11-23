
var span = $('span[class^="span-"]').hide(),
    i = 0;

(function cycle() {
    span.eq(i).fadeIn(400).delay(3000).fadeOut(400, cycle);
    i = ++i % span.length;

})();

// Docs at http://simpleweatherjs.com
$(document).ready(function() {
    $.simpleWeather({
        location: 'Seattle, WA',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            html = +weather.temp+'&deg;'+weather.units.temp+' and '+weather.text;

            $("#temp").html(html);
        },
        error: function(error) {
            $("#temp").html('<p>'+error+'</p>');
        }
    });
// SmoothScroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, 'swing');
                return false;
            }
        }
    });
    
    $('.home-img').mouseenter(
        function(){
            $(this).addClass("fig-hover");
        }
    );
    
    $(".home-img").mouseleave(
        function() {
            $(this).removeClass("fig-hover");
        }
    );
    $('body').noisy({
        'intensity' : 0.2, 
        'size' : 200, 
        'opacity' : 0.079, 
        'fallback' : '', 
        'monochrome' : false
    }).css('background-color', '#fafafa');
});
