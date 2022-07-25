import './styles/styles.css';
import { initialMainPage, changeCity, mainPageHeader, mainPageFooter } from './mainPage.js';
import { foodMenuPageSidebar, foodMenuPageReserve, burgersMenu, foodSidebar } from './foodMenuPage.js';
import { drinksPageSidebar, drinksPageReserve, cocktailsMenu, drinksSidebar } from './drinksPage.js';
import { dessertsPageSidebar, dessertPageReserve, dessertMenu } from './dessertPage.js';

mainPageHeader(); 
mainPageFooter();
initialMainPage();
changeCity();

const logoDiv = document.getElementById('logoDiv');
logoDiv.addEventListener('click', function() {
    const content = document.getElementById('content');
    const sidebar = document.getElementById('sidebar');
    const reserve = document.getElementById('reserve');

    content.removeChild(sidebar);
    content.removeChild(reserve);
    initialMainPage();
    changeCity();
})

const foodDiv = document.getElementById('foodDiv');
foodDiv.addEventListener('click', function() {
    const content = document.getElementById('content');
    const sidebar = document.getElementById('sidebar');
    const reserve = document.getElementById('reserve');

    content.removeChild(sidebar);
    content.removeChild(reserve);
    foodMenuPageSidebar();
    foodMenuPageReserve();
    burgersMenu();
    foodSidebar();
})

const drinksDiv = document.getElementById('drinksDiv');
drinksDiv.addEventListener('click', function() {
    const content = document.getElementById('content');
    const sidebar = document.getElementById('sidebar');
    const reserve = document.getElementById('reserve');

    content.removeChild(sidebar);
    content.removeChild(reserve);
    drinksPageSidebar();
    drinksPageReserve();
    cocktailsMenu();
    drinksSidebar();
})

const dessertDiv = document.getElementById('dessertDiv');
dessertDiv.addEventListener('click', function() {
    const content = document.getElementById('content');
    const sidebar = document.getElementById('sidebar');
    const reserve = document.getElementById('reserve');

    content.removeChild(sidebar);
    content.removeChild(reserve);
    dessertsPageSidebar();
    dessertPageReserve();
    dessertMenu();
})
