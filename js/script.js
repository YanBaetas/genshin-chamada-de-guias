import Storage from './modules/storage.js';
import CharacterSelector from './modules/character-selector.js';

const characterSelector = new CharacterSelector('.character-card', '.character-guide', 'header');
characterSelector.init();

const storage = new Storage();
storage.init();