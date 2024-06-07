
const imageSources = [
  {
      src: './image/annotation_right.png',
      data_name: 'Alimentation',
      data_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      data_image: './icon/alimentation_info.png'
  },
  {
      src: './image/annotation_left.png',
      data_name: 'Carte Graphique',
      data_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      data_image: './icon/carte_graphique_info.png'
  },
  {
      src: './image/annotation_right.png',
      data_name: 'Alimentation',
      data_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      data_image: './icon/carte_réseau.png'
  }
  // Add more image objects as needed
];
const container = document.getElementById('imageContainer');

  imageSources.forEach((imageData, index) => {
      // Create a wrapper div for each image
      const wrapper = document.createElement('div');

      wrapper.classList.add('overlay-image');
      if (index % 2 == 0){
        wrapper.classList.add('right');
        const topPercentage = 5 + (40 * index / (imageSources.length - 1)); // Distributed between 10% and 50%
      }else{
        wrapper.classList.add('left');
        const topPercentage = 10 + (40 * index / (imageSources.length - 1)); // Distributed between 10% and 50%
      }
      

      // Create an img element
      const img = document.createElement('img');
      img.src = imageData.src;


      // Add classes and custom attributes to the img element
      
      
      img.setAttribute('data_name', imageData.data_name);
      img.setAttribute('data_info', imageData.data_info);
      img.setAttribute('data_image', imageData.data_image);

      // Calculate top percentage (for example, ranging from 10% to 50%)
      
      
      // Apply top percentage to the wrapper
      container.style.top = `${topPercentage}%`;

      // Append the img to the wrapper and the wrapper to the container
      wrapper.appendChild(img);
      container.appendChild(wrapper);
  });