let search = document.getElementById('search'),
    popUp = document.getElementById('pop-up');

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