const images = [
    'images/sport-one.jpeg',
    'images/sport-two.jpg',
    'images/sport-three.jpg',
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