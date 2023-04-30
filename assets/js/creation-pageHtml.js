const imageElement = document.getElementById('image');
const imageUrl = new URLSearchParams(window.location.search).get('src');
if (imageUrl) {
    imageElement.src = imageUrl;
} else {
    window.history.back();
}