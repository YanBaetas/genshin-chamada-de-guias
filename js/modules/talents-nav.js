export default class TalentsNav {
  constructor(menu, content, xiaoTitle) {
    this.talentsMenu = document.querySelectorAll(menu);
    this.talentsContent = document.querySelectorAll(content);
    this.xiaoTitle = document.querySelector(xiaoTitle);
    this.activeClass = 'active';
  }

  activeTalent(index) {
    this.talentsMenu.forEach((talentMenu) => {
      talentMenu.classList.remove(this.activeClass);
    });
    this.talentsContent.forEach((talentContent) => {
      talentContent.classList.remove(this.activeClass);
    });
    this.talentsMenu[index].classList.add(this.activeClass);
    this.talentsContent[index].classList.add(this.activeClass);

    if(this.xiaoTitle) {
      this.xiaoTitle.dataset.animation = 'none';
      setTimeout(() => {
        if(index === this.talentsContent.length - 1) {
          this.xiaoTitle.dataset.animation = 'fadeOutIn';
          setTimeout(() =>{this.xiaoTitle.innerHTML = 'Conquistador de Demônios'}, 200);
          
        } else if(this.xiaoTitle.innerHTML === 'Conquistador de Demônios') {
          this.xiaoTitle.dataset.animation = 'fadeOutIn';
          setTimeout(() => {this.xiaoTitle.innerHTML = 'Guardião Yaksha'}, 200);
        }
      }, 100)
    }
  }

  addTalentEvent() {
    this.talentsMenu.forEach((talentMenu, index) => {
      talentMenu.addEventListener('click', () => this.activeTalent(index));
    });
  }

  init() {
    if(this.talentsMenu.length && this.talentsContent.length) {
      this.activeTalent(0);
      this.addTalentEvent();
    }
    return this;
  }
}
