document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// const imageWrapper = document.querySelector('.image-wrapper')
// const imageItems = document.querySelectorAll('.image-wrapper > *')
// const imageLength = imageItems.length
// const perView = 3
// let totalScroll = 0
// const delay = 2000

// imageWrapper.style.setProperty('--per-view', perView)
// for(let i = 0; i < perView; i++) {
//   imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
// }

// let autoScroll = setInterval(scrolling, delay)

// function scrolling() {
//   totalScroll++
//   if(totalScroll == imageLength + 1) {
//     clearInterval(autoScroll)
//     totalScroll = 1
//     imageWrapper.style.transition = '0s'
//     imageWrapper.style.left = '0'
//     autoScroll = setInterval(scrolling, delay)
//   }
//   const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
//   imageWrapper.style.left = `-${totalScroll * widthEl}px`
//   imageWrapper.style.transition = '.3s'
// }
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 4000); // Change image every 2 seconds
}