$(function ()
{
    $('#collapseOne').on('show.bs.collapse', function ()
    {
        $('#headingOne i').addClass('active');
    });
    $('#collapseOne').on('hide.bs.collapse', function ()
    {
        $('#headingOne i').removeClass('active');
    });

    $('#collapseTwo').on('show.bs.collapse', function ()
    {
        $('#headingTwo i').addClass('active');
    });
    $('#collapseTwo').on('hide.bs.collapse', function ()
    {
        $('#headingTwo i').removeClass('active');

    });
});