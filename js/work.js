const images = [
    'images/work-one.jpg',
    'images/work-two.jpeg',
    'images/work-three.WEBP',
    'images/work-four.WEBP',
    'images/work-five.WEBP',
    'images/work-six.WEBP',
    'images/work-seven.WEBP',
    'images/work-eight.WEBP',
    'images/work-nine.WEBP',
    'images/work-ten.WEBP',
    'images/work-eleven.WEBP',
    'images/work-twelve.WEBP',
    'images/work-thirteen.WEBP',
    'images/work-fourteen.WEBP',

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