$(function () {

    var sidebar_btn = $('.mobile-sidebar-btn .fa');
    var main = $('main');
    var overlay = $('.overlay');

    sidebar_btn.on('click', function () {
        main.toggleClass('show');
    });

    overlay.on('click', function () {
        main.toggleClass('show');
    });

});