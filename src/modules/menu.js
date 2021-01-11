import { getToday } from './getDate';
import { buildHeader } from './elements';
import buildNav from './nav';

function buildMenu() {
  const menu = document.createElement('div');
  menu.id = 'menu';

  menu.appendChild(buildHeader('Personal Planner'));
  menu.appendChild(buildNav());
  menu.appendChild(getToday());

  return menu;
}

export default buildMenu;