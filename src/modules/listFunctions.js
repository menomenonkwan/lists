import { currentList, list, listWrapper, newListContainer, newTask } from '../index';
import { buildNewTask } from './taskFunctions';
import { findDateDistance, sortDates } from './getDate';
import { lists } from './content';
import menuLists from './checkLists';

function addList(e) {
  e.preventDefault();
  const form = e.target;
  const newListTitle = form[0].value;
  
  if(!newListTitle) { return; }
  
  const newListName = e.target[0].value;
  const newList = new List(newListName);
  lists.push(newList);

  menuLists();

  form.reset();

  newListContainer.classList.toggle('show');
  listWrapper.classList.toggle('show');

  currentList = newList;

  buildNewList();
}

function listControls(e) {
  const selection = e.target.dataset.action;
  if(selection === 'add') {
    newTask.classList.toggle('show');
    buildNewTask();
  }
  if(selection === 'delete') {
    lists = lists.filter(list => list.id !== currentList.id);
        
    newListContainer.classList.toggle('show');
    listWrapper.classList.toggle('show');
    menuLists();
  }
  if(selection === 'sortPriority') {
    currentList.list.sort(function (a, b) {
      return b.value - a.value;
    });
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
  if(selection === 'sortDate') {
    sortDates(currentList.list);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
}

function findCurrentList(e) {
  const selectedList = parseInt(e.target.dataset.id);
  currentList = lists.find(list => list.id === selectedList);

  newListContainer.classList.add('show');
  listWrapper.classList.remove('show');
  newTask.classList.add('show');

  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function createListHTML() {
  const listHTML = currentList.list.map(task => `
  <li ${task.completed ? 'style="background:rgba(0,0,0,0.5);"' : ''}>
    <button value="${task.id}" data-action="complete">${task.completed ? '<i class="far fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}</button>
    <div class="task-info">
      <p ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.errand}</p>
      <div class="task-details">
        <h6 class="urgency ${task.priority}">${task.priority}</h6>
        <h6 class="task-due-date">${task.due} ${findDateDistance(`${task.due}`)}</h6>
        </div>
        </div>
        
        <button value="${task.id}" data-action="edit"><i class="fas fa-edit"></i></button>         
        <button value="${task.id}" data-action="delete"><i class="fas fa-trash"></i></button>     
        </li>`).join('');
  return listHTML;
}

function buildNewList() {

  const listTitle = document.querySelector('.list-wrapper h3');
  const controls = document.querySelectorAll('.controls button');

  listTitle.textContent = currentList.name;
  
  if(currentList.list) {
    const HTML = createListHTML();
    list.innerHTML = HTML;
  }

  controls.forEach(btn => btn.addEventListener('click', listControls));
}

export { buildNewList, findCurrentList, addList };