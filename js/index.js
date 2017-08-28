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

let slides = document.getElementsByClassName('slider-item'),
    pagginator = document.getElementById('pagginator'),
    childrens = pagginator.children,
    interval = setInterval(handleClickNext, 10000);

function handleClickNext() {
    let current, next, id;
    for(let i = 0; i < slides.length; i++){
        if(slides[i].classList.contains('current-slide')){
            current = i;
            if(i !== slides.length - 1) next = i + 1;
            else next = 0;
        }
    }
    for(let i = 0; i < childrens.length; i++){
        if(childrens[i].classList.contains('active-pagginator')){
            if(i !== childrens.length - 1) {
                id = i + 1;
            }
            else {
               id = 0;
            }
            childrens[i].classList.remove('active-pagginator');
            break;
        }
    }
    childrens[id].classList.add('active-pagginator');

    slides[current].style.animation = 'fade-out .5s ease forwards';
    slides[current].classList.remove('current-slide');
    slides[next].style.animation = 'fade-in .5s ease forwards';
    slides[next].classList.add('current-slide');
    clearInterval(interval);
    interval = setInterval(handleClickNext, 10000);
}


function handleClickPrev() {
    let current, prev, id;
    for(let i = 0; i < slides.length; i++){
        if(slides[i].classList.contains('current-slide')){
            current = i;
            if(i !== 0) prev = i - 1;
            else prev = slides.length - 1;
        }
    }
    for(let i = 0; i < childrens.length; i++){
        if(childrens[i].classList.contains('active-pagginator')){
            if(i !== 0) {
                id = i - 1;
            } else {
                id = childrens.length - 1;
            }
            childrens[i].classList.remove('active-pagginator');
            break;
        }
    }
    childrens[id].classList.add('active-pagginator');

    slides[current].style.animation = 'fade-out .5s ease forwards';
    slides[current].classList.remove('current-slide');
    slides[prev].style.animation = 'fade-in .5s ease forwards';
    slides[prev].classList.add('current-slide');
    clearInterval(interval);
    interval = setInterval(handleClickNext, 10000);
}

/*Add navigation buttons*/
for(let i = 0; i < slides.length; i++){
    let li = document.createElement('li');
    if(i === 0) li.classList.add('active-pagginator');
    li.dataset.id = i;
    pagginator.appendChild(li);
}


function handlePagginator(e) {
    let target = e.target;

    if(target.tagName !== 'LI') return;

    let current, id = target.dataset.id;
    for(let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('current-slide')) {
            current = i;
        }
    }
    for(let i = 0; i < childrens.length; i++){
        if(childrens[i].classList.contains('active-pagginator')){
            childrens[i].classList.remove('active-pagginator');
            break;
        }
    }
    childrens[id].classList.add('active-pagginator');

    slides[current].style.animation = 'fade-out .5s ease forwards';
    slides[current].classList.remove('current-slide');
    slides[id].style.animation = 'fade-in .5s ease forwards';
    slides[id].classList.add('current-slide');
    clearInterval(interval);
    interval = setInterval(handleClickNext, 10000);
}

pagginator.addEventListener('click', handlePagginator);
prevButton.addEventListener('click', handleClickPrev);
nextButton.addEventListener('click', handleClickNext);