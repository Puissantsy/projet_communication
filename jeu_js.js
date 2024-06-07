let money = 100;
let augmentation_seconde = 0;
let augmentation_clique = 1;
let time = 100;
let time_money = 1000;
const alimentation_item = [
    { src: './icon/alimentation.png', alt: 'Alimentation 1', PrixTextTime: 100, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 1", info_ameliorer: "money par seconde augmenté de 1", nombre: 1, variable:0 },
    { src: './icon/alimentation2.png', alt: 'Alimentation 2', PrixTextTime: 1000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 2", info_ameliorer: "money par seconde augmenté de 10", nombre: 10, variable:0 },
    { src: './icon/alimentation3.png', alt: 'Alimentation 3', PrixTextTime: 10000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 3", info_ameliorer: "money par seconde augmenté de 50", nombre: 50 , variable:0},
    { src: './icon/alimentation4.png', alt: 'Alimentation 4', PrixTextTime: 100000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 4", info_ameliorer: "money par seconde augmenté de 100", nombre: 100 , variable:0},
    { src: './icon/alimentation5.png', alt: 'Alimentation 5', PrixTextTime: 1000000, PrixTextMoney: 20, info: "Te permet de débloquer l'alimentation de niveau 5", info_ameliorer: "money par seconde augmenté de 500", nombre: 500 , variable:0},
];

const carte_graphique_item = [
    { src: './icon/carte_graphique.png', alt: 'Carte_graphique 1', PrixTextTime: 150, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 1", info_ameliorer: "money par clique augmenté de 1", nombre: 1, variable:1 },
    { src: './icon/carte_graphique2.png', alt: 'Carte_graphique 2', PrixTextTime: 1500, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 2", info_ameliorer: "money par clique augmenté de 2" , nombre: 2, variable:1},
    { src: './icon/carte_graphique3.png', alt: 'Carte_graphique 3', PrixTextTime: 15000, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 3", info_ameliorer: "money par clique augmenté de 5", nombre: 5, variable:1 },
    { src: './icon/carte_graphique4.png', alt: 'Carte_graphique 4', PrixTextTime: 150000, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 4", info_ameliorer: "money par clique augmenté de 10", nombre: 10 , variable:1},
    { src: './icon/carte_graphique5.png', alt: 'Carte_graphique 5', PrixTextTime: 1500000, PrixTextMoney: 20, info: "Te permet de débloquer la carte graphique de niveau 5", info_ameliorer: "money par clique augmenté de 50" , nombre: 50, variable:1},
];

const carte_mère_item = [
    { src: './icon/carte_mère.png', alt: 'Carte_mère 1', PrixTextTime: 150, PrixTextMoney: 20, info: "Te permet de débloquer la carte mère de niveau 1", info_ameliorer: " 5% de money par seconde convertit en money par clique" , nombre: augmentation_seconde*(5/100), variable:2},
];

const items = [
    { item: alimentation_item, modal_chercher: document.getElementById('modal_found_alimentation'), modal_ameliorer: document.getElementById('modal_upgrade_alimentation') },
    { item: carte_graphique_item, modal_chercher: document.getElementById('modal_found_carte_graphique'), modal_ameliorer: document.getElementById('modal_upgrade_carte_graphique') },
    { item: carte_mère_item, modal_chercher: document.getElementById('modal_found_carte_mère'), modal_ameliorer: document.getElementById('modal_upgrade_carte_mère') },
];

let removedImagesAlimentation = JSON.parse(localStorage.getItem('removedImagesAlimentation')) || [];
let removedImagesCarte_graphique = JSON.parse(localStorage.getItem('removedImagesCarte_graphique')) || [];
let removedImagesCarte_mère = JSON.parse(localStorage.getItem('removedImagesCarte_mère')) || [];

const icon_clicker = document.getElementById('triggerImage');

const removedImagesAll = [
    { variable: removedImagesAlimentation, name: 'Alimentation', key: 'removedImagesAlimentation' },
    { variable: removedImagesCarte_graphique, name: 'Carte_graphique', key: 'removedImagesCarte_graphique' },
    { variable: removedImagesCarte_mère, name: 'Carte_mère', key: 'removedImagesCarte_mère' },
];

const images = [];
const images_ameliorer = [];

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
    if (localStorage.getItem('augmentation_seconde')) {
        augmentation_seconde = parseInt(localStorage.getItem('augmentation_seconde'));
    }

    if (localStorage.getItem('augmentation_clique')) {
        augmentation_clique = parseInt(localStorage.getItem('augmentation_clique'));
    }

    if (localStorage.getItem('time_money')) {
        time_money = parseInt(localStorage.getItem('time_money'));
    }

    document.getElementById('currency').textContent = 'Money: ' + money;
    document.getElementById('timeDisplay').textContent = 'Time: ' + time;

    if (!localStorage.getItem('imagesLoaded')) {
        initializeImages();
        localStorage.setItem('imagesLoaded', 'true');
    } else {
        initializeImages();
        restoreImagesState();
    }
}

icon_clicker.addEventListener('click', () => {
    money+= augmentation_clique; // Increment the money variable
    localStorage.setItem('money', money); // Store the updated money value in localStorage
    document.getElementById('currency').textContent = 'Money: ' + money;

});

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
                const previousIndexRemoved = removedImagesAll[index1].variable.includes(index - 1);
                const currentIndexRemoved = removedImagesAll[index1].variable.includes(index);

                console.log('Previous index removed:', previousIndexRemoved);
                console.log('Current index removed:', !currentIndexRemoved);
                console.log('Item price time:', item.PrixTextTime);
                console.log('Current time:', time);
                console.log('Condition:', (previousIndexRemoved || index == 0) && !currentIndexRemoved && item.PrixTextTime <= time);

                if ((previousIndexRemoved || index == 0) && !currentIndexRemoved && item.PrixTextTime <= time) {
                    container.style.display = 'none';
                    removedImagesAll[index1].variable.push(index);
                    localStorage.setItem(removedImagesAll[index1].key, JSON.stringify(removedImagesAll[index1].variable));
                    renderRemovedImages(item, index1, index);
                } else {
                    alert("You don't have enough time or prerequisites! "+ item.PrixTextTime+" "+ time);
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
                renderRemovedImages(items[groupIndex].item[imageIndex], groupIndex, imageIndex);
            } else {
                console.error(`Container for group ${groupIndex} at index ${imageIndex} not found.`);
            }
        });
    });
}

// Call restoreImagesState after state changes
function someFunctionThatChangesState() {
    // After any state change
    restoreImagesState();
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

function renderRemovedImages(item, index1, index) {
    const container = document.createElement('div');
    container.classList.add('image-container');
    container.classList.add(removedImagesAll[index1].key);

    const container2 = document.createElement('div');
    container2.classList.add('image-container2');

    const info_bouton = document.createElement('button');
    info_bouton.classList.add('information-button');
    info_bouton.textContent = "Info";
    const img = document.createElement('img');
    img.classList.add('image_upgrade');
    img.src = item.src;
    img.alt = item.alt;

    const prix = document.createElement('p');
    prix.classList.add('upgrade-button');
    prix.textContent = item.PrixTextMoney;

    container2.appendChild(info_bouton);
    container2.appendChild(img);
    container.appendChild(container2);
    container.appendChild(prix);

    items[index1].modal_ameliorer.appendChild(container);
    images_ameliorer.push(container);

    // Add click event listener for the info button
    info_bouton.addEventListener('click', () => {
        alert(item.info_ameliorer);
    });

    // Add click event listener for the image
    // Ensure item.PrixTextTime and item.PrixTextMoney are numbers
img.addEventListener('click', () => {
    const indexToRemove = removedImagesAll[index1].variable.indexOf(index);
    if (item.PrixTextMoney <= money && indexToRemove > -1) {
        container.style.display = 'none';

        if (items[index1].item[index].variable == 0) {
            augmentation_seconde += items[index1].item[index].nombre;
            localStorage.setItem('augmentation_seconde', augmentation_seconde);
        } else if (items[index1].item[index].variable == 1) {
            augmentation_clique += items[index1].item[index].nombre;
            localStorage.setItem('augmentation_clique', augmentation_clique);
        } else if (items[index1].item[index].variable == 2) {
            augmentation_clique += items[index1].item[index].nombre;
            localStorage.setItem('augmentation_clique', augmentation_clique);
        }

        removedImagesAll[index1].variable.splice(indexToRemove, 1);
        const cleanedArray = removedImagesAll[index1].variable.filter(item => item !== undefined);
        localStorage.setItem(removedImagesAll[index1].key, JSON.stringify(cleanedArray));
        money -= item.PrixTextMoney;
        localStorage.setItem('money', money);
        document.getElementById('currency').textContent = 'Money: ' + money;

        restoreImagesState();
    } else {
        alert("You don't have enough money! "+item.PrixTextMoney+ " "+ money );
    }
});

}


// Modal open/close functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.getElementById('Chercher_objet').addEventListener('click', function () {
    openModal('modal2');
});

document.getElementById('Ameliorer_objet').addEventListener('click', function () {
    openModal('modal1');
});

document.querySelectorAll('.close').forEach(function (element) {
    element.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        closeModal(modalId);
    });
});

window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Timer to increase time and update images
setInterval(() => {
    time += 10000;
    document.getElementById('timeDisplay').textContent = 'Time: ' + time;
    localStorage.setItem('time', time); // Save to local storage
    updateImages();
}, 1000);

setInterval(() => {
    money += augmentation_seconde;
    document.getElementById('currency').textContent = 'Money: ' + money;
    localStorage.setItem('money', money); // Save to local storage
}, time_money);

document.getElementById('Reset_button').addEventListener('click', function () {
    localStorage.clear();
    removedImagesAll.forEach(item => {
        item.variable = [];
    });
    items.forEach(composant => {
        while (composant.modal_chercher.firstChild) {
            composant.modal_chercher.removeChild(composant.modal_chercher.firstChild);
        }
        while (composant.modal_ameliorer.firstChild) {
            composant.modal_ameliorer.removeChild(composant.modal_ameliorer.firstChild);
        }
    });
    money = 0;
    time = 0;
    document.getElementById('currency').textContent = 'Money: ' + money;
    document.getElementById('timeDisplay').textContent = 'Time: ' + time;
    localStorage.setItem('imagesLoaded', 'false');
    initializeImages(); // Reload the images after reset
});
