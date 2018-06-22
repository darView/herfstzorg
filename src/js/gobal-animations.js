$(function ()
{
    $('.js-wp-title').waypoint(function (direction)
    {
        $('.js-wp-title').addClass('animated fadeInUp');
    }, {
        offset: '85%'
    });
});