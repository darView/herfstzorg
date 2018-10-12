$(function() {
    function slick() {
        $(".slick").slick({

            // normal options...
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            draggable: false,
            accessibility: false,
            // the magic
            responsive: [{

                breakpoint: 768,
                settings: "unslick" // destroys slick

            }]
        });
    }

    slick();
    $(window).resize(function() {
        slick();
    });
})