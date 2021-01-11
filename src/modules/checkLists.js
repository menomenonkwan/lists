import { lists } from './content';
import { findCurrentList } from './listFunctions';

function addNewMenuLink(e) {
  const createdListsBtns = document.querySelectorAll('.sub-nav li');
  
  createdListsBtns.forEach(btn => btn.addEventListener('click', findCurrentList));
}

function menuLists() {
  let listHTML;
  if(!lists.length) { 
    listHTML = ''; 
  } else {
    listHTML = lists.map(listName => `
    <li data-id="${listName.id}">${listName.name}</li>
  `).join('');
  }

  const subNav = document.querySelector('.sub-nav');
  const listHTML = lists.map(listName => `
    <li data-id="${listName.id}">${listName.name}</li>
  `).join('');
  subNav.innerHTML = listHTML;

  addNewMenuLink();
}

export default menuLists;
