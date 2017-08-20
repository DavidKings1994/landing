define(['jquery'],  function($) {
    function checkScroll() {
        var height = $(window).scrollTop();
        if(height > 40) {
            $('#hesturTitle').removeClass("fade-in");
            $('#hesturTitle').addClass("fade-out");
        } else {
            $('#hesturTitle').removeClass("fade-out");
            $('#hesturTitle').addClass("fade-in");
        }
    }

    $(document).ready(function() {
        checkScroll();

        $('.navbar-nav > *').click(function() {
            $('.navbar-nav > *').removeClass('active');
            $(this).addClass('active');
        });

        $(window).scroll(function() {
            checkScroll();
        });
    });
});
