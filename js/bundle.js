'use strict';

var search = document.getElementById('search'),
    popUp = document.getElementById('pop-up'),
    prevButton = document.getElementById('prev-button'),
    nextButton = document.getElementById('next-button');

search.addEventListener('click', function (e) {
    e.preventDefault();

    var searchField = document.getElementById('search-field');
    if (getComputedStyle(searchField).display == 'none') searchField.style.display = 'block';else searchField.style.display = 'none';
});

popUp.addEventListener('click', function () {
    var headerBottom = document.getElementById('header-bottom');
    if (getComputedStyle(headerBottom).display == 'none') headerBottom.style.display = 'flex';else headerBottom.style.display = 'none';
});

/*------------------------Slider--------------------------------------------------------*/

function handleClickNext() {
    var current = document.querySelector('.current-slide'),
        next = current.nextElementSibling;
    console.log(next);
}
function handleClickPrev() {
    console.log('prev');
}

prevButton.addEventListener('click', handleClickPrev);
nextButton.addEventListener('click', handleClickNext);
