const images = [
    'images/travel-one.jpeg',
    'images/travel-two.jpeg',
    'images/travel-three.jpeg',
    'images/travel-four.jpeg',
    'images/travel-five.jpeg',
    'images/travel-six.jpeg',
];

function displayRandomImage() {
    const imageContainer = document.getElementById('imageContainer');
    const randomIndex = Math.floor(Math.random() * images.length);
    
    const img = document.createElement('img');
    img.src = images[randomIndex];
    img.alt = 'Random Image ' + (randomIndex + 1);
    
    // Clear previous image and add new one
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
}