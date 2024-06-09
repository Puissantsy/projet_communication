let money = 0;
let augmentation = 1;
let time = 100;

const alimentation_item = [
    { src: './icon/alimentation.png', alt: 'Alimentation 1', PrixTextTime: 100, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 1" },
    { src: './icon/alimentation2.png', alt: 'Alimentation 2', PrixTextTime: 1000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 2" },
    { src: './icon/alimentation3.png', alt: 'Alimentation 3', PrixTextTime: 10000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 3" },
    { src: './icon/alimentation4.png', alt: 'Alimentation 4', PrixTextTime: 100000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 4" },
    { src: './icon/alimentation5.png', alt: 'Alimentation 5', PrixTextTime: 1000000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 5" },
];

const carte_graphique_item = [
    { src: './icon/carte_graphique.png', alt: 'Carte_graphique 1', PrixTextTime: 150, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 1" },
    { src: './icon/carte_graphique2.png', alt: 'Carte_graphique 2', PrixTextTime: 1500, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 2" },
    { src: './icon/carte_graphique3.png', alt: 'Carte_graphique 3', PrixTextTime: 15000, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 3" },
    { src: './icon/carte_graphique4.png', alt: 'Carte_graphique 4', PrixTextTime: 150000, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 4" },
    { src: './icon/carte_graphique5.png', alt: 'Carte_graphique 5', PrixTextTime: 1500000, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 5" },
];

const carte_mère_item = [
    { src: './icon/carte_mère.png', alt: 'Carte_mère 1', PrixTextTime: 150, PrixTextMoney: 20, info: "Te permet de débloquer la carte mère de niveau 1" },
];

const items = [
    { item: alimentation_item, modal_chercher: document.getElementById('modal_found_alimentation'), modal_ameliorer: document.getElementById('modal_upgrade_alimentation') },
    { item: carte_graphique_item, modal_chercher: document.getElementById('modal_found_carte_graphique'), modal_ameliorer: document.getElementById('modal_upgrade_carte_graphique') },
    { item: carte_mère_item, modal_chercher: document.getElementById('modal_found_carte_mère'), modal_ameliorer: document.getElementById('modal_upgrade_carte_mère') },
];

let removedImagesAlimentation = JSON.parse(localStorage.getItem('removedImagesAlimentation')) || [];
let removedImagesCarte_graphique = JSON.parse(localStorage.getItem('removedImagesCarte_graphique')) || [];
let removedImagesCarte_mère = JSON.parse(localStorage.getItem('removedImagesCarte_mère')) || [];

const removedImagesAll = [
    { variable: removedImagesAlimentation, name: 'Alimentation', key: 'removedImagesAlimentation' },
    { variable: removedImagesCarte_graphique, name: 'Carte_graphique', key: 'removedImagesCarte_graphique' },
    { variable: removedImagesCarte_mère, name: 'Carte_mère', key: 'removedImagesCarte_mère' },
];

const images = [];

window.onload = function () {
    loadState();
};

function loadState() {
    if (localStorage.getItem('money')) {
        money = parseInt(localStorage.getItem('money'));
    }
    if (localStorage.getItem('time')) {
        time = parseInt(localStorage.getItem('time'));
    }
    if (localStorage.getItem('augmentation')) {
        augmentation = parseInt(localStorage.getItem('augmentation'));
    }

    document.getElementById('currency').textContent = 'Money: ' + money;
    document.getElementById('timeDisplay').textContent = 'Time: ' + time;

    if (!localStorage.getItem('imagesLoaded')) {
        initializeImages();
        localStorage.setItem('imagesLoaded', 'true');
    } else {
        initializeImages();  // Make sure to initialize images
        restoreImagesState(); // Then restore the state
    }
}

function initializeImages() {
    images.length = 0; // Clear the images array
    items.forEach((composant, index1) => {
        composant.item.forEach((item, index) => {
            const container = document.createElement('div');
            container.classList.add('image-container');

            const container2 = document.createElement('div');
            container2.classList.add('image-container2');

            const info_bouton = document.createElement('button');
            info_bouton.classList.add('information-button');
            info_bouton.textContent = "Info";
            const img = document.createElement('img');
            img.classList.add('image_upgrade');
            img.src = './icon/Nope.png';
            const prix = document.createElement('p');
            prix.classList.add('upgrade-button');
            prix.textContent = item.PrixTextTime;
            container2.appendChild(info_bouton);
            container2.appendChild(img);
            container.appendChild(container2);
            container.appendChild(prix);
            composant.modal_chercher.appendChild(container);

            // Add the image to the images array
            images.push(img);

            // Hide image if it's in the removed list
            if (removedImagesAll[index1].variable.includes(index)) {
                container.style.display = 'none';
            }

            // Add click event listener for the image
            img.addEventListener('click', () => {
                if ((removedImagesAll[index1].variable[index - 1] == index - 1 || index == 0) && (removedImagesAll[index1].variable[index] != index) && (item.PrixTextTime <= time)) {
                    container.style.display = 'none';
                    removedImagesAll[index1].variable.push(index);
                    localStorage.setItem(removedImagesAll[index1].key, JSON.stringify(removedImagesAll[index1].variable));
                    renderRemovedImages(item, index1);
                }
            });

            // Add click event listener for the info button
            info_bouton.addEventListener('click', () => {
                alert(item.info);
            });
        });
    });
}

function restoreImagesState() {
    removedImagesAll.forEach((itemGroup, groupIndex) => {
        itemGroup.variable.forEach((imageIndex) => {
            const modal = items[groupIndex].modal_chercher;
            const container = modal.children[imageIndex];
            if (container) {
                container.style.display = 'none';
            } else {
                console.error(`Container for group ${groupIndex} at index ${imageIndex} not found.`);
            }
        });
    });
}

function updateImages() {
    let nombre = 0;
    items.forEach((composant, index1) => {
        composant.item.forEach((item, index) => {
            const prixValue = parseFloat(item.PrixTextTime);
            const image = images[nombre];
            const container = document.querySelectorAll('.image-container')[nombre];
            if (image) {
                if ((prixValue * 0.8) <= time) {
                    if ((removedImagesAll[index1].variable[index - 1] == index - 1 || index == 0) && (removedImagesAll[index1].variable[index] != index)) {
                        image.src = item.src;
                        image.alt = item.alt;
                    }
                } else {
                    image.src = './icon/Nope.png';
                    image.alt = "Pas assez d'argent";
                }
                if (prixValue > time) {
                    image.style.filter = 'grayscale(100%)';
                } else {
                    image.style.filter = 'grayscale(0%)';
                }
                nombre++;
            }
        });
    });
}

document.getElementById('Reset_button').addEventListener('click', function () {
    localStorage.clear();
    removedImagesAll.forEach(item => {
        item.variable = [];
    });
    items.forEach(composant => {
        while (composant.modal_chercher.firstChild) {
            composant.modal_chercher.removeChild(composant.modal_chercher.firstChild);
        }
    });
    money = 0;
    time = 0;
    document.getElementById('currency').textContent = 'Money: ' + money;
    document.getElementById('timeDisplay').textContent = 'Time: ' + time;
    localStorage.setItem('imagesLoaded', 'false');
    initializeImages(); // Reload the images after reset
});
