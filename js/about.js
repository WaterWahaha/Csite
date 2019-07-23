$(function () {
    var owl = $(".team-project-carousel");
    owl.owlCarousel({
        autoPlay: 3000,
        items: 3, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        pagination: true, // Show pagination
        navigation: false // Show navigation
    });
    // Custom Navigation Events
    $("#team .btn-next").on('click', function () {
        owl.trigger('owl.next');
    });
    $("#team .btn-prev").on('click', function () {
        owl.trigger('owl.prev');
    })

});