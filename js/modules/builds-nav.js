export default function buildsNav(menu, content) {
  const buildsMenu = document.querySelectorAll(menu);
  const buildsContent = document.querySelectorAll(content);
  const activeClass = 'active';

  function activeBuild(index) {
    buildsMenu.forEach((buildMenu) => {
      buildMenu.classList.remove(activeClass);
    });
    buildsContent.forEach((buildContent) => {
      buildContent.classList.remove(activeClass);
    });
    buildsMenu[index].classList.add(activeClass);
    buildsContent[index].classList.add(activeClass);
  }

  function addBuildEvent() {
    buildsMenu.forEach((buildMenu, index) => {
      buildMenu.addEventListener('click', () => activeBuild(index));
    });
  }

  if(buildsMenu.length && buildsContent.length) {
    activeBuild(0);
    addBuildEvent();
  }
}
