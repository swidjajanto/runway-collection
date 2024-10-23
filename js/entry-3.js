const images = [
    'images/fall-one.jpg',
    'images/fall-two.jpg',
    'images/fall-three.jpg',
    'images/fall-four.jpg',
    'images/fall-five.jpg',
    'images/fall-six.WEBP',
    'images/fall-seven.WEBP',
    'images/fall-eight.WEBP',
    'images/fall-nine.WEBP',
    'images/fall-ten.WEBP',
]
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