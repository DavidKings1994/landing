define(['jquery'],  function($) {
    $(document).ready(function() {
        $('.navbar-nav > *').click(function() {
            $('.navbar-nav > *').removeClass('active');
            $(this).addClass('active');
        });
    });
});
