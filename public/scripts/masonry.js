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
let zoomImage = $('.zoom-image');
let transImage = $('.transition-image');
let btnLeft = $('#prev');
let btnRight = $('#next');
let veil = $('.veil');
let imageArray = [];
let ptr = 0;
let currIdxText = $('#index');
let totalNumImgs = $('#total');

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
    veil.css('display', 'block');
});

// scrolling left and right through imageArray
    // with buttons
btnLeft.on("click", clickImgPrev);
btnRight.on("click", clickImgNext);

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

// function swipeImgPrev(event) {
//     prevImage(event);
//     setTransImg();
//     setZoomImg();
//     translateImgLeft(zoomImage);
//     showImg(zoomImage);
//     translateImgRight(transImage);
//     translateImgCenter(zoomImage);
//     resetTransImg();
// }

// function swipeImgNext(event) {
//     nextImage(event);
//     setTransImg();
//     setZoomImg();
//     translateImgRight(zoomImage);
//     setTimeout(showImg(zoomImage), 250);
//     translateImgLeft(transImage);
//     translateImgCenter(zoomImage);
// }

// exiting veil and zoomed image
veil.on("click", function () {
    $(this).css('display', 'none');
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

// function setTransImg() {
//     changeImage(transImage);
//     showImg(transImage);
// }

// function setZoomImg(event) {
//     hideImg(zoomImage);
//     changeImage(zoomImage);
// }

// function resetTransImg() {
//     hideImg(transImage);
//     translateImgCenter(transImage);
// }

// function showImg(image) {
//     image.css('display', 'block');
// }

// function hideImg(image) {
//     image.css('display', 'none');
// }

// function translateImgLeft(image) {
//     image.css("transform", "translate(-400px,0)");
// }

// function translateImgRight(image) {
//     image.css("transform", "translate(400px,0)");
// }

// function translateImgCenter(image) {
//     image.css("transform", "translate(0,0)");
// }