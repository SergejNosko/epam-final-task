;(function () {
    let filter = document.getElementById('filter'),
        filterTablet = document.getElementById('filterTablet'),
        filterHeaders = document.getElementById('filter-headers').children;

    function handleFilter(e) {
        let target = e.target;

        if(target.tagName !== "LI") return;

        let filterValue = target.parentElement.previousElementSibling,
            filterName = filterValue.previousElementSibling,
            parent = filterValue.parentElement;
        if(target.textContent === 'Not selected'){
            filterValue.style.display = 'none';
            parent.style.padding = '25px 20px';
            filterName.style.fontSize = '16px';
            filterName.style.marginBottom = '0px';
            target.parentElement.style.margin = '25px 0 0 0';
            //filterName.style.margin = '0 0 20px 0';
        }
        else{
            filterValue.textContent = target.textContent;
            filterValue.style.display = 'block';
            filterName.style.fontSize = '12px';
            filterName.style.marginBottom = '7px';
            parent.style.padding = '15px 20px';
            target.parentElement.style.margin = '15px 0 0 0';
        }
    }

    function handleFilterTablet(e) {
        let target = e.target;

        if(target.tagName !== "LI") return;

        let targetId = target.parentElement.dataset.id;

        if(target.textContent === 'Not selected'){
            filterHeaders[targetId].textContent = target.parentElement.previousElementSibling.textContent + ' , ';
            filterHeaders[targetId].style.color = '#000';
        }else{
            filterHeaders[targetId].textContent = target.textContent;
            filterHeaders[targetId].style.color = '#f14a58';
        }
    }

    filter.addEventListener('click', handleFilter);
    filterTablet.addEventListener('click', handleFilterTablet);
}());