const dessertsPageSidebar = function() {
    const content = document.getElementById('content');
    
    // sidebar to show desserts
    const sidebar = document.createElement('div');
    content.appendChild(sidebar);
    sidebar.setAttribute('id', 'sidebar');

    const dessertDiv = document.createElement('div');
    sidebar.appendChild(dessertDiv);
    const dessert = document.createElement('h2');
    dessertDiv.appendChild(dessert);
    dessert.innerHTML = 'Dessert Menu';

    const cocktailsDiv = document.createElement('div');
    cocktailsDiv.setAttribute('id', 'cocktailsDiv');
    sidebar.appendChild(cocktailsDiv);
    const cocktails = document.createElement('h2');
    cocktailsDiv.appendChild(cocktails);
    cocktails.innerHTML = 'Cocktails';
}

const dessertPageReserve = function() {
    const content = document.getElementById('content');

    // main body to show dessert items
    const reserve = document.createElement('div');
    content.appendChild(reserve);
    reserve.setAttribute('id', 'reserve');
}

const dessertMenu = function() {
    const dessertDiv = document.createElement('div');
    reserve.appendChild(dessertDiv);
    const dessert = document.createElement('h2');
    dessertDiv.appendChild(dessert);
    dessert.innerHTML = 'Dessert Items';

    const fruitsDiv = document.createElement('div');
    reserve.appendChild(fruitsDiv);
    const fruits = document.createElement('h4');
    fruitsDiv.appendChild(fruits);
    fruits.innerHTML = 'FRUITS'
    const fruitsDes = document.createElement('p');
    fruitsDiv.appendChild(fruitsDes);
    fruitsDes.innerHTML = 'chia seeds, milk, seasonal fruits';
    const fruitsCost = document.createElement('h6');
    fruitsDiv.appendChild(fruitsCost);
    fruitsCost.innerHTML = '54.00';

    const tiramisuDiv = document.createElement('div');
    reserve.appendChild(tiramisuDiv);
    const tiramisu = document.createElement('h4');
    tiramisuDiv.appendChild(tiramisu);
    tiramisu.innerHTML = 'TIRAMISU'
    const tiramisuDes = document.createElement('p');
    tiramisuDiv.appendChild(tiramisuDes);
    tiramisuDes.innerHTML = 'ladyfingers, coffee, mascarpone, chocolate';
    const tiramisuCost = document.createElement('h6');
    tiramisuDiv.appendChild(tiramisuCost);
    tiramisuCost.innerHTML = '73.00';   

    const puddingDiv = document.createElement('div');
    reserve.appendChild(puddingDiv);
    const pudding = document.createElement('h4');
    puddingDiv.appendChild(pudding);
    pudding.innerHTML = 'CAFE GOURMAND'
    const puddingDes = document.createElement('p');
    puddingDiv.appendChild(puddingDes);
    puddingDes.innerHTML = 'macaron, brownie, vanilla ice cream, espresso';
    const puddingCost = document.createElement('h6');
    puddingDiv.appendChild(puddingCost);
    puddingCost.innerHTML = '42.00';
}

export { dessertsPageSidebar, dessertPageReserve, dessertMenu };