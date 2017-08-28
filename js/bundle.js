'use strict';

var search = document.getElementById('search'),
    popUp = document.getElementById('pop-up');

search.addEventListener('click', function (e) {
    e.preventDefault();

    var searchField = document.getElementById('search-field');
    if (getComputedStyle(searchField).display == 'none') searchField.style.display = 'block';else searchField.style.display = 'none';
});

popUp.addEventListener('click', function () {
    var headerBottom = document.getElementById('header-bottom');
    if (getComputedStyle(headerBottom).display == 'none') headerBottom.style.display = 'flex';else headerBottom.style.display = 'none';
});
