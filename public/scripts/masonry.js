var $grid = $('.gallery-grid').imagesLoaded(function () {
    // init Masonry after all images have loaded
    $grid.masonry({
        // HAS to be before itemSelector
        columnWidth: '.gallery-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.gallery-item',
        percentPosition: true
    });
});