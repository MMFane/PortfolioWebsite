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

var $images = $('.zoomable');
$images.on("click", function () {
    let newSrc = $(this).attr('src');
    $('.zoom-image').css('background-image', `url(${newSrc}`);
    $('.veil').css('display', 'block');
    console.log(`${$('.veil').css('display')}`);
});

$('.veil').on("click", function () {
    $(this).css('display', 'none');
});