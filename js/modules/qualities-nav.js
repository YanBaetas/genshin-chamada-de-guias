export default function talentsNav(menu, content) {
  const qualitiesMenu = document.querySelectorAll(menu);
  const qualitiesContent = document.querySelectorAll(content);
  const activeClass = 'active';

  function activeTalent(index) {
    qualitiesMenu.forEach((qualityMenu) => {
      qualityMenu.classList.remove(activeClass);
    });
    qualitiesContent.forEach((qualityContent) => {
      qualityContent.classList.remove(activeClass);
    });
    qualitiesMenu[index].classList.add(activeClass);
    qualitiesContent[index].classList.add(activeClass);
  }

  function addTalentEvent() {
    qualitiesMenu.forEach((qualityMenu, index) => {
      qualityMenu.addEventListener('click', () => activeTalent(index));
    });
  }

  if(qualitiesMenu.length && qualitiesContent.length) {
    activeTalent(0);
    addTalentEvent();
  }
}
