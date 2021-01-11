function buildNav() {
  const nav = document.createElement('nav');

  const mainMenu = document.createElement('ul');
  mainMenu.classList.add('nav');

  mainMenu.innerHTML = `
      <li class="add-new-list"><a href="#">new list <i class="fas fa-folder-plus"></i></a></li>
      <li class="view-list"><a href="#">open list <i class="fas fa-folder-open"></i></a>
        <ul class="sub-nav"></ul>
      </li>
  `;

  nav.appendChild(mainMenu);
  
  return nav;
}

export default buildNav;
