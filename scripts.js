$(document).ready(function() {
    $('nav ul li a').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });

    $('.filter-btn').click(function() {
        var filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.portfolio-item').show();
        } else {
            $('.portfolio-item').not('[data-category="' + filter + '"]').hide();
            $('.portfolio-item[data-category="' + filter + '"]').show();
        }
    });
});
