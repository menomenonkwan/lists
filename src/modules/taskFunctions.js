import { currentList, list, newTask } from '../index';
import { Task } from './constructors';

function buildNewTask() {
  const formBtns = document.querySelectorAll('.form-controls button');
  formBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    const selection = e.target.parentElement.dataset.action;
    const taskDeets = newTask.firstElementChild;
    let newTaskName = taskDeets[0].value;
    let newDueDate = taskDeets[1].value;
    let newPriority = taskDeets[2].value;
    
    if(selection === 'cancel') {
      taskDeets.reset();
      taskDeets[2].value = '';
      newTask.classList.toggle('show');
    }
    if(selection === 'save') {
      if(!newTaskName || !newDueDate || !newPriority) { return; }

      const newTaskInfo = new Task(newTaskName, newDueDate, newPriority);
      currentList.list.push(newTaskInfo);
      taskDeets.reset();
      taskDeets[2].value = '';
      newTask.classList.toggle('show');

      list.dispatchEvent(new CustomEvent("itemsUpdated"));
    }
  }));
}

function completeTask(id) {
  const finishedTask = currentList.list.find(task => task.id === id);
  finishedTask.completed =!finishedTask.completed;

  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function deleteTask(id) {
  currentList.list = currentList.list.filter(task => task.id !== id);

  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function editTask(id) {
  const editTask = currentList.list.find(task => task.id === id);
  deleteTask(id);

  newTask.classList.toggle('show');
  const taskDeets = newTask.firstElementChild;
  taskDeets[0].value = `${editTask.errand}`;
  taskDeets[1].value = `${editTask.due}`;
  taskDeets[2].value = `${editTask.priority}`;

  buildNewTask();
}

export { completeTask, deleteTask, editTask, buildNewTask };