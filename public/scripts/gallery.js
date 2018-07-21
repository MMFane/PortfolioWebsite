// Masonry setup
var $grid = $('.gallery-grid').imagesLoaded(function () {
    // init Masonry after all images have loaded
    $grid.masonry({
        // HAS to be before itemSelector
        columnWidth: '.gallery-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.gallery-item',
        percentPosition: true
    })
})

// Hammertime setup
// var hammertime = new Hammer.Manager(window);
// hammertime.on('pan', function(e) {
// 	console.log(e);
// });

// lightbox functionality
const $images = $('.zoomable')
const zoomImage = $('#zoom-image')
const transImage = $('#transition-image')
const description = document.querySelector('#description')
const btnLeft = $('#prev')
const btnRight = $('#next')
const veil = $('.veil')
let imageArray = []
let ptr = 0
let currIdxText = $('#index')
let totalNumImgsText = $('#total')

$images.each(function (index) {
    imageArray.push($(this))
})

const total = imageArray.length
if (total < 10) {
    totalNumImgsText.text(`0${total}`)
} else {
    totalNumImgsText.text(`${total}`)
}

// click an image to bring up veil and zoomed image
$images.on('click', function (e) {
    translateImgLeft(transImage, 0, $(window).width())
    ptr = imageArray.findIndex(function (item) {
        return item.attr('alt') === e.target.getAttribute('alt')
    })
    description.textContent = e.target.dataset.description
    changeImage(zoomImage, 0)
    changeImage(transImage, 0)


    veil.css('display', 'block')
})

$(window).resize(function () {
    translateImgLeft(transImage, 0, $(window).width())
})

// Scrolling through images
btnLeft.on('click', swipeImgPrev)
btnRight.on('click', swipeImgNext)

// with swiping
// veil.on('swipeleft', swipeImgNext)
// veil.on('swiperight', swipeImgPrev)

function swipeImgPrev(e) {
    setPtrPrev(e)
    animateImages('left', $(window).width(), 250)
}

function swipeImgNext(e) {
    setPtrNext(e)
    animateImages('right', $(window).width(), 250)
}

// exiting veil and zoomed image
veil.on('click', function () {
    veil.css('display', 'none')
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27 && veil.css('display', 'block')) {
        veil.css('display', 'none')
    }
})

// helper functions
function changeImage(image, delay) {
    if (ptr < 9) {
        currIdxText.text(`0${ptr + 1}`)
    } else {
        currIdxText.text(`${ptr + 1}`)
    }
    setTimeout(function () {
        image.css('background-image', `url(${imageArray[ptr].attr('src')}`)
    }, delay)
    description.textContent = imageArray[ptr][0].dataset.description
}

function setPtrPrev(e) {
    e.stopPropagation()
    if (ptr > 0) {
        ptr--
    } else {
        ptr = total - 1
    }
}

function setPtrNext(e) {
    e.stopPropagation()
    if (ptr < total - 1) {
        ptr++
    } else {
        ptr = 0
    }
}

function translateImgLeft(image, duration, distance) {
    image.animate({
        left: `-${distance}px`
    }, duration)
}

function translateImgRight(image, duration, distance) {
    image.animate({
        left: `${distance}px`
    }, duration)
}

function translateImgCenter(image, duration) {
    image.animate({
        left: '0px'
    }, duration)
}

function animateImages(direction, distance, time) {
    translateImgCenter(transImage, 0)
    if (direction === 'left') {
        translateImgLeft(zoomImage, 0, distance)
    } else {
        translateImgRight(zoomImage, 0, distance)
    }
    changeImage(zoomImage, time / 4)
    translateImgCenter(zoomImage, time)
    if (direction === 'left') {
        translateImgRight(transImage, time, distance)
    } else {
        translateImgLeft(transImage, time, distance)
    }
    changeImage(transImage, time)
}