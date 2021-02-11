import TalentsNav from './modules/talents-nav.js';
import QualitiesNav from './modules/qualities-nav.js';
import CharacterSelector from './modules/character-selector.js';

const talentsNav = new TalentsNav('[data-tab="talents-menu"] img', '.talent-description div', '.xiao.character-guide h2');
talentsNav.init();

const qualitiesNav = new QualitiesNav('.qualities-selector h2', '.qualities-description div');
qualitiesNav.init();

const characterSelector = new CharacterSelector('.character-card', '.character-guide');
characterSelector.init();

