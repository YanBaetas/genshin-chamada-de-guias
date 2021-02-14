export default class Storage {
  
  get() {
    return JSON.parse(localStorage.getItem("background.character:color")) || '';
  }

  set(color) {
    localStorage.setItem("background.character:color", JSON.stringify(color));
   }

  init() {
    console.log(this.get());
    if(this.get()) {
      document.querySelector('header').style.background = this.get();;
    }
  }
}
