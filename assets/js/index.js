
document.getElementById("button-down").addEventListener("click", scrollThroughDown);
function scrollThroughDown() {
    let width = screen.width;
    if (width <= 980) {
        var btn = document.getElementById("button-down");
        btn.href = '#header';
        console.log("width <= 980");
    } else {
        var btn = document.getElementById("button-down");
        btn.href = '#nav';
        console.log("width => 980");
    }
};

document.getElementById("button-up").addEventListener("click", scrollThroughUp);
function scrollThroughUp() {
    let width = screen.width;
    if (width <= 980) {
        var btn = document.getElementById("button-up");
        btn.href = '#header';
        console.log("width <= 980");
    } else {
        var btn = document.getElementById("button-up");
        btn.href = '#nav';
        console.log("width => 980");
    }
};

window.onload = function () {
    let width = screen.width;
    if (width < 690) {
        let item = document.getElementById('carousel-item-2');
        let item2 = document.getElementById('carousel-itemIndicator-3');
        let itemIndicator = document.getElementById('carousel-itemIndicator-2');
        item.parentNode.removeChild(item);
        itemIndicator.parentNode.removeChild(itemIndicator);
        item2.setAttribute('data-bs-slide-to', '1');

    }
}
