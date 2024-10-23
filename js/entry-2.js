const images = [
    'images/spring-one.WEBP',
    'images/spring-two.WEBP',
    'images/spring-three.WEBP',
    'images/spring-four.WEBP',
    'images/spring-five.WEBP',
    'images/spring-six.WEBP',
    'images/spring-seven.jpg',
    'images/spring-eight.jpg',
    'images/spring-nine.jpg',
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