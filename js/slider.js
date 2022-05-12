const images = [
    'image/pic-1.jpg',
    'image/pic-2.jpg',
    'image/pic-3.jpg',
    'image/pic-4.jpg',
    'image/pic-5.jpg',
    'image/pic-7.jpg',
    'image/pic-8.jpg'
];
let imageIndex = 0;
imageElement = document.getElementById('images')
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    imageElement.setAttribute('src', imgUrl);
    imageIndex++;
}, 1000)