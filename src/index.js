import buildPage from './modules/page';
import '@fortawesome/fontawesome-free/js/all.js';
import { lists } from './modules/content';
import { completeTask, deleteTask, editTask } from './modules/taskFunctions';
import { buildNewList, addList } from './modules/listFunctions';

buildPage();

const newListContainer = document.querySelector('.new-list');
const listWrapper = document.querySelector('.list-wrapper');
const newTask = document.querySelector('.form-wrapper');
const list = document.querySelector('.list');
const addNewListBtn = document.querySelector('.add-new-list');
let currentList = '';


function mirrorToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(lists));
}

addNewListBtn.addEventListener('click', () => {
  newListContainer.classList.remove('show');
  listWrapper.classList.add('show');
});

newListContainer.addEventListener('submit', addList);
list.addEventListener('itemsUpdated', buildNewList);
list.addEventListener('click', function(e) {
  const action = e.target.parentElement.dataset.action;
  const parentAction = e.target.parentElement.parentElement.dataset.action;
  const taskId = parseInt(e.target.parentElement.value);
  const parentTaskId = parseInt(e.target.parentElement.parentElement.value);

  if (action === 'complete') {
    completeTask(taskId);
  }
  if (parentAction === 'delete') {
    deleteTask(parentTaskId);
  }
  if (action === 'edit') { 
    editTask(taskId);
  }
});
list.addEventListener("itemsUpdated", mirrorToLocalStorage);

export { currentList, list, newTask, listWrapper, newListContainer };