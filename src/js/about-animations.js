$(function ()
{
    // about page
    $('.js-wp-about-1').waypoint(function (direction)
    {
        $('.js-wp-about-1').addClass('animated fadeInLeft');
    }, {
        offset: '85%'
    });

    $('.js-wp-about-2').waypoint(function (direction)
    {
        $('.js-wp-about-2').addClass('animated fadeInRight');
    }, {
        offset: '85%'
    });

});