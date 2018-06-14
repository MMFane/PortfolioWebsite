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
let $images = $('.zoomable');
let zoomImage = $('#zoom-image');
let transImage = $('#transition-image');
let btnLeft = $('#prev');
let btnRight = $('#next');
let veil = $('.veil');
let imageArray = [];
let ptr = 0;
let currIdxText = $('#index');
let totalNumImgs = $('#total');

console.log(zoomImage);

$images.each(function(index) {
    imageArray.push( $(this).attr('src'));
});
const total = imageArray.length;
if (total < 10) {
    totalNumImgs.text(`0${total}`);
} else {
    totalNumImgs.text(`${total}`);
}

// events

// click an image to bring up veil and zoomed image
$images.on("click", function () {
    ptr = imageArray.indexOf($(this).attr('src'));
    changeImage(zoomImage);
    changeImage(transImage);
    veil.css('display', 'block');
});

// scrolling left and right through imageArray
    // with buttons
// btnLeft.on("click", clickImgPrev);
// btnRight.on("click", clickImgNext);

btnLeft.on("click", swipeImgPrev);
btnRight.on("click", swipeImgNext);

function clickImgNext(event) {
    nextImage(event);
    changeImage(zoomImage);
}

function clickImgPrev(event) {
    prevImage(event);
    changeImage(zoomImage);
}

    // with swiping
// veil.on("swipeleft", swipeImgNext);
// veil.on("swiperight", swipeImgPrev);

function swipeImgPrev(event) {
    prevImage(event);
    stepOneRight();
    stepTwoRight();
    Reset();
    console.log(`----------`)
}

function swipeImgNext(event) {
    nextImage(event);
    stepOneLeft();
    stepTwoLeft();
    Reset();
    console.log(`----------`)
}

// exiting veil and zoomed image
veil.on("click", function () {
    veil.css('display', 'none');
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27 && veil.css('display', 'block')) {
        veil.css('display', 'none'); 
    }
});

// helper functions
function changeImage(image) {
    if (ptr < 9) {
        currIdxText.text(`0${ptr + 1}`);
    } else {
        currIdxText.text(`${ptr + 1}`);
    }
    image.css('background-image', `url(${imageArray[ptr]}`);
    console.log(`Changing ${image.attr('id')}`);
}

function prevImage(event) {
    event.stopPropagation();
    if (ptr > 0) {
        ptr--;
    } else {
        ptr = total - 1;
    }
}

function nextImage(event) {
    event.stopPropagation();
    if (ptr < total - 1) {
        ptr++;
    } else {
        ptr = 0;
    }
}

function setTransImg() {
    changeImage(transImage);
    transImage.toggle();
    console.log("Setting Trans Image");
}

function setZoomImg() {
    hideImg(zoomImage);
    changeImage(zoomImage);
    console.log("Setting Zoom Image");
}

function resetTransImg() {
    transImage.toggle();
    translateImgCenter(transImage);
    console.log("REsetting Trans Image");
}

function showImg(image) {
    image.css('display', 'block');
    console.log(`Showing ${image.attr('id')}`);
}

function hideImg(image) {
    image.css('display', 'none');
    console.log(`Hiding ${image.attr('id')}`);
}

function translateImgLeft(image) {
    // image.removeClass("TEST-CENTER TEST-RIGHT").addClass("TEST-LEFT");
    image.animate({
        left: "-400px"
    }, 250);
    console.log(`Translating ${image.attr('id')} LEFT`);
}

function translateImgRight(image) {
    // image.removeClass("TEST-LEFT TEST-CENTER").addClass("TEST-RIGHT");
    image.animate({
        left: "400px"
    }, 250);
    console.log(`Translating ${image.attr('id')} RIGHT`);
}

function translateImgCenter(image) {
    // image.removeClass("TEST-LEFT TEST-RIGHT").addClass("TEST-CENTER");
    image.animate({
        left: "0px"
    }, 250);
    console.log(`Translating ${image.attr('id')} CENTER`);
}

function stepOneRight() {
    zoomImage.css('visibility', 'hidden');
    changeImage(zoomImage);
    translateImgRight(zoomImage);
    zoomImage.css('visibility', 'visible');
    transImage.css('visibility', 'visible');
}

function stepOneLeft() {
    zoomImage.css('visibility', 'hidden');
    changeImage(zoomImage);
    translateImgLeft(zoomImage);
    zoomImage.css('visibility', 'visible');
    transImage.css('visibility', 'visible');
}

function stepTwoRight() {
    translateImgCenter(zoomImage);
    translateImgRight(transImage);
}

function stepTwoLeft() {
    translateImgCenter(zoomImage);
    translateImgLeft(transImage);
}

function Reset() {
    transImage.css('visibility', 'hidden');
    translateImgCenter(transImage);
}