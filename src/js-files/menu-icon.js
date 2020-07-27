// $('.wrapper').addClass('loaded');
$(document).ready(function() {
$('.js-menu').click(function(event) {
    $('.js-menu').toggleClass('open');
    $('.js-menu-body').toggleClass('active2');
    $('body').toggleClass('lock');
});

});