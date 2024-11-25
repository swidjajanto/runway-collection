const images = [
    'images/summer-one.jpg',
    'images/summer-two.jpg',
    'images/summer-three.jpg',
    'images/summer-four.WEBP',
    'images/summer-five.WEBP',
    'images/summer-six.WEBP',
    'images/summer-seven.WEBP',
    'images/summer-eight.WEBP',
    'images/summer-nine.WEBP',
    'images/summer-ten.WEBP',
    'images/summer-eleven.WEBP',
    'images/summer-twelve.WEBP',
    'images/summer-thirteen.WEBP',
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