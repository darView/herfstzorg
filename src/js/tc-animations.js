$(function ()
{
    var i=0;
    $('#terms_and_conditions .js-wp').each(function() {
        i++;
        var className='.js-wp-tc-' + i.toString();
        console.log(className);
        $(className).waypoint(function (direction)
        {
            $(className).addClass('animated fadeInRight');
        }, {
            offset: '85%'
        });
    });

});