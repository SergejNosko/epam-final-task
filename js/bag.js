;(function () {
    let bagCount = document.getElementById('bag-count'),
        bagSum = document.getElementById('bag-sum'),
        itemNumber = document.getElementById('item-number'),
        bagContainer = document.getElementById('bag-container'),
        buyButton = document.getElementById('buy'),
        clearButton = document.getElementById('clear'),
        isEmpty = document.getElementById('is-empty');

    bagCount.textContent = localStorage.bagTotal || '';
    if(localStorage.items){
        let number = 0;
        JSON.parse(localStorage.items).forEach((item) => {
            number += parseInt(item.quantity);
        });
        itemNumber.textContent = number;
    }
    //itemNumber.textContent = localStorage.items ? JSON.parse(localStorage.items).length : 0;
    bagSum.textContent = localStorage.bagTotal ? localStorage.bagTotal : 0;

    function showItems() {
        let items = localStorage.items ? JSON.parse(localStorage.items) : 0;
        if(items === 0 || items.length === 0) isEmpty.style.display = 'block';
        else{
            items.forEach((item) => {
                let bagItem = document.createElement('div');
                bagItem.classList.add('bag-item');
                bagItem.innerHTML = `
                    <a href="item.html" class="bag-item-hover"><p>View item</p></a>
                    <img src="${item.photo}" alt="Item">
    
                    <div class="bag-item-description">
                        <h3>${item.name}</h3>
                        <p class="price">£<span>${item.price}</span></p>
                        <ul>
                            <li>Color: <span>${item.color}</span></li>
                            <li>Size: <span>${item.size}</span></li>
                            <li>Quantity: <span>${item.quantity}</span></li>
                        </ul>
                        <button>Remove item</button>
                    </div>
                `;
                bagContainer.appendChild(bagItem);
            });
        }
    }
    
    function handleRemove(e) {
        let target = e.target;

        if(target.tagName !== 'BUTTON') return;

        let name = target.parentElement.children[0].textContent,
            price = parseFloat(target.parentElement.children[1].children[0].textContent),
            color = target.parentElement.children[2].children[0].children[0].textContent,
            size = target.parentElement.children[2].children[1].children[0].textContent,
            quantity = target.parentElement.children[2].children[2].children[0],
            items = JSON.parse(localStorage.items);
        items.forEach((item, i) => {
           if(item.name === name && item.color === color && item.size === size){
               let currentSum = parseFloat(bagCount.textContent),
                    currentItemsNumber = itemNumber.textContent - 1;
               currentSum -= price;
               itemNumber.textContent = currentItemsNumber;
               bagSum.textContent = currentSum.toFixed(1);
               bagCount.textContent = currentSum.toFixed(1);
               localStorage.setItem('bagTotal', currentSum.toFixed(1));
               if(item.quantity > 1){
                   item.quantity -= 1;
                   quantity.textContent = item.quantity;
                   localStorage.setItem('items', JSON.stringify(items));
               }
               else{
                   items.splice(i, 1);
                   localStorage.setItem('items', JSON.stringify(items));
                   bagContainer.removeChild(target.parentElement.parentElement);
               }
           }
           if(items.length === 0) isEmpty.style.display = 'block';
        });
    }



    function handleClear(){
        let children = bagContainer.children;

        if(children.length === 0) return;

        for(let i = children.length - 1; i >= 0 ; i--){
            bagContainer.removeChild(children[i]);
        }
        localStorage.removeItem('items');
        localStorage.removeItem('bagTotal');
        itemNumber.textContent = 0;
        bagSum.textContent = 0;
        bagCount.textContent = '';
        isEmpty.style.display = 'block';
    }

    function handleBuy() {
        let children = bagContainer.children;

        if(children.length === 0) return;

        for(let i = children.length - 1; i >= 0 ; i--){
            bagContainer.removeChild(children[i]);
        }
        localStorage.removeItem('items');
        localStorage.removeItem('bagTotal');
        bagSum.textContent = 0;
        bagCount.textContent = '';
        itemNumber.textContent = 0;
        isEmpty.textContent = 'Thank you for your purchase!';
        isEmpty.style.color = '#f14a58';
        isEmpty.style.display = 'block';
    }

    buyButton.addEventListener('click', handleBuy);
    clearButton.addEventListener('click', handleClear);
    bagContainer.addEventListener('click', handleRemove);
    window.addEventListener('load', showItems);

}());