// Draw on Scroll
var scroll_to_top = document.querySelector('.scroll-to-top');
var scroll_to_top_svg_path = scroll_to_top.querySelector('svg path');
var length  = scroll_to_top_svg_path.getTotalLength();

function drawOnScroll(e) {
    var windowScroll = document.body.scrollTop + document.documentElement.scrollTop; 
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if ( windowScroll > 0 ) {
        scroll_to_top.classList.add('active');

        var scrolled = windowScroll / height;
        var draw = length * scrolled;

        scroll_to_top_svg_path.style.strokeDashoffset = length - draw;
        scroll_to_top_svg_path.style.strokeDasharray = length;
    } else {
        scroll_to_top.classList.remove('active');
    }
}

window.addEventListener('load', drawOnScroll);
window.addEventListener("scroll", drawOnScroll);
window.addEventListener("resize", drawOnScroll);
window.addEventListener("wheel", drawOnScroll);
