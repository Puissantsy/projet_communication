// script.js

// Nouvel objet contenant les informations des composants
const data_components = [
  {
    title: 'Transistor',
    image: './icon/transistor.png',
    info: `
      <h3>Histoire des Transistors</h3>
      <p>Le transistor a été inventé en 1947 par John Bardeen, Walter Brattain et William Shockley aux Bell Labs. 
      Cette invention a marqué le début de l'ère de l'électronique moderne, remplaçant les tubes à vide utilisés dans les premiers ordinateurs.</p>
      <h4>Évolution</h4>
      <ul>
        <li>1947: Invention du transistor aux Bell Labs</li>
        <li>1954: Premier transistor commercial en silicium par Texas Instruments</li>
        <li>1960s: Transistors intégrés dans les circuits intégrés</li>
        <li>1970s: Avènement des microprocesseurs utilisant des millions de transistors</li>
      </ul>
    `
  },
  {
    title: 'Alimentation',
    image: './icon/alimentation.png',
    info: `
      <h3>Histoire de l'Alimentation</h3>
      <p>L'alimentation électrique des ordinateurs a évolué depuis les simples piles et batteries des premiers calculateurs jusqu'aux alimentations sophistiquées des ordinateurs modernes.</p>
      <h4>Évolution</h4>
      <ul>
        <li>1940s: Utilisation de batteries et de générateurs mécaniques</li>
        <li>1950s: Introduction des alimentations à découpage</li>
        <li>1980s: Standardisation des alimentations ATX pour les PC</li>
        <li>2000s: Développement des alimentations modulaires et à haute efficacité</li>
      </ul>
    `
  },
  {
    title: 'Carte Graphique',
    image: './icon/carte_graphique.png',
    info: `
      <h3>Histoire des Cartes Graphiques</h3>
      <p>Les cartes graphiques ont évolué d'affichages simples en texte aux GPU sophistiqués capables de rendus 3D complexes.</p>
      <h4>Évolution</h4>
      <ul>
        <li>1970s: Affichages en texte et graphiques 2D de base</li>
        <li>1980s: Introduction des premiers adaptateurs graphiques (CGA, EGA, VGA)</li>
        <li>1990s: Premières cartes graphiques 3D dédiées</li>
        <li>2000s: GPU modernes avec capacités de calcul parallèle avancées</li>
      </ul>
    `
  },
  {
    title: 'Carte Mère',
    image: './icon/carte_mère.png',
    info: `
      <h3>Histoire des Cartes Mères</h3>
      <p>La carte mère est le composant central qui relie tous les autres composants de l'ordinateur, depuis les premiers calculateurs jusqu'aux PC modernes.</p>
      <h4>Évolution</h4>
      <ul>
        <li>1940s: Plaques de câblage manuel</li>
        <li>1960s: Introduction des circuits imprimés (PCB)</li>
        <li>1980s: Standardisation des facteurs de forme (AT, ATX)</li>
        <li>2000s: Intégration de plus en plus de fonctionnalités sur la carte mère</li>
      </ul>
    `
  },
  {
    title: 'Carte Réseau',
    image: './icon/carte_réseau.png',
    info: `
      <h3>Histoire des Cartes Réseau</h3>
      <p>Les cartes réseau permettent la communication entre les ordinateurs sur un réseau. Elles ont évolué avec les technologies de réseau.</p>
      <h4>Évolution</h4>
      <ul>
        <li>1970s: Réseaux locaux (LAN) primitifs</li>
        <li>1980s: Introduction des cartes Ethernet</li>
        <li>1990s: Standardisation des cartes Ethernet 10/100 Mbps</li>
        <li>2000s: Développement des cartes réseau sans fil et Gigabit Ethernet</li>
      </ul>
    `
  }
];

const container = document.getElementById('imageContainer');

// Création dynamique des annotations sur la timeline
data_components.forEach((component, index) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('overlay-image');
  wrapper.classList.add(index % 2 === 0 ? 'right' : 'left'); // Alternance entre droite et gauche

  const img = document.createElement('img');
  img.src = index % 2 === 0 ? './image/annotation_right.png' : './image/annotation_left.png';
  wrapper.setAttribute('data-name', component.title);
  wrapper.setAttribute('data-info', component.info);
  wrapper.setAttribute('data-image', component.image);

  const topPercentage = 10 + (40 * index / (data_components.length - 1)); // Distribution entre 10% et 90%
  wrapper.style.top = `${topPercentage}%`;

  wrapper.appendChild(img);
  container.appendChild(wrapper);
});

document.addEventListener('DOMContentLoaded', function () {
  const photos = document.querySelectorAll('.overlay-image');
  const modal = document.getElementById('modal');
  const modalName = document.getElementById('modal-name');
  const modalInfo = document.getElementById('modal-info');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.querySelector('.close');

  photos.forEach(photo => {
    photo.addEventListener('click', function () {
      const name = photo.getAttribute('data-name');
      const info = photo.getAttribute('data-info');
      const image = photo.getAttribute('data-image');

      modalName.innerHTML = name;
      modalInfo.innerHTML = info;
      modalImage.src = image;
      modalImage.alt = name;
      modal.style.display = 'block';
    });
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

