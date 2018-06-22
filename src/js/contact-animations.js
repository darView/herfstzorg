$(function ()
{
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