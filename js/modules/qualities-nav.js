export default class TalentsNav {
  constructor(menu, content) {
    this.qualitiesMenu = document.querySelectorAll(menu);
    this.qualitiesContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  activeTalent(index) {
    this.qualitiesMenu.forEach((qualityMenu) => {
      qualityMenu.classList.remove(this.activeClass);
    });
    this.qualitiesContent.forEach((qualityContent) => {
      qualityContent.classList.remove(this.activeClass);
    });
    this.qualitiesMenu[index].classList.add(this.activeClass);
    this.qualitiesContent[index].classList.add(this.activeClass);
  }

  addTalentEvent() {
    this.qualitiesMenu.forEach((qualityMenu, index) => {
      qualityMenu.addEventListener('click', () => this.activeTalent(index));
    });
  }

  init() {
    if(this.qualitiesMenu.length && this.qualitiesContent.length) {
      this.activeTalent(0);
      this.addTalentEvent();
    }
    return this;
  }
}
