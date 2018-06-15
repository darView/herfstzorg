$(function ()
{

    $('.js-wp-home-1').waypoint(function (direction)
    {
        $('.js-wp-home-1').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    $('.js-wp-home-2').waypoint(function (direction)
    {
        $('.js-wp-home-2').addClass('animated fadeInLeft');
    }, {
        offset: '85%'
    });

    $('.js-wp-home-3').waypoint(function (direction)
    {
        $('.js-wp-home-3').addClass('animated fadeInRight');
    }, {
        offset: '85%'
    });

    $('.js-wp-home-4').waypoint(function (direction)
    {
        $('.js-wp-home-4').addClass('animated fadeInUp');
    }, {
        offset: '85%'
    });

    $('.js-wp-home-5').waypoint(function (direction)
    {
        $('.js-wp-home-5').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    $('.js-wp-contact-1').waypoint(function (direction)
    {
        $('.js-wp-contact-1').addClass('animated fadeInUp');
    }, {
        offset: '85%'
    });

    $('.js-wp-contact-2').waypoint(function (direction)
    {
        $('.js-wp-contact-2').addClass('animated fadeInLeft');
    }, {
        offset: '85%'
    });

    $('.js-wp-contact-3').waypoint(function (direction)
    {
        $('.js-wp-contact-3').addClass('animated fadeInRight');
    }, {
        offset: '85%'
    });
});