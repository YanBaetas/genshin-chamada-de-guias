export default function talentsNav(menu, content, title) {
  
  const talentsMenu = document.querySelectorAll(menu);
  const talentsContent = document.querySelectorAll(content);
  const xiaoTitle = document.querySelector(title);
  const activeClass = 'active';

  function activeTalent(index) {
    talentsMenu.forEach((talentMenu) => {
      talentMenu.classList.remove(activeClass);
    });
    talentsContent.forEach((talentContent) => {
      talentContent.classList.remove(activeClass);
    });
    talentsMenu[index].classList.add(activeClass);
    talentsContent[index].classList.add(activeClass);

    if(xiaoTitle) {
      xiaoTitle.dataset.animation = 'none';
      setTimeout(() => {
        if(index === talentsContent.length - 1) {
          xiaoTitle.dataset.animation = 'fadeOutIn';
          setTimeout(() =>{xiaoTitle.innerHTML = 'Conquistador de Demônios'}, 200);
          
        } else if(xiaoTitle.innerHTML === 'Conquistador de Demônios') {
          xiaoTitle.dataset.animation = 'fadeOutIn';
          setTimeout(() => {xiaoTitle.innerHTML = 'Guardião Yaksha'}, 200);
        }
      }, 100)
    }
  }

  function addTalentEvent() {
    talentsMenu.forEach((talentMenu, index) => {
      talentMenu.addEventListener('click', () => activeTalent(index));
    });
  }

  if(talentsMenu.length && talentsContent.length) {
    activeTalent(0);
    addTalentEvent();
  }
}
