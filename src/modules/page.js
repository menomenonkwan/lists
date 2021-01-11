import menuLists from './checkLists';
import buildMenu from './menu';
import buildMain from './section';
import { lists } from './content';

function restoreFromLocalStorage() {
  const taskItems = JSON.parse(localStorage.getItem("tasks"));
  
  if(taskItems) { 
    lists = [];
    lists.push(...taskItems);
  }
  return;
}

function buildPage() {
  const page = document.querySelector('div#content');
  page.appendChild(buildMenu());
  page.appendChild(buildMain());
  
  restoreFromLocalStorage();
  menuLists(); 
}

export default buildPage;