$(function ()
{
    var i=0;
    $('#privacy-statement .js-wp').each(function() {
        i++;
        var className='.js-wp-ps-' + i.toString();
        $(className).waypoint(function (direction)
        {
            $(className).addClass('animated fadeInRight');
        }, {
            offset: '85%'
        });
    });

});