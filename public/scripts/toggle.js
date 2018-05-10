var btns = document.querySelectorAll(".toggle");
var targets = document.querySelectorAll(".target");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", toggleHidden(i));
}

function toggleHidden(i) {
    return function() {
        targets[i].classList.toggle("hidden");
    }
}