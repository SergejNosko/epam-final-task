;(function () {
    let bagCount = document.getElementById('bag-count'),
        itemNumber = document.getElementById('item-number'),
        bagContainer = document.getElementById('bag-container'),
        buyButton = document.getElementById('buy'),
        clearButton = document.getElementById('clear'),
        isEmpty = document.getElementById('is-empty');

    bagCount.textContent = localStorage.bagTotal || '';
    itemNumber.textContent = localStorage.items ? JSON.parse(localStorage.items).length : 0;

    function handleRemove(e) {
        let target = e.target;

        if(target.tagName !== 'BUTTON') return;

        localStorage.setItem('bag', 44);
        console.log('here');
    }



    function handleClear(){
        let children = bagContainer.children;
        for(let i = children.length - 1; i >= 0 ; i--){
            bagContainer.removeChild(children[i]);
        }
        isEmpty.style.display = 'block';
    }

    function handleBuy() {
        let children = bagContainer.children;
        for(let i = children.length - 1; i >= 0 ; i--){
            bagContainer.removeChild(children[i]);
        }
        isEmpty.textContent = 'Thank you for your purchase!';
        isEmpty.style.color = '#f14a58';
        isEmpty.style.display = 'block';
    }

    buyButton.addEventListener('click', handleBuy);
    clearButton.addEventListener('click', handleClear);
    bagContainer.addEventListener('click', handleRemove);


}());