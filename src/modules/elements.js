function buildDiv(cls) {
  const div = document.createElement('div');
  if(`${cls}`) {
    div.classList.add(`${cls}`);
  }
  return div;
}

function buildHeader(content) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `${content}`;
  return h3;
}

function buildButton(content = '', icon = '', data = '', type = 'button') {
  const btn = document.createElement('button');
  btn.setAttribute('type', `${type}`);
  if(`${data}`) {
    btn.setAttribute('data-action', `${data}`);
  }
  btn.innerHTML = `${content} ${icon}`;
  return btn;
}

function buildFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `<p>&#169; 2021 Brannon Lee</p>`;
  return footer;
}

function buildForm() {
  const formDiv = buildDiv('form-wrapper');
  const form = document.createElement('form');
  const inputDivider = buildDiv('input-divider');
  const formControls = buildDiv('form-controls');

  const taskName = document.createElement('input');
  taskName.setAttribute('placeholder', 'Insert Task...');
  taskName.classList.add('new-task-name');

  const taskDue = document.createElement('input');
  taskDue.setAttribute('type', 'date');

  const taskPriority = document.createElement('select');
  taskPriority.setAttribute('name', 'priority');

  const priorityPlaceholder = document.createElement('option');
  const high = document.createElement('option');
  const medium = document.createElement('option');
  const low = document.createElement('option');

  priorityPlaceholder.setAttribute('disabled', true);
  priorityPlaceholder.setAttribute('selected', true);
  priorityPlaceholder.textContent = 'Select Priority';
  high.setAttribute('value', 'high');
  high.textContent = 'high';
  medium.setAttribute('value', 'medium');
  medium.textContent = 'medium';
  low.setAttribute('value', 'low');
  low.textContent = 'low';
  taskPriority.appendChild(priorityPlaceholder);
  taskPriority.appendChild(low);
  taskPriority.appendChild(medium);
  taskPriority.appendChild(high);

  form.appendChild(taskName);
  inputDivider.appendChild(taskDue);
  inputDivider.appendChild(taskPriority);

  const cancelBtn = buildButton('', '<i class="fas fa-ban"></i>', 'cancel', '');
  const saveBtn = buildButton('', '<i class="far fa-check-circle"></i>', 'save', '');

  formControls.appendChild(saveBtn);
  formControls.appendChild(cancelBtn);

  form.appendChild(inputDivider);
  form.appendChild(formControls);

  formDiv.classList.add('show');
  formDiv.appendChild(form);

  return formDiv;
}

function addNewList() {
  const div = buildDiv('new-list');

  const form = document.createElement('form');
  form.classList.add('new-list-form');
  const input = document.createElement('input');
  input.classList.add('new-list-title');
  input.setAttribute('placeholder', 'Enter A List Name, Buddy!');

  form.appendChild(input);
  form.appendChild(buildButton('', '<i class="far fa-check-circle"></i>', '', 'submit'));
  div.appendChild(form);

  return div;
}


export { buildDiv, buildHeader, buildButton, buildForm, buildFooter, addNewList };