
import { buildHeader, buildButton, buildForm, buildDiv } from './elements';

function buildList() {
  const listWrapper = buildDiv('list-wrapper');
  const listTitle = buildHeader('List Title');
  listTitle.textContent = 'list title';
  listWrapper.appendChild(listTitle);

  const controls = buildDiv('controls');

  const addBtn = buildButton('Add Task', '', 'add', 'button');
  const sortDateBtn = buildButton('Sort Date', '', 'sortDate', 'button'); 
  const sortPriortyBtn = buildButton('Sort Priority', '', 'sortPriority', 'button'); 
  const delBtn = buildButton('Delete List', '', 'delete', 'button'); 
  controls.appendChild(addBtn);
  controls.appendChild(sortDateBtn);
  controls.appendChild(sortPriortyBtn);
  controls.appendChild(delBtn);

  listWrapper.appendChild(controls);
  const form = buildForm();
  listWrapper.appendChild(form);

  const ul = document.createElement('ul');
  ul.classList.add('list');

  listWrapper.appendChild(ul);
 
  return listWrapper;
}

export default buildList;
