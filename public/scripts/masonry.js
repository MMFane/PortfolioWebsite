// Masonry setup
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


// lightbox functionality
const $images = $('.zoomable');
const btnLeft = $('#prev');
const btnRight = $('#next');
const veil = $('.veil');
let imageArray = [];
let ptr = 0;
let currIdxText = $('#index');
let totalNumImgs = $('#total');

$images.each(function(index) {
    imageArray.push( $(this).attr('src'));
});
const total = imageArray.length;
totalNumImgs.text(`${total}`);

// events
$images.on("click", function () {
    ptr = imageArray.indexOf($(this).attr('src'));
    changeImage();
    veil.css('display', 'block');
});

btnLeft.on("click", prevImage);

btnRight.on("click", nextImage);

veil.on("swipeleft", translateImageLeft);

veil.on("swiperight", translateImageRight);

veil.on("click", function () {
    $(this).css('display', 'none');
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27 && veil.css('display', 'block')) {
        veil.css('display', 'none'); 
    }
});

// helper functions
function changeImage() {
    currIdxText.text(`${ptr + 1}`);
    $('.zoom-image').css('background-image', `url(${imageArray[ptr]}`);
}

function prevImage(event) {
    event.stopPropagation();
    if (ptr > 0) {
        ptr--;
    } else {
        ptr = total - 1;
    }
    changeImage();
}

function nextImage(event) {
    event.stopPropagation();
    if (ptr < total - 1) {
        ptr++;
    } else {
        ptr = 0;
    }
    changeImage();
}

function translateImageLeft(event) {
    changeMainImgPrev(event);
    translateTransImgLeft();
    setTimeout(resetTransImg, 250);
}

function translateImageRight(event) {
    changeMainImgNext(event);
    translateTransImgRight();
    setTimeout(resetTransImg, 250);
}

function changeMainImgPrev(event) {
    showTransImg();
    prevImage(event);
}

function changeMainImgNext(event) {
    showTransImg();
    nextImage(event);
}

function showTransImg() {
    $('.transition-image').css('background-image', `url(${imageArray[ptr]}`);
    $('.transition-image').css('display', 'block');
    $('.zoom-image').css('display', 'none');
}

function translateTransImgLeft() {
    $('.transition-image').css("transform", "translate(-400px,0)");
}

function translateTransImgRight() {
    $('.transition-image').css("transform", "translate(400px,0)");
}

function resetTransImg() {
    $('.transition-image').css('background-image', `none`);
    $('.transition-image').css("transform", "translate(0,0)");
    $('.zoom-image').css('display', 'block');
}