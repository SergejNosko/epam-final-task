let search = document.getElementById('search');

search.addEventListener('click', (e) => {
    e.preventDefault();

    let searchField = document.getElementById('search-field');
    if(getComputedStyle(searchField).display == 'none') searchField.style.display = 'block';
    else searchField.style.display = 'none';
});