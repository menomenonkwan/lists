import buildList from './list';
import { buildFooter, addNewList } from './elements';

function buildMain() {
  const main = document.createElement('div');
  main.id = 'container';
  
  const list = buildList();
  list.classList.add('show');

  main.appendChild(addNewList());
  main.appendChild(list);
  main.appendChild(buildFooter());

  return main;
}

export default buildMain;