const slide = document.querySelector('.sliderr');
const img = document.querySelectorAll('.sliderimg img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#nextt');
const check = document.querySelector('#check');
const x = document.querySelector('#x');
const side = document.querySelector('.side');

let counter = 0;
const size = img[0].clientWidth;
slide.style.transform = 'translate(' + (-size * counter) + 'px)';

console.log(counter);
next.addEventListener('click', () => {
    if (counter >= 4) counter = 0;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    console.log(counter);
    slide.style.transform = 'translate(' + (-size * counter) + 'px)';
});
prev.addEventListener('click', () => {
    if (counter <= 0) counter = 4;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    console.log(counter);
    slide.style.transform = 'translate(' + (-size * counter) + 'px)';
});
check.addEventListener('click', () => {

    side.style.display = 'block';
    side.style.transition = 'transform 0.4s ease-in-out';
});
x.addEventListener('click', () => {

    side.style.display = 'none';
    side.style.transition = 'transform 0.4s ease-in-out';
});