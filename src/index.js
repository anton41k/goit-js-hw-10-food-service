import dataBaseFood from './menu.json';
import eventsTemplaters from './templaters/food.hbs';
import './sass/main.scss';


const manuFoodUl = document.querySelector('ul.js-menu');
manuFoodUl.innerHTML = eventsTemplaters(dataBaseFood);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const checkboxEl = document.querySelector('#theme-switch-toggle');

onUpdateTheme()

checkboxEl.addEventListener('change', onChangeCheckBox);

function onUpdateTheme() {
    const saveCheckBox = localStorage.getItem('isLightTheme');
    if (saveCheckBox === 'true') {
        checkboxEl.checked = true
        onChangeTheme('LIGHT', 'DARK') 
    }
    else if (saveCheckBox === 'false' || !saveCheckBox){
        checkboxEl.checked = false
        onChangeTheme('DARK', 'LIGHT') 
    }
}


function onChangeCheckBox(ev) {
    const isChecked = ev.target.checked;
    if (isChecked) {
        onChangeTheme('LIGHT', 'DARK', isChecked);
    }
    else {
        onChangeTheme('DARK', 'LIGHT', isChecked);
    }
}

function onChangeTheme(removeCl, addCl, isLightTheme) {
    body.classList.add(Theme[addCl]);
    body.classList.remove(Theme[removeCl]);
    if (isLightTheme != undefined) {
        localStorage.setItem('isLightTheme', isLightTheme);
    }
}
