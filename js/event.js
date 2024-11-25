const images = [
    'images/event-one.jpg',
    'images/event-two.jpg',
    'images/event-three.jpg',
    'images/event-four.jpg',
    'images/event-five.jpg',
    'images/event-six.jpg',
    'images/event-seven.jpg',
    'images/event-eight.jpg',
    'images/event-nine.jpg',
    'images/event-ten.jpg',
    'images/event-eleven.jpg',
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