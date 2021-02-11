export default class characterSelector {
  constructor(characterCards, guideCards) {
    this.characterCards = document.querySelectorAll(characterCards);
    this.guideCards = document.querySelectorAll(guideCards);
    this.activeClass = 'active';
    this.closeClass = 'close';
  }

  activeCard(index) {
    this.characterCards.forEach((card) => {
      card.classList.remove(this.activeClass);
      card.classList.add(this.closeClass);
    });
    this.guideCards.forEach((card) => {
      card.classList.remove(this.activeClass);
      card.classList.add(this.closeClass);
    });

    this.characterCards[index].classList.remove(this.closeClass);
    this.guideCards[index].classList.remove(this.closeClass);
    this.characterCards[index].classList.add(this.activeClass);
    this.guideCards[index].classList.add(this.activeClass);
  }

  createXiaoGuideElement() {
    let guideDiv = `
    <div class="card xiao character-guide close">
        <h2>Guardião Yaksha</h2>
        <div class="character-description">
          <p>
            Xiao é um dos melhores DPS do jogo e funciona bem em qualquer time que possa oferecer suporte a ele.
          </p>
        </div>
        
        <div class="qualities">
          <div class="qualities-selector">
            <h2 class="active">Vantagens</h2>
            <h2>Desvantagens</h2>
          </div>
          <div class="qualities-description">
            <div class="advantages">
              <ul>
                <li>Ataques rápidos e fortes com grande alcance</li>
                <li>Habilidade elemental pode ser usada para mobilidade aérea e atacar pontos fracos das Máquinas das Ruínas</li>
                <li>Sua Explosão Elemental aumenta absurdamente o dano e propriedade de todos os seus golpes</li>
              </ul>
            </div>
            <div class="disadvantages">
              <ul>
                <li>Durante sua Explosão Elemental, Xiao não gera partículas elementais com sua habilidade básica</li>
                <li>Durante a Explosão Elemental, Xiao continuamente perde vida. Necessário personagens que possam curá-lo.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="talents">
          <h2>Talentos</h2>
          <div data-tab="talents-menu">
           <img src="./assets/xiao-normal-attack.png" alt="Xiao Ataque Normal" title="Impulso do Redemoinho">
           <img src="./assets/xiao-skill.png" alt="Xiao Skill" title="Vento Lemniscático">
           <img src="./assets/xiao-burst.png" alt="Xiao Burst" title="Dança Nuo da Conquista do Mal">
          </div>
        </div>
        <div class="talent-description">
          <div>
            <h3>Impulso do Redemoinho</h3>
            <p>
              O talento mais importante de Xiao em conjunto com sua Explosão Elemental.
              Aprimorar este talento é extremamente importante para aumentar o dano de seu "Ataque Imersivo",
              que é sua principal fonte de dano.
            </p>
          </div>
          <div>
            <h3>Vento Lemniscático</h3>
            <p>
              Esta Habilidade Elemental causa um bom dano, porém é melhor utilizada pela sua recarga de energia.
              Durante a Explosão Elemental partículas de energia não são geradas, então muito cuidado!
            </p>
          </div>
          <div>
            <h3>Dança Nuo da Conquista do Mal</h3>
            <p>
              A Explosão Elemental de Xiao é sua principal habilidade. Ao colocar a máscara Yaksha o dano de todos
              os seus ataques aumentam assustadoramente e passam a causar dano Anemo, além disso sua capacidade de
              salto é aumentada e a área do "Ataque Imersivo" é consideravelmente maior.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  createZhongliGuideElement() {
    let guideDiv = `
    <div class="card zhongli character-guide close">
        <h2>Rex Lapis</h2>
        <div class="character-description">
          <p>
            Na versão 1.3, Zhongli recebe buffs que o tornam um dos melhores personagens suporte do jogo, além de melhorarem significativamente seu DPS,
            transformando-o em um personagem extremamente versátil.
          </p>
        </div>
        
        <div class="geo-element">
          <h2>Geo</h2>
          <p>
            A Resonância Elemental de Geo recebeu um buff aumentando a força dos escudos em 15%, além de garantir 15% de dano adicional 
            e diminuir 20% de resistência Geo dos inimigos em 20% ao causar dano enquanto protegido por um escudo.
          </p>
        </div>

        <div class="qualities">
          <div class="qualities-selector">
            <h2 class="active">Vantagens</h2>
            <h2>Desvantagens</h2>
          </div>
          <div class="qualities-description">
            <div class="advantages">
              <ul>
                <li>Cria um escudo com MUITA resistência capaz de defender todos os tipos de ataque.</li>
                <li>Personagem muito versátil, eficiente em qualquer situação. É capaz de entrar em qualquer composição de time sem grandes problemas.</li>
                <li>A resonância elemental de Geo melhora ainda mais sua eficiência.</li>
                <li>Baixa recarga de energia em sua Explosão Elemental e baixo tempo de recarga em seus talentos em geral.</li>
              </ul>
            </div>
            <div class="disadvantages">
              <ul>
                <li>Gera poucas partículas elementais, necessitando outros personagens que gerem as partículas necessárias em seu lugar.</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="talents">
          <h2>Talentos</h2>
          <div data-tab="talents-menu">
           <img src="./assets/zhongli-normal-attack.png" alt="Zhongli Ataque Normal" title="Chuva de Pedras">
           <img src="./assets/zhongli-skill.png" alt="Zhongli Skill" title="Dominus Lapidis">
           <img src="./assets/zhongli-burst.png" alt="Zhongli Burst" title="Chuva Estelar">
          </div>
        </div>
        <div class="talent-description">
          <div>
            <h3>Chuva de Pedras</h3>
            <p>
              Os ataques normais de Zhongli agora escalam em 1.39% de seu HP máximo, aumentando bastante seu dano.
              Foque neste talendo apenas se deseja seguir por uma build de DPS.
            </p>
          </div>
          <div>
            <h3>Dominus Lapidis</h3>
            <p>
              Os Buffs realizados na Habilidade Elemental de Zhongli são incríveis! Primeiramente, o dano passa a escalar em 1.9% de seu HP máximo.
              Ao manter pressionado o botão da habilidade, Zhongli não pode ser interrompido e cria o Escudo de Jade jutamente com a Estela de Pedra 
              caso ela não esteja em campo, e o escudo agora absorve 150% de dano de TODOS os danos elementais e físicos, além de uma absorção adicional 
              que escala com seu HP máximo. E talvez a mais importante mudança: qualquer personagem que fique sob a proteção do Escudo de Jade 
              passa a reduzir em 20% a resistência elemental e física de todos os inimigos ao redor!
            </p>
          </div>
          <div>
            <h3>Chuva Estelar</h3>
            <p>
              A Explosão Elemental de Zhongli possui recarga baixíssima aliado a um dano monstruoso em uma área gigante e, como se não bastasse, ainda
              petrifica todos os inimigos atingidos por alguns segundos.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  addGuideEvent() {
    this.characterCards.forEach((card, index) => {
      card.addEventListener('click', () => this.activeCard(index));
    });
  }

  init() {
    this.addGuideEvent();
    return this;
  }
}
