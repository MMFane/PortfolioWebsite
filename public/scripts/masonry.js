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
const zoomImage = $('#zoom-image');
const transImage = $('#transition-image');
const description = document.querySelector('#description')
const btnLeft = $('#prev');
const btnRight = $('#next');
const veil = $('.veil');
let imageArray = [];
let ptr = 0;
let currIdxText = $('#index');
let totalNumImgs = $('#total');

$images.each(function (index) {
    imageArray.push($(this));
});
const total = imageArray.length;
if (total < 10) {
    totalNumImgs.text(`0${total}`);
} else {
    totalNumImgs.text(`${total}`);
}

// events

// click an image to bring up veil and zoomed image
$images.on("click", function (e) {
    ptr = imageArray.findIndex(function (item) {
        return item.attr('alt') === e.target.getAttribute('alt')
    });
    description.textContent = e.target.dataset.description
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

function clickImgNext(e) {
    nextImage(e);
    changeImage(zoomImage);
}

function clickImgPrev(e) {
    prevImage(e);
    changeImage(zoomImage);
}

// with swiping
// veil.on("swipeleft", swipeImgNext);
// veil.on("swiperight", swipeImgPrev);

function swipeImgPrev(e) {
    prevImage(e);
    stepOneRight();
    stepTwoRight();
    Reset();
    console.log(`----------`)
}

function swipeImgNext(e) {
    nextImage(e);
    stepOneLeft();
    stepTwoLeft();
    Reset();
    console.log(`----------`)
}

// exiting veil and zoomed image
veil.on("click", function () {
    veil.css('display', 'none');
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27 && veil.css('display', 'block')) {
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
    image.css('background-image', `url(${imageArray[ptr].attr('src')}`);
    description.textContent = imageArray[ptr][0].dataset.description
}

function prevImage(e) {
    e.stopPropagation();
    if (ptr > 0) {
        ptr--;
    } else {
        ptr = total - 1;
    }
}

function nextImage(e) {
    e.stopPropagation();
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