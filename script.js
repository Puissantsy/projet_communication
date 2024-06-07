// script.js

 
const imageSources_right = [
  './image/annotation_right.png',
  './image/annotation_right.png',
  './image/annotation_right.png',
  './image/annotation_right.png',
  './image/annotation_right.png'
  // Add more image URLs as needed
];

const imageSources_left = [
  './image/annotation_left.png',
  './image/annotation_left.png',
  './image/annotation_left.png',
  './image/annotation_left.png',
  './image/annotation_left.png'
];

const data_image = [
  './icon/transistor.png',
  './icon/alimentation.png',
  './icon/carte_graphique.png',
  './icon/carte_mère.png',
  './icon/carte_réseau.png'
]

const data_titre = [
  'Transistor',
  'Alimentation',
  'Carte_graphique',
  'Carte_mère',
  'Carte_réseau'
]

const data_info = [
  "",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor repudiandae repellat facere eveniet. Corrupti fuga quae dicta illo laboriosam accusamus ipsa sunt, accusantium modi harum obcaecati ad ab? Veniam. Quibusdam in nihil odio magni quis culpa delectus. Et fugiat quod accusantium vel incidunt soluta est dolore? Expedita, iure architecto praesentium excepturi rem, error perspiciatis impedit neque, aut incidunt labore? Ab et sed id assumenda nam illo fugit numquam veniam perferendis consectetur magnam nesciunt esse officiis amet quis ut in distinctio laborum, accusamus excepturi voluptatibus provident voluptatum optio? Neque, vitae. Inventore et quae quisquam, dolorem laborum quia, minus accusantium incidunt architecto voluptate nihil molestiae sapiente exercitationem nesciunt dolor? Facilis voluptas facere architecto adipisci id ullam perferendis ipsum non illum labore. Atque non asperiores praesentium suscipit odit laudantium ratione possimus nihil sit quo, tenetur accusantium beatae minus quod velit, iure quibusdam! Recusandae, consequatur? Quas ex ipsa inventore dignissimos molestiae dolorum assumenda.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor repudiandae repellat facere eveniet. Corrupti fuga quae dicta illo laboriosam accusamus ipsa sunt, accusantium modi harum obcaecati ad ab? Veniam. Quibusdam in nihil odio magni quis culpa delectus. Et fugiat quod accusantium vel incidunt soluta est dolore? Expedita, iure architecto praesentium excepturi rem, error perspiciatis impedit neque, aut incidunt labore? Ab et sed id assumenda nam illo fugit numquam veniam perferendis consectetur magnam nesciunt esse officiis amet quis ut in distinctio laborum, accusamus excepturi voluptatibus provident voluptatum optio? Neque, vitae. Inventore et quae quisquam, dolorem laborum quia, minus accusantium incidunt architecto voluptate nihil molestiae sapiente exercitationem nesciunt dolor? Facilis voluptas facere architecto adipisci id ullam perferendis ipsum non illum labore. Atque non asperiores praesentium suscipit odit laudantium ratione possimus nihil sit quo, tenetur accusantium beatae minus quod velit, iure quibusdam! Recusandae, consequatur? Quas ex ipsa inventore dignissimos molestiae dolorum assumenda.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor repudiandae repellat facere eveniet. Corrupti fuga quae dicta illo laboriosam accusamus ipsa sunt, accusantium modi harum obcaecati ad ab? Veniam. Quibusdam in nihil odio magni quis culpa delectus. Et fugiat quod accusantium vel incidunt soluta est dolore? Expedita, iure architecto praesentium excepturi rem, error perspiciatis impedit neque, aut incidunt labore? Ab et sed id assumenda nam illo fugit numquam veniam perferendis consectetur magnam nesciunt esse officiis amet quis ut in distinctio laborum, accusamus excepturi voluptatibus provident voluptatum optio? Neque, vitae. Inventore et quae quisquam, dolorem laborum quia, minus accusantium incidunt architecto voluptate nihil molestiae sapiente exercitationem nesciunt dolor? Facilis voluptas facere architecto adipisci id ullam perferendis ipsum non illum labore. Atque non asperiores praesentium suscipit odit laudantium ratione possimus nihil sit quo, tenetur accusantium beatae minus quod velit, iure quibusdam! Recusandae, consequatur? Quas ex ipsa inventore dignissimos molestiae dolorum assumenda.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor repudiandae repellat facere eveniet. Corrupti fuga quae dicta illo laboriosam accusamus ipsa sunt, accusantium modi harum obcaecati ad ab? Veniam. Quibusdam in nihil odio magni quis culpa delectus. Et fugiat quod accusantium vel incidunt soluta est dolore? Expedita, iure architecto praesentium excepturi rem, error perspiciatis impedit neque, aut incidunt labore? Ab et sed id assumenda nam illo fugit numquam veniam perferendis consectetur magnam nesciunt esse officiis amet quis ut in distinctio laborum, accusamus excepturi voluptatibus provident voluptatum optio? Neque, vitae. Inventore et quae quisquam, dolorem laborum quia, minus accusantium incidunt architecto voluptate nihil molestiae sapiente exercitationem nesciunt dolor? Facilis voluptas facere architecto adipisci id ullam perferendis ipsum non illum labore. Atque non asperiores praesentium suscipit odit laudantium ratione possimus nihil sit quo, tenetur accusantium beatae minus quod velit, iure quibusdam! Recusandae, consequatur? Quas ex ipsa inventore dignissimos molestiae dolorum assumenda."
]

const container = document.getElementById('imageContainer');

imageSources_right.forEach((src, index) => {
    // Create a wrapper div for each image
    const wrapper = document.createElement('div');
    wrapper.classList.add('overlay-image');
    wrapper.classList.add('right');

    // Create an img element
    const img = document.createElement('img');
    img.src = src;
    wrapper.setAttribute('data_name', data_titre[index]);
    wrapper.setAttribute('data_info', data_info[index]);
    wrapper.setAttribute('data_image', data_image[index]);
    


    // Calculate top percentage (for example, ranging from 10% to 50%)
    const topPercentage = 5 + (50 * index / (imageSources_right.length - 1)); // Distributed between 10% and 50%
    
    // Apply top percentage to the wrapper
    wrapper.style.top = `${topPercentage}%`;

    // Append the img to the wrapper and the wrapper to the container
    wrapper.appendChild(img);
    container.appendChild(wrapper);
});

imageSources_left.forEach((src, index) => {
  // Create a wrapper div for each image
  const wrapper = document.createElement('div');
  wrapper.classList.add('overlay-image');
  wrapper.classList.add('left');

  // Create an img element
  const img = document.createElement('img');
  img.src = src;
  wrapper.setAttribute('data_name', data_titre[index]);
  wrapper.setAttribute('data_info', data_info[index]);
  wrapper.setAttribute('data_image', data_image[index]);
  

  


  // Calculate top percentage (for example, ranging from 10% to 50%)
  const topPercentage = 10 + (50 * index / (imageSources_left.length - 1)); // Distributed between 10% and 50%
  
  // Apply top percentage to the wrapper
  wrapper.style.top = `${topPercentage}%`;

  // Append the img to the wrapper and the wrapper to the container
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
      const name = photo.getAttribute('data_name');
      const info = photo.getAttribute('data_info');
      const image = photo.getAttribute('data_image');

      modalName.textContent = name;
      modalInfo.textContent = info;
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