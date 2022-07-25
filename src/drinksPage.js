const drinksPageSidebar = function() {
    const content = document.getElementById('content');
    
    // sidebar to show drinks
    const sidebar = document.createElement('div');
    content.appendChild(sidebar);
    sidebar.setAttribute('id', 'sidebar');

    const drinksDiv = document.createElement('div');
    sidebar.appendChild(drinksDiv);
    const drinks = document.createElement('h2');
    drinksDiv.appendChild(drinks);
    drinks.innerHTML = 'Drinks Menu';

    const cocktailsDiv = document.createElement('div');
    cocktailsDiv.setAttribute('id', 'cocktailsDiv');
    sidebar.appendChild(cocktailsDiv);
    const cocktails = document.createElement('h2');
    cocktailsDiv.appendChild(cocktails);
    cocktails.innerHTML = 'Cocktails';

    const smoothiesDiv = document.createElement('div');
    smoothiesDiv.setAttribute('id', 'smoothiesDiv');
    sidebar.appendChild(smoothiesDiv);
    const smoothies = document.createElement('h2');
    smoothiesDiv.appendChild(smoothies);
    smoothies.innerHTML = 'Smoothies';
}

const drinksPageReserve = function() {
    const content = document.getElementById('content');

    // main body to show drink items
    const reserve = document.createElement('div');
    content.appendChild(reserve);
    reserve.setAttribute('id', 'reserve');
}

const cocktailsMenu = function() {
    const cocktailsDiv = document.createElement('div');
    reserve.appendChild(cocktailsDiv);
    const cocktails = document.createElement('h2');
    cocktailsDiv.appendChild(cocktails);
    cocktails.innerHTML = 'Cocktails';

    const sangriaDiv = document.createElement('div');
    reserve.appendChild(sangriaDiv);
    const sangria = document.createElement('h4');
    sangriaDiv.appendChild(sangria);
    sangria.innerHTML = 'SANGRIA'
    const sangriaDes = document.createElement('p');
    sangriaDiv.appendChild(sangriaDes);
    sangriaDes.innerHTML = 'choice of white or red wine, orange juice, seasonal fruit';
    const sangriaCost = document.createElement('h6');
    sangriaDiv.appendChild(sangriaCost);
    sangriaCost.innerHTML = '68.00';

    const whiskeyDiv = document.createElement('div');
    reserve.appendChild(whiskeyDiv);
    const whiskey = document.createElement('h4');
    whiskeyDiv.appendChild(whiskey);
    whiskey.innerHTML = 'RASPBERRY WHISKEY MULE'
    const whiskeyDes = document.createElement('p');
    whiskeyDiv.appendChild(whiskeyDes);
    whiskeyDes.innerHTML = 'whiskey, ginger beer, lime juice, raspberries, mint';
    const whiskeyCost = document.createElement('h6');
    whiskeyDiv.appendChild(whiskeyCost);
    whiskeyCost.innerHTML = '72.00';   
}

const smoothiesMenu = function() {
    const smoothiesDiv = document.createElement('div');
    reserve.appendChild(smoothiesDiv);
    const smoothies = document.createElement('h2');
    smoothiesDiv.appendChild(smoothies);
    smoothies.innerHTML = 'Smoothies';

    const berryDiv = document.createElement('div');
    reserve.appendChild(berryDiv);
    const berry = document.createElement('h4');
    berryDiv.appendChild(berry);
    berry.innerHTML = 'BERRY BERRY BLUE'
    const berryDes = document.createElement('p');
    berryDiv.appendChild(berryDes);
    berryDes.innerHTML = 'protelicious original whey protein, blueberries, banana, honey, oat milk';
    const berryCost = document.createElement('h6');
    berryDiv.appendChild(berryCost);
    berryCost.innerHTML = '57.00';

    const vitaminsDiv = document.createElement('div');
    reserve.appendChild(vitaminsDiv);
    const vitamins = document.createElement('h4');
    vitaminsDiv.appendChild(vitamins);
    vitamins.innerHTML = 'VITAMIN SEA'
    const vitaminsDes = document.createElement('p');
    vitaminsDiv.appendChild(vitaminsDes);
    vitaminsDes.innerHTML = 'protelicious original whey protein, mango, pineapple, coconut water';
    const vitaminsCost = document.createElement('h6');
    vitaminsDiv.appendChild(vitaminsCost);
    vitaminsCost.innerHTML = '49.00';   
}

const drinksSidebar = function() {
    const cocktailsDiv = document.getElementById('cocktailsDiv');
    cocktailsDiv.addEventListener('click', function() {
        const content = document.getElementById('content');
        const reserve = document.getElementById('reserve');
        content.removeChild(reserve);
        drinksPageReserve();
        cocktailsMenu();
    })

    const smoothiesDiv = document.getElementById('smoothiesDiv');
    smoothiesDiv.addEventListener('click', function() {
        const content = document.getElementById('content');
        const reserve = document.getElementById('reserve');
        content.removeChild(reserve);
        drinksPageReserve();
        smoothiesMenu();
    })
}

export { drinksPageSidebar, drinksPageReserve, cocktailsMenu, drinksSidebar };