$(function () {
    $('[data-toggle="tooltip"]').tooltip({'delay': { show: 1000, hide: 200 }});

    $('[data-toggle="tooltip"]').hover(function (a){
        if ($(this).prop("tagName") == 'I') {
            $(this).addClass("animated swing");
        }
    }, function(){
        if ($(this).prop("tagName") == 'I') {
            $(this).removeClass("animated swing");
        }
    });
})