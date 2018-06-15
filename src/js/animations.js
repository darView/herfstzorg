$(function ()
{

    $('.js-wp-1').waypoint(function (direction)
    {
        $('.js-wp-1').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    $('.js-wp-2').waypoint(function (direction)
    {
        $('.js-wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '85%'
    });

    $('.js-wp-3').waypoint(function (direction)
    {
        $('.js-wp-3').addClass('animated fadeInRight');
    }, {
        offset: '85%'
    });

    $('.js-wp-4').waypoint(function (direction)
    {
        $('.js-wp-4').addClass('animated fadeInUp');
    }, {
        offset: '85%'
    });

    $('.js-wp-5').waypoint(function (direction)
    {
        $('.js-wp-5').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

});