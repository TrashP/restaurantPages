const foodMenuPageSidebar = function() {
    const content = document.getElementById('content');
    
    // sidebar to show food items
    const sidebar = document.createElement('div');
    content.appendChild(sidebar);
    sidebar.setAttribute('id', 'sidebar');

    const foodItemsDiv = document.createElement('div');
    sidebar.appendChild(foodItemsDiv);
    const foodItems = document.createElement('h2');
    foodItemsDiv.appendChild(foodItems);
    foodItems.innerHTML = 'Food Items';

    const burgersDiv = document.createElement('div');
    burgersDiv.setAttribute('id', 'burgersDiv');
    sidebar.appendChild(burgersDiv);
    const burgers = document.createElement('h2');
    burgersDiv.appendChild(burgers);
    burgers.innerHTML = 'Burgers';

    const pizzaDiv = document.createElement('div');
    pizzaDiv.setAttribute('id', 'pizzaDiv');
    sidebar.appendChild(pizzaDiv);
    const pizza = document.createElement('h2');
    pizzaDiv.appendChild(pizza);
    pizza.innerHTML = 'Pizza';

    const pastaDiv = document.createElement('div');
    pastaDiv.setAttribute('id', 'pastaDiv');
    sidebar.appendChild(pastaDiv);
    const pasta = document.createElement('h2');
    pastaDiv.appendChild(pasta);
    pasta.innerHTML = 'Pasta';
}

const foodMenuPageReserve = function() {
    const content = document.getElementById('content');

    // main body to show food menu items
    const reserve = document.createElement('div');
    content.appendChild(reserve);
    reserve.setAttribute('id', 'reserve');
}

const burgersMenu = function() {
    const burgersDiv = document.createElement('div');
    reserve.appendChild(burgersDiv);
    const burgers = document.createElement('h2');
    burgersDiv.appendChild(burgers);
    burgers.innerHTML = 'Burgers';

    const beefDiv = document.createElement('div');
    reserve.appendChild(beefDiv);
    const beef = document.createElement('h4');
    beefDiv.appendChild(beef);
    beef.innerHTML = 'BEEF BURGER'
    const beefDes = document.createElement('p');
    beefDiv.appendChild(beefDes);
    beefDes.innerHTML = 'beef patty, bacon, onion rings, lettuce, pickles, swiss cheese, tomatoes, french fries';
    const beefCost = document.createElement('h6');
    beefDiv.appendChild(beefCost);
    beefCost.innerHTML = '138.00';

    const chickenDiv = document.createElement('div');
    reserve.appendChild(chickenDiv);
    const chicken = document.createElement('h4');
    chickenDiv.appendChild(chicken);
    chicken.innerHTML = 'CHICKEN BURGER'
    const chickenDes = document.createElement('p');
    chickenDiv.appendChild(chickenDes);
    chickenDes.innerHTML = 'fried chicken patty, lettuce, pickles, tartar sauce, tomatoes, jalapeno, french fries';
    const chickenCost = document.createElement('h6');
    chickenDiv.appendChild(chickenCost);
    chickenCost.innerHTML = '148.00';

    const fishDiv = document.createElement('div');
    reserve.appendChild(fishDiv);
    const fish = document.createElement('h4');
    fishDiv.appendChild(fish);
    fish.innerHTML = 'FISH BURGER'
    const fishDes = document.createElement('p');
    fishDiv.appendChild(fishDes);
    fishDes.innerHTML = 'beer battered barramundi, cucumber, tartar sauce, french fries';
    const fishCost = document.createElement('h6');
    fishDiv.appendChild(fishCost);
    fishCost.innerHTML = '168.00';    
}

const pizzaMenu = function() {
    const pizzaDiv = document.createElement('div');
    reserve.appendChild(pizzaDiv);
    const pizza = document.createElement('h2');
    pizzaDiv.appendChild(pizza);
    pizza.innerHTML = 'Pizza';

    const avocadoDiv = document.createElement('div');
    reserve.appendChild(avocadoDiv);
    const avocado = document.createElement('h4');
    avocadoDiv.appendChild(avocado);
    avocado.innerHTML = 'AVOCADO TARTINE';
    const avocadoDes = document.createElement('p');
    avocadoDiv.appendChild(avocadoDes);
    avocadoDes.innerHTML = 'avocado, homemade tomato salsa, dark malt flaxseed sourdough';
    const avocadoCost = document.createElement('h6');
    avocadoDiv.appendChild(avocadoCost);
    avocadoCost.innerHTML = '88.00';

    const hamDiv = document.createElement('div');
    reserve.appendChild(hamDiv);
    const ham = document.createElement('h4');
    hamDiv.appendChild(ham);
    ham.innerHTML = 'SERRANO HAM PIZZETTE';
    const hamDes = document.createElement('p');
    hamDiv.appendChild(hamDes);
    hamDes.innerHTML = 'serrano ham, mozzarella cheese, rocket, tomato sauce';
    const hamCost = document.createElement('h6');
    hamDiv.appendChild(hamCost);
    hamCost.innerHTML = '126.00';

    const salmonDiv = document.createElement('div');
    reserve.appendChild(salmonDiv);
    const salmon = document.createElement('h4');
    salmonDiv.appendChild(salmon);
    salmon.innerHTML = 'SMOKED SALMON TARTINE';
    const salmonDes = document.createElement('p');
    salmonDiv.appendChild(salmonDes);
    salmonDes.innerHTML = 'smoked salmon, cucumber, egg, cream cheese, parsley, sourdough';
    const salmonCost = document.createElement('h6');
    salmonDiv.appendChild(salmonCost);
    salmonCost.innerHTML = '146.00';
}

const pastaMenu = function() {
    const pastaDiv = document.createElement('div');
    reserve.appendChild(pastaDiv);
    const pasta = document.createElement('h2');
    pastaDiv.appendChild(pasta);
    pasta.innerHTML = 'Pasta';

    const linDiv = document.createElement('div');
    reserve.appendChild(linDiv);
    const lin = document.createElement('h4');
    linDiv.appendChild(lin);
    lin.innerHTML = 'LINGUINE ALLE VONGOLE';
    const linDes = document.createElement('p');
    linDiv.appendChild(linDes);
    linDes.innerHTML = 'clams, linguine, white wine, coriander, parsley, chili';
    const linCost = document.createElement('h6');
    linDiv.appendChild(linCost);
    linCost.innerHTML = '148.00';

    const spaDiv = document.createElement('div');
    reserve.appendChild(spaDiv);
    const spa = document.createElement('h4');
    spaDiv.appendChild(spa);
    spa.innerHTML = 'SPAGHETTI BOLOGNESE';
    const spaDes = document.createElement('p');
    spaDiv.appendChild(spaDes);
    spaDes.innerHTML = 'ground beef, ground pork, spaghetti, tomato sauce, parmesan';
    const spaCost = document.createElement('h6');
    spaDiv.appendChild(spaCost);
    spaCost.innerHTML = '116.00';

    const risDiv = document.createElement('div');
    reserve.appendChild(risDiv);
    const ris = document.createElement('h4');
    risDiv.appendChild(ris);
    ris.innerHTML = 'LOBSTER SAUCE RISOTTO';
    const risDes = document.createElement('p');
    risDiv.appendChild(risDes);
    risDes.innerHTML = 'shrimp, red bell pepper, arborio rice, white wine, lobster sauce, parmesan';
    const risCost = document.createElement('h6');
    risDiv.appendChild(risCost);
    risCost.innerHTML = '110.00';
}

const foodSidebar = function() {
    const burgersDiv = document.getElementById('burgersDiv');
    burgersDiv.addEventListener('click', function() {
        const content = document.getElementById('content');
        const reserve = document.getElementById('reserve');
        content.removeChild(reserve);
        foodMenuPageReserve();
        burgersMenu();
    })

    const pizzaDiv = document.getElementById('pizzaDiv');
    pizzaDiv.addEventListener('click', function() {
        const content = document.getElementById('content');
        const reserve = document.getElementById('reserve');
        content.removeChild(reserve);
        foodMenuPageReserve();
        pizzaMenu();
    })

    const pastaDiv = document.getElementById('pastaDiv');
    pastaDiv.addEventListener('click', function() {
        const content = document.getElementById('content');
        const reserve = document.getElementById('reserve');
        content.removeChild(reserve);
        foodMenuPageReserve();
        pastaMenu();
    })
}

export { foodMenuPageSidebar, foodMenuPageReserve, burgersMenu, foodSidebar };