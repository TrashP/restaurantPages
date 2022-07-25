const mainPageHeader = function() {
    const content = document.getElementById('content');

    // header to access other tabs
    const header = document.createElement('div');
    content.appendChild(header);
    header.setAttribute('id', 'header');

    const logoDiv = document.createElement('div');
    logoDiv.setAttribute('id', 'logoDiv');
    header.appendChild(logoDiv);
    const logo = document.createElement('h1');
    logoDiv.appendChild(logo);
    logo.innerHTML = 'The Cat Restaurant';

    const foodDiv = document.createElement('div');
    foodDiv.setAttribute('id', 'foodDiv');
    header.appendChild(foodDiv);
    const food = document.createElement('h3');
    foodDiv.appendChild(food);
    food.innerHTML = 'Food Menu';

    const drinksDiv = document.createElement('div');
    drinksDiv.setAttribute('id', 'drinksDiv');
    header.appendChild(drinksDiv);
    const drinks = document.createElement('h3');
    drinksDiv.appendChild(drinks);
    drinks.innerHTML = 'Drinks';

    const dessertDiv = document.createElement('div');
    dessertDiv.setAttribute('id', 'dessertDiv');
    header.appendChild(dessertDiv);
    const dessert = document.createElement('h3');
    dessertDiv.appendChild(dessert);
    dessert.innerHTML = 'Dessert';
}

const mainPageSidebar = function() {
    const content = document.getElementById('content');
    
    // sidebar to show branches
    const sidebar = document.createElement('div');
    content.appendChild(sidebar);
    sidebar.setAttribute('id', 'sidebar');

    const branchesDiv = document.createElement('div');
    sidebar.appendChild(branchesDiv);
    const branches = document.createElement('h2');
    branchesDiv.appendChild(branches);
    branches.innerHTML = 'Branches';

    const hongkongDiv = document.createElement('div');
    sidebar.appendChild(hongkongDiv);
    const hongkong = document.createElement('h2');
    hongkongDiv.appendChild(hongkong);
    hongkong.innerHTML = 'Hong Kong';

    const newyorkDiv = document.createElement('div');
    sidebar.appendChild(newyorkDiv);
    const newyork = document.createElement('h2');
    newyorkDiv.appendChild(newyork);
    newyork.innerHTML = 'New York';

    const londonDiv = document.createElement('div');
    sidebar.appendChild(londonDiv);
    const london = document.createElement('h2');
    londonDiv.appendChild(london);
    london.innerHTML = 'London';

    const parisDiv = document.createElement('div');
    sidebar.appendChild(parisDiv);
    const paris = document.createElement('h2');
    parisDiv.appendChild(paris);
    paris.innerHTML = 'Paris';

    const tokyoDiv = document.createElement('div');
    sidebar.appendChild(tokyoDiv);
    const tokyo = document.createElement('h2');
    tokyoDiv.appendChild(tokyo);
    tokyo.innerHTML = 'Tokyo';
}

const mainPageReserve = function() {
    const content = document.getElementById('content');

    // main body to make reservations
    const reserve = document.createElement('div');
    content.appendChild(reserve);
    reserve.setAttribute('id', 'reserve');

    const resDiv = document.createElement('div');
    reserve.appendChild(resDiv);
    const res = document.createElement('h2');
    resDiv.appendChild(res);
    res.innerHTML = 'Make a Reservation!';

    const form = document.createElement('form');
    reserve.appendChild(form);

    const nameLabel = document.createElement('label');
    form.appendChild(nameLabel);
    nameLabel.innerHTML = 'Name';
    nameLabel.setAttribute('for', 'name');
    const nameInput = document.createElement('input');
    nameLabel.appendChild(nameInput);
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('type', 'text');

    const emailLabel = document.createElement('label');
    form.appendChild(emailLabel);
    emailLabel.innerHTML = 'Email';
    emailLabel.setAttribute('for', 'email');
    const emailInput = document.createElement('input');
    emailLabel.appendChild(emailInput);
    emailInput.setAttribute('id', 'email')
    emailInput.setAttribute('type', 'email');

    const phoneLabel = document.createElement('label');
    form.appendChild(phoneLabel);
    phoneLabel.innerHTML = 'Phone Number'
    phoneLabel.setAttribute('for', 'phone');
    const phoneInput = document.createElement('input');
    phoneLabel.appendChild(phoneInput);
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('type', 'number');

    const guestLabel = document.createElement('label');
    form.appendChild(guestLabel);
    guestLabel.innerHTML = 'Number of Guests';
    guestLabel.setAttribute('for', 'guest');
    const guestInput = document.createElement('input');
    guestLabel.appendChild(guestInput);
    guestInput.setAttribute('id', 'guest');
    guestInput.setAttribute('type', 'number');

    const dateLabel = document.createElement('label');
    form.appendChild(dateLabel);
    dateLabel.innerHTML = 'Date';
    dateLabel.setAttribute('for', 'date');
    const dateInput = document.createElement('input');
    dateLabel.appendChild(dateInput);
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('type', 'date');

    const timeLabel = document.createElement('label');
    form.appendChild(timeLabel);
    timeLabel.innerHTML = 'Time';
    timeLabel.setAttribute('for', 'time');
    const timeInput = document.createElement('input');
    timeLabel.appendChild(timeInput);
    timeInput.setAttribute('id', 'time');
    timeInput.setAttribute('type', 'time');

    const submit = document.createElement('input');
    form.appendChild(submit);
    submit.setAttribute('id', 'submit');
    submit.setAttribute('type', 'submit');
}

const mainPageFooter = function() {
    const content = document.getElementById('content');

    // footer for contact details
    const footer = document.createElement('div');
    content.appendChild(footer);
    footer.setAttribute('id', 'footer');

    const contactDiv = document.createElement('div');
    footer.appendChild(contactDiv);
    const contact = document.createElement('h3');
    contactDiv.appendChild(contact);
    contact.innerHTML = 'Contact us';

    const phone = document.createElement('p');
    phone.setAttribute('id', 'phoneNo');
    contactDiv.appendChild(phone);
    phone.innerHTML = 'Phone Number: +852 34676754';
    const email = document.createElement('p');
    email.setAttribute('id', 'emailId');
    contactDiv.appendChild(email);
    email.innerHTML = 'Email: meow@cathk.com';

    const addressDiv = document.createElement('div');
    footer.appendChild(addressDiv);
    const address = document.createElement('h3');
    addressDiv.appendChild(address);
    address.innerHTML = 'Address';
    const addLine1 = document.createElement('p');
    addLine1.setAttribute('id', 'addLine1');
    addressDiv.appendChild(addLine1);
    addLine1.innerHTML = '123 Awesome Street, RocknRoll Bay,';
    const addLine2 = document.createElement('p');
    addLine2.setAttribute('id', 'addLine2');
    addressDiv.appendChild(addLine2);
    addLine2.innerHTML = 'Kowloon, Hong Kong';

    const extras = document.createElement('p');
    extras.innerHTML = 'ABOUT  |  EVENTS & PROMOTIONS  |  PRIVACY POLICY  |  LOYALTY CARD  |  CAREERS';
    footer.appendChild(extras);
}

const initialMainPage = function() {
    mainPageSidebar(); 
    mainPageReserve(); 
}

const changeCity = function() {
    const sidebar = document.getElementById('sidebar');
    const city = sidebar.childNodes;
    const content = document.getElementById('content');
    content.setAttribute('class', 'hongkong');
    const phone = document.getElementById('phoneNo');
    const email = document.getElementById('emailId');
    const addLine1 = document.getElementById('addLine1');
    const addLine2 = document.getElementById('addLine2');
    
    city[1].addEventListener('click', function() {
        content.setAttribute('class', 'hongkong');
        phone.innerHTML = '+852 34676754';
        email.innerHTML = 'meow@cathk.com';
        addLine1.innerHTML = '123 Awesome Street, RocknRoll Bay,';
        addLine2.innerHTML = 'Kowloon, Hong Kong';
    })
    city[2].addEventListener('click', function() {
        content.setAttribute('class', 'newyork');
        phone.innerHTML = 'Phone Number: +97 78659706';
        email.innerHTML = 'Email: purr@catnyc.com';
        addLine1.innerHTML = '123 Charming Street, Scritches Avenue,';
        addLine2.innerHTML = 'Manhattan, New York';
    })
    city[3].addEventListener('click', function() {
        content.setAttribute('class', 'london');
        phone.innerHTML = 'Phone Number: +567 78654398';
        email.innerHTML = 'Email: puss@catlondon.com';
        addLine1.innerHTML = '123 Bellyrubs Street, Zoomies Avenue,';
        addLine2.innerHTML = 'Central, London';
    })
    city[4].addEventListener('click', function() {
        content.setAttribute('class', 'paris');
        phone.innerHTML = 'Phone Number: +34 34767566';
        email.innerHTML = 'Email: calico@catparis.com';
        addLine1.innerHTML = '123 Politecats Street, TuckedIn Avenue,';
        addLine2.innerHTML = 'Paris';
    })
    city[5].addEventListener('click', function() {
        content.setAttribute('class', 'tokyo');
        phone.innerHTML = 'Phone Number: +678 56743421';
        email.innerHTML = 'Email: orange@cattokyo.com';
        addLine1.innerHTML = '123 Grumpy Street, Smol Avenue,';
        addLine2.innerHTML = 'Tokyo';
    })
}

export { initialMainPage, changeCity, mainPageHeader, mainPageFooter };