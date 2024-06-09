// script.js


// Combiner les deux ensembles de données en un seul

// Objet pour les images d'annotation spécifiques
const annotationImages = {
  'Transistor': './image/annotation_transistor.png',
  'Alimentation': './image/annotation_alimentation.png',
  'Carte Graphique': './image/annotation_carte_graphique.png',
  'Carte mère': './image/annotation_carte_mère.png',
  'Carte Réseau': './image/annotation_carte_réseau.png',
  'ENIAC': './image/annotation_ENIAC.png',
  'Vacuum Tube': './image/annotation_vacuum_tube.png',
  'UNIVAC I': './image/annotation_univac.png',
  'Apple I': './image/annotation_apple_i.png',
  'Macintosh': './image/annotation_macintosh.png',
  'Souris': './image/annotation_souris.png',
  'Clavier': './image/annotation_clavier.png',
  
};

const container = document.getElementById('imageContainer');

// Fonction pour créer les annotations sur la timeline
function createAnnotations(data) {
  data.forEach((component, index) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('overlay-image');
    wrapper.classList.add(index % 2 === 0 ? 'right' : 'left'); // Alternance entre droite et gauche

    const img = document.createElement('img');
    img.src = annotationImages[component.title] || './image/annotation_default.png'; // Utilisez une image par défaut si le titre n'est pas trouvé

    wrapper.setAttribute('data-name', component.title);
    wrapper.setAttribute('data-info', component.info);
    wrapper.setAttribute('data-image', component.image);

    const topPercentage = 10 + (70 * index / (data.length - 1)); // Distribution entre 10% et 90%
    wrapper.style.top = `${topPercentage}%`;

    wrapper.appendChild(img);
    container.appendChild(wrapper);
  });
}

// Création des annotations pour l'ensemble combiné
createAnnotations(data_components);

document.addEventListener('DOMContentLoaded', function () {
  const photos = document.querySelectorAll('.overlay-image');
  const modal = document.getElementById('modal');
  const modalName = document.getElementById('modal-name');
  const modalInfo = document.getElementById('modal-info');
  const modalImage = document.getElementById('modal-image2');
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
