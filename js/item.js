(function () {
    let thumbnail = document.getElementById('thumbnail'),
        children = thumbnail.children,
        feature = document.getElementById('feature');
    children[0].children[0].style.display = 'block';

    function handleThumbnail(e) {
        let target = e.target;

        if(target.tagName !== 'DIV') return;

        let bgImage = getComputedStyle(target).backgroundImage,
            start = bgImage.indexOf('images/'),
            end = parseInt(bgImage.indexOf('")')),
            src = bgImage.substring(start, end);//bgImage.replace(/url\(/g, '').replace(/\)/g, '');

        for(let i = 0; i < children.length; i++){
            children[i].children[0].style.display = 'none';
        }
        target.children[0].style.display = 'block';
        target.parentElement.previousElementSibling.src = src;
    }

    function handleFeature(e) {
        let target = e.target;

        if(target.tagName !== 'LI') return;

        let siblings = target.parentElement.children;

        for(let i = 0; i < siblings.length; i++){
            siblings[i].classList.remove('current-feature');
        }

        target.classList.add('current-feature');
    }

    feature.addEventListener('click', handleFeature);
    thumbnail.addEventListener('click', handleThumbnail);
}());