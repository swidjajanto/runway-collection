const images = [
    'images/out-one.jpg',
    'images/out-two.jpg',
    'images/out-three.jpg',
    'images/out-four.jpg',
    'images/out-five.jpg',
    
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