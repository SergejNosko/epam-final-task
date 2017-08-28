let search = document.getElementById('search'),
    popUp = document.getElementById('pop-up'),
    prevButton = document.getElementById('prev-button'),
    nextButton = document.getElementById('next-button');

search.addEventListener('click', (e) => {
    e.preventDefault();

    let searchField = document.getElementById('search-field');
    if(getComputedStyle(searchField).display == 'none') searchField.style.display = 'block';
    else searchField.style.display = 'none';
});

popUp.addEventListener('click', () => {
   let headerBottom = document.getElementById('header-bottom');
   if(getComputedStyle(headerBottom).display == 'none') headerBottom.style.display = 'flex';
   else headerBottom.style.display = 'none';
});

/*------------------------Slider--------------------------------------------------------*/

function handleClickNext() {
    let current, next,
        slides = document.getElementsByClassName('slider-item');
    for(let i = 0; i < slides.length; i++){
        if(slides[i].classList.contains('current-slide')){
            current = i;
            if(i !== slides.length - 1) next = i + 1;
            else next = 0;
        }
    }

    slides[current].style.animation = 'fade-out .5s ease forwards';
    slides[current].classList.remove('current-slide');
    slides[next].style.animation = 'fade-in .5s ease forwards';
    slides[next].classList.add('current-slide');
}
function handleClickPrev() {
    let current, prev,
        slides = document.getElementsByClassName('slider-item');
    for(let i = 0; i < slides.length; i++){
        if(slides[i].classList.contains('current-slide')){
            current = i;
            if(i !== 0) prev = i - 1;
            else prev = slides.length - 1;
        }
    }

    slides[current].style.animation = 'fade-out .5s ease forwards';
    slides[current].classList.remove('current-slide');
    slides[prev].style.animation = 'fade-in .5s ease forwards';
    slides[prev].classList.add('current-slide');
}

prevButton.addEventListener('click', handleClickPrev);
nextButton.addEventListener('click', handleClickNext);